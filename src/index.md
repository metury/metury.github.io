
# Welcome, to my personal page.

```rust
#use std::vec;
#
#fn main() {
    let mut interests : Vec<&str> = vec!["Computer science",
                                         "Travel",
                                         "Music",
                                         "Movies"];

    println!("Welcome to my personal webpage.");
    println!("");
    println!("Here you may find some things I enjoy or do.");

    for int in &interests {
        println!("\t- {}", int);
    }

    interests.push("Advent of code");

    println!("And also I cannot forget: {}", interests[interests.len() - 1]);

    let url = "github.com/metury/metury.github.io";
    let tools = vec!["Github pages", "MdBook"];

    println!("");
    println!("Source of this page can be found at the link: {}", url);
    println!("");
    println!("For the proper usecase I used {}.", tools.join(" and "));
#}
```
