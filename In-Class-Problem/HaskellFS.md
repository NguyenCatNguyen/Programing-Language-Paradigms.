The script below contains three syntactic errors:
```Haskell
N = a 'div' length xs
    where
        a = 10
    xs = [1,2,3,4,5]
    -- xs is not on the same column as a
```
1. What are the three errors?
- The first error is that the variable `N` need to be in lower case
- The second error is that xs is not on the same column as `a`.
- The third error is that div need to be enclosed with (`) and not ('). 


2. What is the correct script syntax?
```Haskell
n = a `div` length xs
    where
        a = 10
        xs = [1,2,3,4,5]
```