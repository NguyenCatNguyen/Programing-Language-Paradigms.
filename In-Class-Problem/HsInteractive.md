## In-Class Problem 
### Wednesday Nov 16, 2022

1. Redefine putStr :: String -> IO() using a list comprehension 
and the library function sequence_ :: [IO a] -> IO().
```haskell
putStr :: String -> IO()
putStr'xs = sequence_ [putChar x | x <- xs]


sequence_ :: [IO a] -> IO()
sequence_ [] = return ()
```



2. Write an action that reads three characters, discards the 
second, and returns the first and third as a pair. 
```haskell
readF :: IO(Char,Char)
readF = do x <- getChar 
        getChar
        y <- getChar
        return (x,y)
```