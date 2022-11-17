## In-Class Problem 

1. Redefine putStr :: String -> IO() using a list comprehension 
and the library function sequence_ ::[IO a] -> IO().
```haskell
putStr :: String -> IO()




sequence_ :: [IO a] -> IO()
sequence_ 

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