{--
Name of program: EECS 368 Assignment 6 Replicate
Author name: Nguyen Cat Nguyen
Date: Nov 14, 2022
Description: Define 5 haskell function
--}

-- Create a replicate function
replicate :: Int -> a -> [a]
replicate 0 _ = []
replicate n x = x : replicate (n-1) x


-- Create a perfects function


-- Create a find function

-- Create a positions function

-- Create a scalarproduct function

-- Run the program to check if the function is working
main = do
    print (replicate 5 "test code")

