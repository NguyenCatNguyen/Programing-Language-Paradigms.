Consider a function safetail that behaves in the same way as tail, except that safetail maps the empty list to the empty list, whereas tail gives an error in this case.  
•Define safetail using:
1. A conditional expression
2. Guarded equations
3. Pattern matching


```haskell
safetail' :: [a] -> [a]
safetail' xs = if null xs then xs else tail xs

safetail'' :: [a] -> [a]
safetail'' xs | null xs    = xs
              | otherwise  = tail xs

safetail''' ::  [a] -> [a]
safetail''' [] = []
safetail''' (_:xs) = xs

```