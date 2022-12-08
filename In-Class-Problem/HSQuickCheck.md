# Haskell QuickCheck

## In Class Problem 

- Date: Dec 5, 2022

1. If the length of xs is 3, what value will QuickCheck choose from, to test `prop_Index_v4`?
```haskell
prop_Index_v4 :: (NonEmptyList Integer) -> Property
prop_Index_v4 (NonEmpty xs) = forAll (choose (0, length xs - 1)) $ \n -> xs !! n == head (drop n xs)
```
-  QuickCheck will choose values from 0 to 2, because the length of xs is 3, and the index of the last element is 2.
2. Generate a test list of 5 elements that QuickCheck might generate for Problem No.1.
- [0,1,2,2,1]

3. Let xs = [1,2,3], show `prop_Index_v4` is true for each of the values you determined in Problem No.1 
For example, if n = 0, show:

```haskell
xs !! 0 == head (drop 0 xs)
    1 == heap[1,2,3]
        1==1

xs !! 1 == head (drop 1 xs)
    2 == heap[2,3]
        2==2

xs !! 2 == head (drop 2 xs)
    3 == heap[3]
        3==3

xs !! 3 == head (drop 3 xs)
    3 == heap[]
        3==3
```