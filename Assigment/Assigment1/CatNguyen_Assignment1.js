/*
Authour: Nguyen Cat Nguyen
KUID: 3077463
Date: Tuesday August 30, 2022
*/

/*
2.1. Looping a triangle (10 loop)
Program description: a loop function that make  10 calls to console.log to output
a triangle
*/
function Loop(){
  //Declare loop function.
  console.log("2.1 Looping a triangle (10 loops).");
  //Print the name of the function.
  for(let line = "x"; line.length !== 11; line += "x"){
    /*
    - Declare line value.
    - for the length of the line not equal to 11. The loops keep running and
      add another "x" to line each times.
    */
    console.log(line)
    //print line output
  };
  console.log(" ");
  // add an extra space at the end of the program.
};
/*
2.2. FizzBuzz
Program description:Write a program that uses console.log to print all the
numbers from 1 to 100, with three exceptions:
  - For numbers divisible by 4, print "Divisible by 4" instead of the
    number.
  - For numbers divisible by 7, but not 4, print "Divisible by 7, but not
    4" instead.
  - For numbers divisible by both 4 and 7, print “Divisible by both 4
    and 7”.
*/
function FizzBuzz(){
  console.log("2.2 FizzBuzz.");
  for(let num = 1; num < 101; num += 1){
    /*
    - Declare num value is 1.
    - Loop until num = 100.
    - After each loop add 1 to num.
    */
    if(num%7 == 0 && num%4 == 0){
      //check to see if num value Divisable by both 4 and 7.
      console.log("Divisible by both 4 and 7.")
      //print out Divisable by both 4 and 7.
    }
    else if(num%7 == 0 && num%4 !== 0){
      //check to see if num value Divisable by 7 and not 4.
      console.log("Divisible by 7, but not 4.")
      //print out Divisable by 7, but not 4.
    }
    else if (num%7 !== 0 && num%4 == 0){
      //check to see if num value Divisible by 4 and not 7.
      console.log("Divisable by 4, but not 7.")
      //print out Divisable by 4, but not 7.
    }
    else {
      console.log(num);
      //If none of the condition above satisfy print the number.
    }
  };
  console.log(" ")
  // Add extra space at the end of the program.
};


/*
2.3. n-by-n Grid
Program description: n-by-n Grid is a program that creates a string that
represents an n-by-n grid, using newline characters to separate lines.
=> so far this function only work on even number input, I will continue
to work and improve this function in the future.

*/
function Grid(x){
// Creates Grid function.
  console.log("2.3 n-by-n Grid.")
  //Print out the name of the function.
  console.log("Grid "+ x);
  let odd = " #";
  let even = "# ";
  //set up odd and even grid.
  let num = x/2;
  for (let i = 1; i < (x+1); i +=1){
  if(i%2 == 0){
    console.log(even.repeat(num))
    //if we on even line, even grid being print.
  }else{
    console.log(odd.repeat(num))
    //else odd grid being print.
    }
  };
  console.log(" ");
  //extra space between each code.
};

//Function Main: use to run all the excercises for assigment 1.
function Main(){
  Loop();
  FizzBuzz();
  Grid(8);
  Grid(16);
};


console.log("=== Assigment 1 ===");
Main();
