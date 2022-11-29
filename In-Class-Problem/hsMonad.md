## In-Class Problem: Haskell Monads
- Date: Mon Nov 28, 2022
### Write a Haskell script that called HelloWorld.hs that prints "Hello World" in the following ways:

1. Use one `ptrStrLn`. Recall: `putStrLn :: String -> IO ()`
writes a string and moves to a new line.
```haskell
putStrLn :: String -> IO ()
putStrLn "Hello World"
```

2.  Uses  the `do` function, `putStr`, and `putChar`, with the two strings: "Hello" and "World". Recall: `putStr :: String -> IO ()` writes a string without moving to a new line, and `putChar :: Char -> IO ()` writes a single character to the screen.
```haskell
putStr :: String -> IO ()
putChar :: Char -> IO ()
putStr "Hello"
putChar ' '
putStr "World"
```

3. Uses the `do`, `let`, `concat`, and `putStr` keywords, with the two strings: "Hello" and "World!\n". Recall: `concat`  is a "pure" function that concatenates a list of strings. 

```haskell
do
  let hello = "Hello"
  let world = "World!\n"
  putStr (concat [hello, " ", world])
```