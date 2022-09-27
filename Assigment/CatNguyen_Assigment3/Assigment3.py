"""

You may use any language you want, but if you want help from me or one of the
SIs, you should probably use C++ or Python.
• Label each output with a description, e.g., “1a. Union of R1 and R2”
• Use the methods or functions inherent in the language and/or using methods or
functions you create. Like previous assignments, don’t “hard code” a solution you
did on paper as the output.
• Create a program for the following:
1. For the relations:
R1 = {(1,1), (2,2), (3,3)} and R2 = {(1,1), (1,2), (1,3), (1,4)} perform the following set operations and display the results:
a) R1∪R2 b) R1∩R2 c) R1−R2 d) R2−R1
2. Display S ◦ R, where:
R is the relation from A = {1, 2, 3} to B = {1, 2, 3, 4} with R = {(1, 1), (1, 4), (2, 3), (3, 1), (3, 4)}
S is the relation from B = {1, 2, 3, 4} to C = {0, 1, 2} with S = {(1, 0), (2, 0), (3, 1), (3, 2), (4, 1)} 2
.
4. For the relation R = {(x, y) | x + y = 0} on the set {-10, ..., -1, 0, 1, ..., 10}:
3. For R = {(1, 1), (1, 4), (2, 3), (3, 1), (3, 4)}, show R
a) Show R as a set of ordered pairs.
b) Show whether R is reflexive or not.
c) Show whether R is symmetric or not.
d) Show whether R is antisymmetric or not. e) Show whether R is transitive or not.
• Provide comments that explain what each line of code is doing. See rubric below.

"""


#Let create two list of tuples R1 and R2
R1 = [(1,1), (2,2), (3,3)]
R2 = [(1,1), (1,2), (1,3), (1,4)]

#Function to find the union of two list of tuples
def union(R1, R2):
    U = [R1+R2]
    return U

#Function to find the intersection of two list of tuples
def intersection(R1, R2):
    I = [x for x in R1 if x in R2]
    return I

#Function to find the difference of two list of tuples
def difference(R1, R2):
    D = [x for x in R1 if x not in R2]
    return D

#Function to find the inverse of a list of tuples
def inverse(R):
    I = [(y,x) for (x,y) in R]
    return I


#Part 1 of the assigment.
print("1. For the relationship")
print("R1 = ", R1)
print("R2 = ", R2)
print("Perform the following set operations and display the results:")
print(f"a) R1∪R2 : {union(R1, R2)}")







