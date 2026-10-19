# My Design And Decision Choices

The purpose of this file is to explain to others why I made the decisions I did in this project. That could be to anyone curious about this project, future employers, or to myself when I forget why I made a certain choice.

## Why Work On This At All?

I heard about the Collatz conjecture years ago. I don’t remember if I wanted to work on it with code immediately, or if it was later. I found it interesting, however.

This conjecture is so simple to understand, yet apparently, so hard to prove. The idea is, if you take any whole, positive number and if it is even, you divide it by 2, otherwise multiply it by 3, and add 1, and do the same with the result. The theory goes that if you continue this process, you’ll always end in a 4, 2, 1 loop.

At one point, I thought this would be cool to try out, so I did, I wrote a small project where I could enter a number, or simply change a variable, and see if the theory was true. It was fun trying different numbers and watching all of them come down to 1. At first, all I did was mess around with single numbers. It was much later that I decided to analyze the numbers.

I don’t remember any event that got me thinking to start analyzing the seeds and their hailstones. I may have just thought of it one day. Overtime, I added more and more functions, each analyzing something different. Some I thought of myself, some through research, and some may have been through ChatGPT.

## A Quick Note

A quick note before going into my decisions. I do not remember the order I made these in, so these will just be some of the decisions I made in no particular order.

## Choice 1: Why I Chose JavaScript

For a while I was learning web development with HTML, CSS, and JavaScript. For a brief time, React as well. So, JavaScript was what I knew, therefore, what I chose.

I think it would be fun to do this project in other programing languages too.

## Choice 2: Sequence Output File Type

Originally, I made the file that holds the Collatz information, such as seeds and their hailstone sequences, a txt file. This worked well. I did have to parse it and move the data into an object. Still, it worked.

I forget why I thought about moving away from a txt file to begin with. It could’ve been to make things tidier and to set up a key value pair relationship. One of my first thoughts was probably json. Through research, I found that using a json file may not be much easier. During this research, I learned about ndjson.

In the end, I made the switch. Even though it’s not as readable to the human eye, it’s more code friendly. Now, each seed’s info is its own object, therefore there’s 100,000 objects in the file. During the analysis of the Collatz data, I grab these objects and put them in one big object.

While this may not be efficient, it’s what I knew and know how to do.

This transition also had an unintentional effect. Before the change, my code was running slow. I thought it was due to some inefficient code. I’m guessing that it was actually grabbing the text from the txt file and parsing it into an object, because after the transition, my code ran much faster.

## Choice 3: Making This Project A Node Project

This wasn’t my idea from the start. It uses Node because the project uses some Node capabilities, like reading from and writing to files, and because this code is broken up into modules.

## Choice 4: Breaking The Code Up Into Modules

After a while, the code became too tedious to handle, having every analysis function in one file. This meant I had two JavaScript files, one to perform the Collatz formula, and one to analyze the Collatz data. It seemed like it would be easier to just separate the functions. I did, and it did in fact make things much easier. Some functions that are related share the same file, which is still much easier than each one being in one file.

## What Could Be Improved

A few things could be improved:

- There’s a function that finds the first hailstone to hit a certain number, like 100, 1000, and 10,000. Currently, every hailstone is analyzed. What could make this code more efficient would be that each time I go on to the next goal, the code continues from the same hailstone the code stopped at.
- It may help if there was a way to go through the entire Collatz data once, where every function can analyze each hailstone before the code moves to the next hailstone. Currently, the Collatz data is run through multiple times when you consider all the functions.
- There’s probably a better way to manage my entire Collatz data file, instead of putting it all into one object.
- Readability I’m sure.
- Better / more efficient coding practices, I’m sure.

## What Could I Add

- Fixes to the above (last section).
- Add a way for the user to add however many more seeds they want to the Collatz data, via the terminal, not just in the code itself.
- More stats from the Collatz data.
- A web front end with graphs.
  - Add some graphs that show change traversing over each seed’s hailstone, vs just a summary of the data.
  - Decrease Collatz data file size to make having a front end easier.
