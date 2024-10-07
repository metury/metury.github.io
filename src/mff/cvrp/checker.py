#!/usr/bin/env python3
import sys

# Provide path to the solution file.
if len(sys.argv) <= 1:
	print("No solution was provided.")
	exit()

file = sys.argv[1]

links = list()
values = list()

# Read the file and load the data.
with open(file) as f:
	for line in f:
		splited_line = line[:-1].split(' ')
		if splited_line[0] == "#":
			print(f"Result is {splited_line[-1]}.")
		elif float(splited_line[-1]) != 0:
			splited_value = splited_line[0].split('_')
			if splited_value[0] == "x":
				links.append((int(splited_value[1]), int(splited_value[2])));
			elif splited_value[0] == "y":
				values.append((int(splited_value[1]), int(splited_value[2]), float(splited_line[-1])));

loops = list()

current = 1
loop = list()

# Create loops from the links.
while True:
	if current == 1 and len(loop) > 0:
		loops.append(loop)
		loop = list()
		current = 1
		if len(links) == 0:
			break
	for link in links:
		if link[0] == current:
			current = link[1]
			loop.append(link)
			links.remove(link)
			break

# Write the trucks with their loops and values during the path.
for i, loop in enumerate(loops):
	print(f"Truck {i+1}: 1",end="")
	for link in loop[:-1]:
		for value in values:
			if link[0] == value[0] and link[1] == value[1]:
				print(f" -({value[2]})-> {link[1]}",end="")
				break
	print(" -> 1")
