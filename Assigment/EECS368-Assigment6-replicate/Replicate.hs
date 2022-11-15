{--
Name of program: EECS 368 Assignment 6 Replicate
Author name: Nguyen Cat Nguyen
Date: Nov 14, 2022
Description: Define 5 haskell function
--}
-- Create a replicate function
replicate' :: Int -> a -> [a]
-- Base case
replicate' 0 _ = []
-- n is the number of element in the list, x is the element. 
replicate' n x = x : replicate' (n-1) x


-- Create a perfects function
factors :: Int -> [Int]
-- Define the factors of a number
factors n = [x | x <- [1..n-1], n `mod` x == 0]
-- Define the perfects function
perfects :: Int -> [Int]
perfects n = [x | x <- [1..n], isPerfect x]
-- Define the isPerfect function
isPerfect :: Int -> Bool
isPerfect n = sum (factors n) == n




-- Create a find function
find :: Eq a => a -> [(a,b)] -> [b]
-- Define the find function
find _ [] = []
-- If the first element of the tuple is equal to the key, then return the second element of the tuple
find x ((a,b):xs) | x == a = b : find x xs
                  | otherwise = find x xs


-- Create a positions function
positions :: Eq a => a -> [a] -> [Int]
-- Define the positions function
positions x xs = find x (zip xs [0..n])
                 where n = length xs - 1
-- Find the position of the element by using the find function and zip the list with the index of the element




-- Create a scalarproduct function
scalarproduct :: [Int] -> [Int] -> Int
-- Define the scalarproduct function
scalarproduct xs ys = sum [x*y | (x,y) <- zip xs ys]
-- Sum the product of the element in the list


-- Run the program to check if the function is working
main = do
    -- Test replicate function
    print("--- Test replicate function ---")
    -- Example replicate
    print(replicate' 3 True)
    print (replicate' 5 "test code")
    -- Test perfects function
    print("--- Test perfects function ---")
    -- Example perfects
    print(perfects 500)
    print (perfects 9000)
    -- Test find function
    print("--- Test find function ---")
    -- Example find
    print(find 'b' [('a',1),('b',2),('c',3),('b',4)])
    print (find 'c' [('a',1),('b',2),('c',3),('b',4),('c',25)])
    -- Test positions function
    print("--- Test positions function ---")
    -- Example positions
    print(positions 0 [1,0,0,1,0,1,1,0])
    print(positions 1 [1,0,0,1,0,1,1,0])
    -- Test scalarproduct function
    print("--- Test scalarproduct function ---")
    -- Example scalarproduct
    print (scalarproduct [1,2,3] [4,5,6])
    print (scalarproduct [-1,2,3] [-4,-5,6])


