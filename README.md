# Introduction

This repo is designed to:

- Have fun with the Collatz conjecture.
- Act as a backup for my Collatz conjecture code, which did not start on GitHub. I first started this project to just have fun and mess around, putting it locally on my computer.
- Have a place to mess with this code overtime freely and carefully.
- Show my work to anybody else curious about the Collatz conjecture or how I am messing with it.

## What Is The Collatz Conjecture?

The Collatz conjecture, also known as the 3n+1 conjecture, is a mathematical theory that goes like this. When you are given any whole, positive number, like 5, if it’s even, you divide it by 2, if it’s odd, you multiply it by 3 and add 1. You then repeat the process with the result. If you keep on going with each result, you will always get 1. Here is an example: 5 is odd so you multiply it by 3 and add 1, which is 16. Since 16 is even, you divide it by 2, which makes 8. 8 is even, so divide it by 2 again, giving you 4. Next, divide 4 by 2, giving you 2, then 1. The number 1 is odd, so you multiply it by 3 and add 1, giving you 4. The number 4 divided by 2 is 2, and then 1. This gives a loop of 4, 2, 1. The theory states that for any whole, positive number, it will end in this same loop. To this day, this theory has not been proven true nor false.

If you want to learn more, go on YouTube or Google and search "Collatz conjecture" or "3n+1". You will get a lot more information, even deeper information.

## Contents Of This Repo

- **collatz.js:** This file’s code performs the operations of the Collatz conjecture. To determine where to begin, the code looks at the last number tested in collatzOutput.txt and then continues until it has gone through x more numbers, determined by a variable in the code. This variable must be changed manually, there is not a way to change this variable via the terminal. The variable never has to be changed though, since when the code is run, it will always continue from where the previous run left off. I have also added a few minor details for this code to analyze for each sequence tested to make other analyses easier.
- **collatzOutput.txt:** This file shows the output of all the numbers tested with the Collatz conjecture, including the minor analytics mentioned.
- **outputAnalysis.js:** This file contains that code that performs most of the analytics performed on the data in collatzOutput.txt.
- **outputAnalysis.txt:** This is the file where all the analytics from outputAnalysis.js are dumped for easier reading.
- **readme.md:** This file is in no way part of the code, it’s just a file to explain this project.

## Want To See How This Code Works?

**NOTE:** This program requires Node to be installed. If you do not know how to install or work with Node, there are plenty of tutorials online.

**NOTE:** In my terminal, I use bash. I do not know how to use any other Linux shell or even PowerShell on Windows. If you use a different shell/terminal then I do, you might need to type in different commands than what I list below.

**Steps to run this code for yourself:**

1. Install Node, if it is not already installed.
2. Download the four files that are part of this repo.
3. Place the four files in the same location on your computer, anywhere you want.
4. In your terminal, navigate to the location where you put the files.
5. If you want to run the main file (which has the conjecture logic), run "node collatz.js".
6. If you want to run the code that analyzes the conjecture, run "node outputAnalysis.js".
7. If you want to see the list of numbers tested with the conjecture, or the results from the analysis, then open "collatzOutput.txt" or "outputAnalysis.txt" respectively, in the text editor of your choice. **Note:** I would recommend a code editor for reading the txt files, collatzOutput.txt is too large for Microsoft Word.
