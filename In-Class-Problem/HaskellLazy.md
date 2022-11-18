## In-Class Problem
### Haskell Lazy Evaluation
- The Fibonacci sequence starts with 0 and 1, with each 
further number being the sum of the previous two:
    
                    0,1,1,2,3,5,8,13,21,34,...

- Using a list comprehension, define an expression that 
generates this infinite sequence:

        fibs :: [Integer]
- Note: Use the library functions `zip` and `tail`.
- `zip` produces a list of pairs from a pair of lists:
- `tail` removes the first element from a non-empty list:
        
```haskell
fibs :: [Integer]
fibs = 0 : 1 : zipWith (+) fibs (tail fibs)
```