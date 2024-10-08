# Programming exercises

There are some more or less easy programming exercises that will get you into a programming. Yet I have not work out the exact style of these pages, now there is just a list of solutions to typical problems.

## Ceaser cipher

```py
# Assume only whitespace and lovercase alphabet is present.

shift = int(input("Zadej posun: "))
word = input("Zadej zprávu: ")

for c in word:
	if ord(c) >= ord('a') and ord(c) <= ord('z'):
		print(chr(((ord(c) - ord('a') + shift) % (ord('z') - ord('a') + 1)) + ord('a')), end = "")
	else:
		print(c, end="")

print()
```

# k-th min

```py
number = 0
array = list()
c = 100

def cap():
	if len(array) > c: # Když to pole je moc velké
		array.pop(0) # Vyhoď na pozici x = 0
		# len(array) = c * 2 -> tohle se nemůže stát
		# len(array) <= c + 1

# array.pop(0) vs array.pop(len(array)-1)
# to prvni podstatne pomalejsi

def add(value):
	for i in range(len(array)): # Přes všechny indexy
		if array[i] >= value:
			array.insert(i, value) # Vlož na i prvek value [0, 1, 2, 3] insert(1,50) -> [0, 50, 1, 2, 3]
			cap()
			return
	array.append(value) # Přidej prvek na konec
	cap()

while number != -1:
	number = int(input())
	if number != -1:
		add(number)

k = int(input())

print(array[len(array) - k])
```

## linked list

```py
# This is implementation of K-capped linked list.

class node:
	value = 0
	next_node = None
	def __init__(self, value, next_node):
		self.value = value
		self.next_node = next_node
	def setnext(self, next_node):
		self.next_node = next_node

class linked_list:
	head = None
	tail = None
	k = 100
	size = 0
	def __init__(self, k):
		self.k = k
		self.size = 0
	def remove(self):
		if self.size >= self.k:
			counter = 0
			tmp = self.head
			for i in range(self.k - 1):
				tmp = tmp.next_node
			tmp.next_node = None
			self.size -= 1
	def add(self, value):
		if self.size >= self.k and self.tail != None and self.tail.value <= value:
			return
		elif self.head == None:
			self.tail = self.head = node(value, None)
			self.size += 1
		else:
			tmp = self.head
			previous = None
			while tmp != None and tmp.value < value:
				previous = tmp
				tmp = tmp.next_node
			if previous == None:
				self.head = node(value, self.head)
			elif tmp == None:
				self.tail = previous.next_node = node(value, None)
			else:
				previous.setnext(node(value, tmp))
			self.size += 1
		self.remove()
	def print(self):
		tmp = self.head
		print("START -> ", end="")
		while tmp != None:
			print(f"{tmp.value} -> ", end = "")
			tmp = tmp.next_node
		print("END")

def main():
	ll = linked_list(4)
	ll.add(2)
	ll.add(3)
	ll.add(5)
	ll.add(1)
	ll.add(6)
	ll.add(8)
	ll.add(4)
	ll.print()

if __name__ == '__main__':
	main()
```

## k-heap

```py
# Implementation of K-capped max heap.

class max_heap:
	array = list()
	k = 100
	def __init__(self, k):
		self.k = k
	def size(self):
		return len(self.array)
	def remove(self):
		self.array[0], self.array[len(self.array) - 1] = self.array[len(self.array) - 1], self.array[0]
		self.array.remove(self.array[len(self.array) - 1])
		i = 0
		while (2*i+1 < self.size() and self.array[i] < self.array[2 * i + 1]) or (2*i+2 < self.size() and self.array[i] < max(self.array[2 * i + 1], self.array[2 * i + 2])):
			if 2*i+2 < self.size() and self.array[2 * i + 1] < self.array[2 * i + 2]:
				self.array[i], self.array[2 * i + 2] = self.array[2 * i + 2], self.array[i]
				i = 2*i +2
			else:
				self.array[i], self.array[2 * i + 1] = self.array[2 * i + 1], self.array[i]
				i = 2*i +1
	def add(self, value):
		if self.size() > 0 and value >= self.array[0] and self.k == self.size():
			return
		else:
			self.array.append(value)
			i = self.size() - 1
			while i >= 0 and self.array[(i - 1) // 2] < self.array[i]:
				self.array[(i - 1) // 2], self.array[i] = self.array[i], self.array[(i - 1) // 2]
				if i == 0:
					break
		if self.size() > self.k:
			self.remove()

def main():
	h = max_heap(3)
	print(h.size())
	h.add(1)
	h.add(2)
	h.add(3)
	h.add(4)
	h.add(0)
	print(h.size())
	print(h.array)
	h.remove()
	print(h.array)
	print(h.size())

if __name__ == "__main__":
	main()
```

# Work with matrix

```py
"""
Tohle je přečtení vstupu, rozdělení a převedení do pole čísel.
Protože to pole je délky 2, tak to lze napsat takhle.
"""
height, width = [int(x) for x in input().strip().split(" ")]
matrix = list()

for _ in range(height):
	matrix.append([int(number) for number in input().strip()split(" ")])

"""
Najdi globální minimum.
"""
my_min = min([min(x) for x in matrix])

"""
Odečti minimum od všech.
"""
p_matrix = [[x - my_min for x in l] for l in matrix]

"""
Vytiskni matici.
"""
for row in p_matrix:
	for i in range(len(row)):
		if i == len(row) - 1:
			print(row[i])
		else:
			print(row[i], end=" ")
```

# Trees

```py
"""
Tohle je třeba pro čtení vstupu dokud nezkončí.
Konec je v terminálu pomocí Ctrl+D.
"""
import sys

c = 100 # max size of field - Můžeš si to přepočítat.

"""
Woods je matice stromů. Respektive teček/hvězdiček.
Tento konstrukt vytvoří pole c*c s hodnotami False.
"""
woods = [[False for _ in range(c)] for _ in range(c)]

"""
Hranice vykreslitelného pole.
"""
boundaries = [c, c, 0, 0] # Xmin, Ymin, Xmax, Ymax


"""
Tohle je to pozorování. Ale ve zkratce.
# 0 0 3 1 [Y, X, K, L]
# How to compute this?
# ..*.. <- at this level it is on pos [X, Y+K]
# .***. <- at this level are the positions [X+1,Y+ K-1..K..K+1]
# ***** ... generally it is [X + i,Y+ K-i ... K+i]
# ..*.. <- bottom is just [X + K, Y+K]
"""

"""
Tiskne matici stromů dle hranic.
"""
def print_woods(min_x, min_y, max_x, max_y):
	for i in range(min_x, max_x): # od min do max
		for j in range(min_y, max_y): # od min do max
			if woods[i][j]: # Pokud je True, tak hvězdička
				print("*", end="") # Na konec nic nedávej.
			else:
				print(".", end="")
		print() #Vytiskni konec řádky.

"""
Tady se aktualizují hranice, tedy minima a maxima pro x a y.
Zde možná je těžší se vyznat v daných maximech a minimech, tak si to
kdyžtak pomalu projdi a uprav tak aby to bylo lépe čitelné.
"""
def update(args):
	if boundaries[0] > args[0]: #update xmin
		boundaries[0] = args[0]
	if boundaries[1] > args[1]: #update ymin
		boundaries[1] = args[1]
	if boundaries[2] < args[1] + args[2] + args[3]: #update xmax
		boundaries[2] = args[1] + args[2] + args[3]
	if boundaries[3] < args[0] + 2*args[2] - 1: #update ymax
		boundaries[3] = args[0] + 2*args[2] - 1

"""
Přidej strom do pole. Args je pole [X, Y, K, L]
Tady se použivá celé pozorování a výpočet indexů.
"""
def add_tree(args):
	boundaries = update(args)
	for i in range(args[2]):
		for j in range(i + 1):
			woods[args[1] + i][args[0] + args[2] - j - 1] = True
			woods[args[1] + i][args[0] + args[2] + j - 1] = True
			# Note middle is twice
	for i in range(args[3]):
		woods[args[1]+args[2] + i][args[0]+args[2] - 1] = True

# This is bad. We need to use sys.stdin.
"""
while((l := input()) != None):
	add_tree([int(x) for x in l.split(" ")])
	print_woods(boundaries[0], boundaries[1], boundaries[2], boundaries[3])
"""

"""
Dokud nezkončí vstup čti řádky.
"""
for line in sys.stdin:
	add_tree([int(x) for x in line.split(" ")]) # Tohle je vlastně read z předchozího úkolu.

"""
Už jen vytiskni les.
"""
print_woods(boundaries[0], boundaries[1], boundaries[2], boundaries[3])
```
