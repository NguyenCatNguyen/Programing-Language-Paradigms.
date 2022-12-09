{--
Name of program: EECS 368 Assignment 7
Author name: Nguyen Cat Nguyen
Date: Dec 6, 2022
Description: Create the game of Nim 
--}
-- The initial board
type Board = [Int] 
initial :: Board
initial = [5,4,3,2,1]

-- Player turn
next :: Int -> Int
next 1 = 2
next 2 = 1

-- remove row if row == index
removeRow :: Board -> Int -> Int -> Board
removeRow xs a b = [if i == a then x-b else x | (x,i) <- zip xs [1..(length xs)]]

-- replicate amount of "*" need to be print
stars :: Int -> String
stars n = concat (replicate n "* ")

-- function to print individual row
printRow :: Int -> Int -> IO()
printRow num n = putStrLn ((show num) ++ ": " ++ (stars n))

-- print board after every move
printBoard :: Board -> IO()
printBoard [a,b,c,d,e] = do  
                            putStr "\n"
                            printRow 1 a
                            printRow 2 b
                            printRow 3 c
                            printRow 4 d 
                            printRow 5 e

-- Check if the player reach end game
endGame :: Board -> Bool
endGame board = if sum board == 0 then True else False

-- Check if the move is valid
invalid xs x y = if y > (xs !! (x-1)) then True else False

nim :: IO()
nim = play initial 2
-- set a initial play as beginning with nim


-- Create play function that print board, next move and loop until end game.
play :: Board -> Int -> IO()
play initial player =do 
    printBoard initial
    -- display the intial board before game start.
    putStr "Player "
    putStrLn (show(next player))
    -- display which player is playing.
    putStr "Enter row number: "
    x <- getLine
    -- get the row number from the player.
    putStr "Enter starts to remove: "
    y <- getLine
    -- get the number of stars need to be remove.
    if invalid initial (read x :: Int) (read y:: Int) then do
        putStrLn "You enter an Invalid answer, please try again!"
        play initial player
        -- ask the player to play again if the player make an invalid move, this recussion continue until player reach endgame.
    else
        if endGame (removeRow initial (read x :: Int) (read y :: Int)) then
            -- Check if endGame have been reach, if yes then print congraduation note.
            putStrLn ("Congraduation, Player " ++ (show(next player)) ++ " you win!")
        else play (removeRow initial (read x :: Int) (read y :: Int)) (next player)
        -- else continue to next player move.


main = nim
 
