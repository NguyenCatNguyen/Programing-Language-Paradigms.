1. Express the following list comprehension using the function map and filter:
```haskell
[ f x | x <- xs, p x ]

map f (filter p xs)

filter p xs = [ x | x <- xs, p x ]
map f xs = [ f x | x <- xs ]
```
2. Redefine map f using foldr.
```haskell
map f = foldr (\x xs -> f x : xs) []
```
3. Redefine filter p using foldr.
```haskell
filter p = foldr (\x xs -> if p x then x : xs else xs) []
```
