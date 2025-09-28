# Collatz-fun
This repo is designed to:
- Have fun with the Collatz conjecture.
- Act as a backup for my Collatz conjecture code, which did not start on GitHub. I first started this to just play around and put it locally on my computer.
- Have a place to more freely and carefully mess with this code again in the future, if I choose to.
- Show my work to anybody else curious about the Collatz conjecture or how I am messing with it.

## What is the Collatz Conjecture
Put simply, the Collatz conjecture, also known as the 3n+1 conjectur, is a mathmetical theory that states that when you are given any whole, positive number, like 5, you first see if the number is even or odd. If the number is odd, you multipley it by 3 and add 1. If the number is even, you divide it by 2. Since 5 is odd, you multiply it by 3 and add 1, which makes 16. After that operation, you do the same thing with the new number. Since 16 is even, you divide it by 2, which makes 8. 8 is even, so divide by 2 again, giving you 4. Next, divide 4 by 2, giving you 2, then 1. The number 1 is odd, so you mutiply it by 3 and add 1. This gives you 4. The number 4 divided by 2 is 2, and then 1. This gives a loop of 4, 2, 1. The theory states that for any whole, positive number, it will end in this loop. To this day, this theory has not been proven.

If you want to learn more, go on YouTube or Google and search "Collatz conjecture" or "3n+1". You will get a lot more inforamtion and deeper information too.

## How to see the code work
**NOTE:** This program requires Node to be installed. If you do not know how to install or work with Node, there are a lot of tutorials online.

**NOTE:** In my terminal, I use bash. I do not know how to use any other shell or PowerShell. If you use a different shell/terminal then I do, you might need to type in something different then what I list below.

If you want to see this code work: 
1. Install Node, if it is not installed already. 
2. Download the four files that are part of this repo. 
3. Place the four files in the same location on your computer, anywhere you want. 
4. In your terminal, navigate to the location you put the files in. 
5. If you want to run the main file (which has the conjecture logic), run "node collatz.js". 
6. If you want to run the code that analyzies the conjecture, run "node outputAnalysis.js".
7. If you want to see a list of numbers tested with the conjecture, or the results from the analysis, then open "collatzOutput.txt" or "outputAnalysis.txt" respectively, in the text editor of your choice.

