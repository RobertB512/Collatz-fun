# Introduction

**This repo is designed to:**

- Have fun messing with the Collatz conjecture overtime.
- Show my work to anybody else curious about the Collatz conjecture or how I am messing with it.

**This code is not designed to:**

- Prove nor disprove the conjecture.

## What Is The Collatz Conjecture?

The Collatz conjecture, also known as the 3n+1 conjecture, is a mathematical theory that goes like this. When you are given any whole, positive number, like 5, if it’s even, you divide it by 2, if it’s odd, you multiply it by 3 and add 1. You then repeat the process with the result. If you keep on going with each result, you will always end with 1.

Here is an example starting with 5: 5 is odd so you multiply it by 3 and add 1, which is 16. 16 is even, you divide it by 2, which is 8. 8 is even, so divide it by 2 again, giving you 4. Next, divide 4 by 2, giving you 2, lastly divide this by 2 and get 1. 1 is odd, so you multiply it by 3 and add 1, giving you 4. 4 divided by 2 is 2, and then back to 1. This makes a loop of 4, 2, 1.

The theory states that for any whole, positive number, you will always end in this same loop. To this day, this theory has neither ben proven nor disproven.

If you want to learn more, go on YouTube or Google and search "Collatz conjecture" or "3n+1 problem". You will find a lot more information, including even deeper information.

## Contents Of This Repo

### File Tree

```
├── analytics/
│   ├── analysisFunctions/
│   │   ├── breakUpSeq.js
│   │   ├── findFirstAndLastSeed.js
│   │   ├── formatResults.js
│   │   ├── getFileContents.js
│   │   ├── hailstoneData.js
│   │   └── seqLengthData.js
│   ├── analyze.js
│   └── results.txt
├── collatz.js
├── dataOutput.ndjson
├── package.json
└── README.md
```

## What Is In Each File

- **collatz.js:** This file’s code performs the operations of the Collatz conjecture. To determine where to begin, the code looks at the last number tested in dataOutput.ndjson and then continues until it has gone through x more numbers, determined by a variable in the code. This variable must be changed manually, there is not a way to change this variable via the terminal at the moment. The variable never has to be changed though, since when the code is run, it will always continue from where the previous run left off. I have also added a few details for the code to analyze and test to make additional analysis easier and faster.
- **dataOutput.ndjson:** This is an output file showing the results of all numbers tested with the Collatz conjecture with collatz.js, including the minor analytics mentioned.
- **analytics** This folder contains the file that analyzes the output data, a folder where different parts of the analysis are broken up into, and the results file itself.
- **analysisFunctions** This folder is part of the analytics folder and contains the bulk of the logic for the program. Most of the functions used are split across each file in this folder.
- **analyze.js:** This file, also part of the analytics folder, contains the code that performs the analytics on the data in the conjecture output file. Most of this file's functions comes from the folder mentioned just above.
- **results.txt:** This file is where all the data from the analytics are output to for easier reading.
- **package.json: ** This file contains some extra code to support some of the features in this project.
- **README.md:** This file is in no way part of the code. It’s just a file to explain this project.

## Want To See How This Code Works?

**NOTE:** This program requires Node to be installed. If you do not know how to install or work with Node, there are plenty of tutorials online.

**NOTE:** In my terminal, I use bash. I do not know how to use any other Linux shell or even PowerShell on Windows. If you use a different shell/terminal then I do, you might need to type in different commands than what I list below.

### Steps to run the code

1. Install Node, if it is not already installed.
2. Download the folder and files that are part of this repo.
3. Place all the contents in the same location on your computer, anywhere you want.
4. In your terminal, navigate to the location where you put the contents. Go inside to the root of this folder.
5. If you want to run the main file (which has the conjecture logic), run `node collatz.js`.
6. If you want to run the code that analyzes the conjecture, run `node analytics/analyze.js`.
7. If you want to see the list of numbers tested with the conjecture, or the results from the analysis, then open **dataOutput.ndjson** or **results.txt** respectively. **Note:** I would recommend opening these files in a code editor for easier reading. The output file dataOutput.ndjson is too big for Microsoft Word.
