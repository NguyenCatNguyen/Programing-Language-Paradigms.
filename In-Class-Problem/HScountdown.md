1. Redefine the combinatorial function choices using a list
comprehension rather than using composition, concat and map.

```haskell
choices :: [a] -> [[a]]
choices = concat . map perms . subs
```


- List comprehension.
```haskell
choices :: [a] -> [[a]]
choices ns = [is | js <- subs ns, is <- perms js]
```
