#!/bin/bash

set -ueo pipefail

NUMBER_OF_ILP=4

RED='\033[0;31m'
NC='\033[0m'

# Set if solutions exists.
existing_sol=0
sol_dir="solutions"

if [ "$#" -gt 0 ]; then
	sol_dir="$1"
	existing_sol=1
else
	mkdir -p "$sol_dir"
fi

# Check instances and download them if necessary.
instances_dir="instances"
instances="E-n13-k4 E-n22-k4 E-n23-k3 E-n30-k3 E-n31-k7 E-n33-k4 E-n51-k5 E-n76-k7 E-n76-k8 E-n76-k10 E-n76-k14 E-n101-k8 E-n101-k14"
url_prefix="http://vrp.galgos.inf.puc-rio.br/media/com_vrp/instances/E/"
cvrp_extension="vrp"

mkdir -p "$instances_dir"

for inst in $instances; do
	echo -e "Checking extistence of instance ${RED}$inst${NC}."
	file="$inst.$cvrp_extension"
	web="$url_prefix$file"
	place="$instances_dir/$file"
	if [ -e "$place" ]; then
		echo "Input $place already exists. Skipping downloading."
	else
		curl -o "$place" "$web"
	fi
done

# Create linear and integer porgrams.
ilp_counter=$NUMBER_OF_ILP
programs_dir="programs"
programs_ext="mst"
ilp="ilp"
lp="lp"

mkdir -p "$programs_dir"
mkdir -p "$programs_dir/$ilp"
mkdir -p "$programs_dir/$lp"

for inst in $instances; do
	echo -e "Creating programs for ${RED}$inst${NC}:"
	file="$inst.$cvrp_extension"
	place="$instances_dir/$file"

	ilp_program_place="$programs_dir/$ilp/$inst.$ilp"
	lp_program_place="$programs_dir/$lp/$inst.$lp"

	if [ "$ilp_counter" -gt 0 ]; then
		cargo run "$ilp" "$place" -r > "$ilp_program_place"
		echo -e "Created integer program $ilp_program_place."
		ilp_counter=$(($ilp_counter-1))

		#gurobi_cl ResultFile="$sol_dir/$ilp_dir/$inst.$sol_extension" "$ilp_place"
		#grep value "$sol_dir/$ilp_dir/$inst.$sol_extension" | cut -d ' ' -f 5
	fi
	cargo run "$lp" "$place" -r > "$lp_program_place"
		echo -e "Created linear program $lp_program_place."
done


# Use gurobi for solving all programs.
ilp_counter=$NUMBER_OF_ILP
sol="sol"

if [ "$existing_sol" == 0 ]; then
	mkdir -p "$sol_dir/$ilp"
	mkdir -p "$sol_dir/$lp"

	for inst in $instances; do
		echo -e "Solving programs for instance ${RED}$inst${NC}:"
		file="$inst.$cvrp_extension"
		place="$instances_dir/$file"

		ilp_program_place="$programs_dir/$ilp/$inst.$ilp"
		lp_program_place="$programs_dir/$lp/$inst.$lp"

		if [ "$ilp_counter" -gt 0 ]; then
			gurobi_cl ResultFile="$sol_dir/$ilp/$inst.$sol" "$ilp_program_place"
			ilp_counter=$(($ilp_counter-1))
		fi

		gurobi_cl ResultFile="$sol_dir/$lp/$inst.$sol" "$lp_program_place"

	done
fi

# Run the approximations.
apx="apx"

mkdir -p "$sol_dir/$apx"

for inst in $instances; do
	echo -e "Running approximation for instance ${RED}$inst${NC}:"
	file="$inst.$cvrp_extension"
	place="$instances_dir/$file"
	solution="$sol_dir/$lp/$inst.$sol"
	apx_result="$sol_dir/$apx/$inst.$sol"

	cargo run "$apx" "$place" "$solution" -r > "$apx_result"
done

# Extract result.
ilp_counter=$NUMBER_OF_ILP
results_file="$sol_dir/results.md"

echo "Instance | LP solution | ILP solution | Aproximation |" > "$results_file"
echo "---------|:-----------:|:------------:|:------------:|" >> "$results_file"

for inst in $instances; do
	echo -e "Extracting result for: ${RED}$inst${NC}."
	ilp_solution="$sol_dir/$ilp/$inst.$sol"
	lp_solution="$sol_dir/$lp/$inst.$sol"
	apx_result="$sol_dir/$apx/$inst.$sol"

	echo -n "$inst | " >> "$results_file"
	echo -n $(grep value "$lp_solution" | cut -d ' ' -f 5) >> "$results_file"
	echo -n " | " >> "$results_file"
	if [ $ilp_counter -gt 0 ]; then
		echo -n $(grep value "$ilp_solution" | cut -d ' ' -f 5) >> "$results_file"
		ilp_counter=$(($ilp_counter-1))
	else
		echo -n " -- " >> "$results_file"
	fi
	echo -n " | " >> "$results_file"
	echo -n $(grep value "$apx_result" | cut -d ' ' -f 5) >> "$results_file"
	echo " |" >> "$results_file"
done
