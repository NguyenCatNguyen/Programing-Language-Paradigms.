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


#Main function
#Let create two list of tuples R1 and R2
R1 = [(1,1), (2,2), (3,3)]
R2 = [(1,1), (1,2), (1,3), (1,4)]

#Function to find the union of two list of tuples
def union(R1, R2):
    U = R1 + R2
    #Using set function to remove duplicates and convert back to list.
    U = list(set(U))
    return U


#Function to find the intersection of two list of tuples
def intersection(R1, R2):
    I = [x for x in R1 if x in R2]
    return I

#Function to find the difference of two list of tuples
def difference(R1, R2):
    D = [x for x in R1 if x not in R2]
    return D

#Function to find the composition of two list of tuples
def composition(S, R):
    C = []
    for x in R:
        for y in S:
            if x[1] == y[0]:
                C.append((x[0], y[1]))
    return C

#Function to find set of ordered pairs
def ordered_pairs(R):
    OP = []
    for (x,y) in R:
        #Using extend method to add the elements of the tuple to the list
        OP.extend([(x,y), (y,x), (x,x), (y,y)])
        #Using set function to remove duplicates and convert back to list.
    OP = list(set(OP))
    return OP

#Function to find if a relation is reflexive
def reflexive(R):
    count = 0
    for (x,y) in R:
        if x == y:
            count += 1
    if count == len(R):
        print("The relation is reflexive")
        return True
        

    


"""
Set of ordered pairs: 
Create a new set and put the common 
for value in (x,y)
return L = [(x,x),(y,y),(x,y),(y,x)]

"""





#Part 1 of the assigment.
print("1. Perform the following set operations and display the results: \n")
print(f"a) R1 U R2 : {union(R1, R2)}\n")
print(f"b) R1 ∩ R2 : {intersection(R1, R2)}\n")
print(f"c) R1 - R2 : {difference(R1, R2)}\n")
print(f"d) R2 - R1 : {difference(R2, R1)}\n")




#Part 2 of the assigment.
#Let create two list of tuples R and S
R = [(1, 1), (1, 4), (2, 3), (3, 1), (3, 4)]
S = [(1, 0), (2, 0), (3, 1), (3, 2), (4, 1)]
print(f"2. Display S ◦ R:\n")
print(f"S ◦ R : {composition(S, R)}\n")

#Part 3 of the assigment.
print("3. For R = {(x, y) | x + y = 0} on the set {-10, ..., -1, 0, 1, ..., 10}: \n")
print(ordered_pairs(R))
print(reflexive(R))