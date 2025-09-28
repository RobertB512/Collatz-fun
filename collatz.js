// NOTE: This program requires Node to be installed.

const fs = require("fs")

const generateCollatzSequence = async () => {
  const writeToFile = async (path, data) => {
    try {
      await fs.promises.appendFile(path, data)
    } catch (err) {
      console.log(`Error writing to file: ${err}.`);
    }
  }

  const findPrevSeed = async (path) => {
    const data = await fs.promises.readFile(path, "utf8");

    try {
      const sections     = data.split("------------------------------");
      const lastSection  = sections[sections.length - 1].trim();
      const lines        = lastSection.split("\n");
      const startingLine = lines[0].trim();
      const parts        = startingLine.split(" ");
      const prevSeed     = parts[parts.length - 1].replace(",", "");
      const nextSeed     = Number(prevSeed) + 1;

      return nextSeed;
    } catch (err) {
      console.log(err);
    } 
  }
  
  const outputFile = "collatzOutput.txt";
  let startingSeed = await findPrevSeed(outputFile); // Starting number for Collatz sequence.

  if (startingSeed == null) {
    console.log("No value found");
    return
  }

  const numbersToAdd = 100;                         // The number of Collatz sequences to add to the output file.
  const endingSeed   = startingSeed + numbersToAdd; // Ending number for Collatz sequence.

  console.log(`Next value is: ${startingSeed}`);
  console.log("\nDon't quit or turn off the program, or do anything until the terminal tells you that writing to the file has finished. \nIf needed, you can press ctrl + c to cancel the program. \nNote: If you press ctrl + c, it may mess up some of the data being output to the file.");

  while (startingSeed <= endingSeed) {
    let highestHailstone = 0;            // The highest number in any given Collatz sequence.
    let valueOfN         = startingSeed; // Number being processed toward the 4-2-1 loop.
    let stepsToReachLoop = 0;            // Number of steps to reach 1.
    let sequenceValues   = [];           // List of values produced from startingSeed to 1.

    while (valueOfN >= 2) {
      stepsToReachLoop++;

      if (valueOfN % 2 === 0) {
        valueOfN = valueOfN / 2;
      } else if (valueOfN % 2 === 1) {
        valueOfN = valueOfN * 3 + 1;
      }

      if (valueOfN > highestHailstone) highestHailstone = valueOfN;

      sequenceValues.push(valueOfN.toLocaleString());
    }
    
    const outputDivider          = "\n\n------------------------------";
    const startValueReport       = `\n\nOriginal N = ${startingSeed.toLocaleString()}`; 
    const sequenceValuesReport   = `\n${sequenceValues.join(" | ")}`; 
    const stepCountReport        = `\nTotal steps: ${stepsToReachLoop.toLocaleString()}`;
    const highestHailstoneReport = `\nHighest number reached: ${highestHailstone.toLocaleString()}`;
    const fullSequenceReport     = [
      outputDivider, 
      startValueReport, 
      sequenceValuesReport, 
      stepCountReport, 
      highestHailstoneReport
    ];

    await writeToFile(outputFile, fullSequenceReport.join(""));

    startingSeed++;
  }

  console.log("\nFinished writing to file!");
};

generateCollatzSequence();