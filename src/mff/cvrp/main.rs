use std::env;
use std::fs;
use std::collections::HashSet;
use regex::Regex;
use string_builder::Builder;
use rand::prelude::*;
use std::fmt;


/* Special types for easier writing. */
type Grid<T> = Vec<Vec<T>>;
type Position = (i64, i64);

/* Type of edge distances. Only explicit and euclidean 2d is present. */
#[derive(PartialEq, Eq)]
enum EdgeType{
	Explicit,
	Euc2d
}

/* Compute the euclidean distance from two points x and y. */
fn euc2d_distance(x : Position, y : Position) -> f64{
	(((x.0 - y.0).pow(2) + (x.1 - y.1).pow(2)) as f64).sqrt()
}

/* Class for all necessary instance values.
 * When edge type is explicit it is always lower row matrix. */
struct Instance{
	name : String,
	comment : String,
	dimension : i64,
	capacity : i64,
	distances : Grid<i64>,
	edge_weight_type : EdgeType,
	demands : Grid<i64>,
	depots : Vec<i64>
}

impl Instance {
	/* Return the distance between x and y node. */
	fn length(&self, x : usize, y : usize) -> f64{
		if self.edge_weight_type == EdgeType::Explicit {
			let mut i : usize;
			let mut j : usize;
			(i, j) = (x, y);
			if x > y {
				(i, j) = (y, x);
			}
			return self.distances[j - 2][i - 1] as f64;
		}
		else {
			return euc2d_distance((self.distances[x - 1][1], self.distances[x - 1][2]), (self.distances[y - 1][1], self.distances[y - 1][2]));
		}
	}
	/* If  explicit edge type is given rearrange the items into a lower matrix type. */
	fn update_distances(&mut self) {
		if self.edge_weight_type == EdgeType::Explicit {
			let flattened_vector : Vec<i64> = self.distances.clone().into_iter().flatten().collect();
    		let mut increasing_size_vectors: Vec<Vec<i64>> = Vec::new();
    		let mut current_size = 1;
    		let mut index = 0;
    		
    		while index < flattened_vector.len() {
        		let mut sub_vector = Vec::new();
        		for _ in 0 .. current_size {
            		if index < flattened_vector.len() {
                		sub_vector.push(flattened_vector[index]);
                		index += 1;
            		}
        		}
        		increasing_size_vectors.push(sub_vector);
        		current_size += 1;
    		}
    		
    		self.distances = increasing_size_vectors;
		}
	}
}

/* Class for all data from solution file. */
#[derive(Clone)]
struct Solution{
	x : Grid<f64>,
	y : Grid<f64>,
	k : f64,
	result : f64,
}

/* Implementing print function, but it has warnings. */
impl fmt::Display for Solution {
    fn fmt(&self, f : &mut fmt::Formatter<'_>) -> fmt::Result {
		write!(f, "# Objective value = {}\n", self.result)?;
		for i in 0 .. self.x.len() {
			for j in 0 .. self.x[i].len() {
				write!(f, "x_{}_{} {}\n", i+1, j+1, self.x[i][j])?;
			}
		}
		for i in 0 .. self.y.len() {
			for j in 0 .. self.y[i].len() {
				write!(f, "y_{}_{} {}\n", i+1, j+1, self.y[i][j])?;
			}
		}
        write!(f, "k {}", self.k)
    }
}

/* Create an empty grid of given size. */
fn create_grid(n : usize) -> Grid<f64> {
    let mut grid = Vec::new();
    for _ in 0 .. n {
        let row = vec![0.0; n];
        grid.push(row);
    }
    grid
}

/* Randomly choose element based on the values.
 * Firstly normalize the values and then generate number from [0..1] and see where it ends. */
fn choose(elements : &Vec<(usize, f64)>) -> usize {
	let total_weight: f64 = elements.iter().map(|(_, weight)| weight).sum();
	let normalized_elements: Vec<_> = elements.iter().map(|(element, weight)| (element, weight / total_weight)).collect();
	let random_number: f64 = thread_rng().gen();
	let mut cumulative_weight = 0.0;
	let chosen_element = normalized_elements.iter().find(|&(_, weight)| {
		cumulative_weight += weight;
		cumulative_weight >= random_number
	});
	*chosen_element.unwrap().0
}

/* Parse the input and load all the data.
 * Some of the lines are skipped since they should be useless. */
fn parse_input(filepath : &str) -> Instance{
	let contents = fs::read_to_string(filepath).unwrap();

	let mut inst = Instance {
		name : "".to_string(), 
		comment: "".to_string(),
		dimension : 0,
		capacity : 0,
		edge_weight_type : EdgeType::Explicit,
		distances : vec![vec![]],
		demands : vec![vec![]],
		depots : vec![]};

	let rgx = Regex::new(r"NAME : (.*)\n[a-zA-Z\s:\d\_\n]*COMMENT : (.*)\n[a-zA-Z\s:\d\_\n]*TYPE : (.*)\n[a-zA-Z\s:\d\_\n]*DIMENSION : (.*)\n[a-zA-Z\s:\d\_\n]*EDGE\_WEIGHT\_TYPE : (.*)\n[a-zA-Z\s:\d\_\n]*CAPACITY : (.*)\n[a-zA-Z\s:\d\_\n]*NODE\_COORD\_SECTION\n([\d\s\n-]*)DEMAND\_SECTION\n([\d\s\n-]*)DEPOT\_SECTION\n([\d\s\n-]*)EOF|NAME : (.*)\n[a-zA-Z\s:\d\_\n]*COMMENT : (.*)\n[a-zA-Z\s:\d\_\n]*TYPE : (.*)\n[a-zA-Z\s:\d\_\n]*DIMENSION : (.*)\n[a-zA-Z\s:\d\_\n]*EDGE\_WEIGHT\_TYPE : (.*)\n[a-zA-Z\s:\d\_\n]*CAPACITY : (.*)\n[a-zA-Z\s:\d\_\n]*EDGE\_WEIGHT\_SECTION\n([\d\s\n-]*)DEMAND\_SECTION\n([\d\s\n-]*)DEPOT\_SECTION\n([\d\s\n-]*)EOF").unwrap();

	for (_, [name, comment, _, dim, ewt, capacity, ews, ds, dps]) in rgx.captures_iter(&contents).map(|c| c.extract()) {
		inst.name = name.to_string();
		inst.comment = comment.to_string();
		inst.dimension = dim.parse().unwrap();
		inst.capacity = capacity.parse().unwrap();
		
		if ewt == "EXPLICIT" {
			inst.edge_weight_type = EdgeType::Explicit;
		} else {
			inst.edge_weight_type = EdgeType::Euc2d;
		}
		
		inst.distances = ews.split('\n')
			.map(|c| c.split(' ')
				.filter(|c| *c != "")
				.map(|c| c.parse().unwrap())
				.collect())
			.filter(|v : &Vec<i64>| v.len() > 0)
			.collect();
			
		inst.demands = ds.split('\n')
			.map(|c| c.split(' ')
				.filter(|c| *c != "")
				.map(|c| c.parse().unwrap())
				.collect())
			.filter(|v : &Vec<i64>| v.len() > 0)
			.collect();
			
		inst.depots = dps.split('\n')
			.map(|c| c.split(' '))
			.flatten()
			.filter(|c| *c != "-1")
			.filter(|c| *c != "")
			.map(|c| c.parse().unwrap())
			.collect();
    }
  inst
}

/* Read the solution file. */
fn parse_solution(filepath : &str, inst : &Instance) -> Solution {
	let contents = fs::read_to_string(filepath).unwrap();

	let mut sol = Solution {
		x : create_grid(inst.dimension as usize),
		y : create_grid(inst.dimension as usize),
		k : 0.0,
		result : 0.0};
	
	for line in contents.split('\n') {
		let parts : Vec<&str> = line.split(' ').filter(|c| c.len() > 0).collect();
		if parts.len() == 0 {
			continue;
		}

		let number : f64 = parts[parts.len() - 1].parse().unwrap();

		if parts[0] == "#" {
			sol.result = number;
		} else if parts[0] == "k" {
			sol.k = number;
		} else {
			let value : Vec<&str> = parts[0].split('_').collect();
			let i : usize = value[1].parse().unwrap();
			let j : usize = value[2].parse().unwrap();
			if value[0] == "x" {
				sol.x[i - 1][j - 1] = number;
			} else {
				sol.y[i - 1][j - 1] = number;
			}
		}
	}

	sol
}

/* Given an instance and a solution generate aproximate integer solution. */
fn approximate(inst : &Instance, sol : &Solution) -> Solution {
	let mut apx_sol = Solution {
		x : create_grid(inst.dimension as usize),
		y : create_grid(inst.dimension as usize),
		k : 0.0,
		result : 0.0};
	
	let mut set : HashSet<usize> = HashSet::new();
	let mut current : usize = 1;
	let mut capacity : i64 = inst.capacity;
	let mut k : f64 = 0.0;

	while set.len() < inst.dimension as usize - 1 {
		let mut elements : Vec<(usize, f64)> = vec![];

		for i in 0 .. inst.dimension {
			elements.push((i as usize + 1, sol.x[current - 1][i as usize]))
		}

		elements = elements.into_iter()
			.filter(|(_, c)| *c > 0.0)
			.filter(|(e, _)| *e != current)
			.filter(|(e, _)| !set.contains(e))
			.filter(|(e, _)| inst.demands[*e - 1][1] <= capacity)
			.collect();
		
		let ele : usize;

		if elements.len() == 0 {
			// If no elements is provided choose arbitrary.
			let mut bound : usize = 0;
			if current == 1 {
				// If we start from 1, skip it.
				bound = 1;
			}
			for i in bound..inst.dimension as usize{
				// But it cannot be visited or exceed the capacity.
				if !set.contains(&(i as usize + 1)) && inst.demands[i][1] <= capacity {
					elements.push((i as usize + 1, 1.0));
				}
			}
		}

		ele = choose(&elements);

		apx_sol.x[current - 1][ele - 1] = 1.0;
		apx_sol.y[current - 1][ele - 1] = capacity as f64;

		if ele == 1 { // We ended.
			capacity = inst.capacity;
			k += 1.0;
		} else {
			set.insert(ele);
			capacity -= inst.demands[ele - 1][1];
		}
		current = ele;
	}
	apx_sol.x[current - 1][0] = 1.0;
	apx_sol.y[current - 1][0] = capacity as f64;
	let mut result : f64 = 0.0;
	for i in 0 .. inst.dimension as usize {
		for j in 0 .. inst.dimension as usize {
			if apx_sol.x[i][j] > 0.0 {
				result += inst.length(i + 1, j + 1);
			}
		}
	}
	apx_sol.k = k;
	apx_sol.result = result;
	apx_sol
}

/* Print the LP formulation. */
fn write_lp(inst : &Instance, ilp : bool){
	// Optimization.
	println!("Minimize");
	let mut first = true;
	for i in 1 .. inst.dimension + 1 {
		for j in 1 .. inst.dimension + 1 {
			if i != j {
				if !first {
					print!(" + ");
				}
				print!("{} x_{}_{}", inst.length(i as usize, j as usize), i, j);
				first = false;
			}
		}
	}
	println!("");
	// Constraints
	println!("Subject to");
	let mut depots_in = Builder::default();
	let mut depots_out = Builder::default();
	let mut depot_first = true;
	for i in 1 .. inst.dimension + 1 {
		let mut nodes_in = Builder::default();
		let mut nodes_out = Builder::default();
		let mut demands = Builder::default();
		first = true;
		for j in 1 .. inst.dimension+1 {
			println!("y_{}_{} - {} x_{}_{} <= 0", i, j, inst.capacity, i,j); 
			if i != j && !inst.depots.contains(&i) {
				if !first {
					nodes_in.append(" + ");
					nodes_out.append(" + ");
					demands.append(" + ");
				}
				nodes_in.append(format!("x_{}_{}", i, j));
				nodes_out.append(format!("x_{}_{}", j, i));
				demands.append(format!("y_{}_{} - y_{}_{}", j, i, i, j));
				first = false;
			}
		}
		if !inst.depots.contains(&i) {
			nodes_in.append(" = 1");
			nodes_out.append(" = 1");
			demands.append(format!(" = {}", inst.demands[i as usize - 1][1]));
			println!("{}", nodes_in.string().unwrap());
			println!("{}", nodes_out.string().unwrap());
			println!("{}", demands.string().unwrap());
		}
		for d in &inst.depots {
			if *d != i {
				if !depot_first {
					depots_in.append(" + ");
					depots_out.append(" + ");
				}
				depots_out.append(format!("x_{}_{}", *d, i));
				depots_in.append(format!("x_{}_{}", i, *d));
				depot_first = false;
			}
		}	
	}
	depots_in.append(" - k = 0");
	depots_out.append(" - k = 0");
	println!("{}", depots_in.string().unwrap());
	println!("{}", depots_out.string().unwrap());
	// Boundaries for variables
	println!("Bounds");
	for i in 1 .. inst.dimension + 1 {
		for j in 1 .. inst.dimension + 1 {
			if i != j {
				println!("0 <= x_{}_{} <= 1", i, j);
				println!("0 <= y_{}_{} <= {}", i, j, inst.capacity);
			}
		}
	}
	println!("1 <= k <= {}", inst.dimension);
	// This forces variables to be integers.
	if ilp {
		println!("Generals");
		for i in 1 .. inst.dimension + 1 {
			for j in 1 .. inst.dimension + 1 {
				if i != j {
					print!("x_{}_{} ", i, j);
				}
			}
		}
		println!("k");
	}
	
	println!("End");
}

/* The main run of the program. */
fn main() {
	let args: Vec<String> = env::args().collect();
	if args.len() >= 3 {
		let file: String = args[2].clone();
		let mut inst = parse_input(&file);
		inst.update_distances();
		if args[1] == "ilp" {
			write_lp(&inst, true);
		} else if args[1] == "lp" {
			write_lp(&inst, false);
		} else if args.len() >= 4 && args[1] == "apx" {
			let sol = parse_solution(&args[3], &inst);
			let mut best_result : f64 = 0.0;
			let mut best_sol = approximate(&inst, &sol);
			for _ in 0 .. 20*inst.dimension { // This is a magic constant.
				let apx_sol = approximate(&inst, &sol);
				if best_result == 0.0 || best_result > apx_sol.result {
					best_result = apx_sol.result;
					best_sol = apx_sol.clone();
				}
			}
			println!("{}", best_sol);
		}
		
	} else {
		println!("No file was given. Terminating.");
	}
}
