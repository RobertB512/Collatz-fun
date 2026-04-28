// NOTE: This program requires Node to be installed.

const fs = require("fs");
const { json } = require("stream/consumers");

const generateCollatzSequence = async () => {
  const writeToFile = async (path, data) => {
    try {
      await fs.promises.appendFile(path, data)
    } catch (err) {
      console.log(`Error writing to file: ${err}.`);
    }
  }

  const findPrevSeed = async (path) => {
    const data = (await fs.promises.readFile(path, "utf8")).trim();
    nextSeed = null;
    if (data) {
      const lastLine = data.slice(data.lastIndexOf("\n") + 1);
			const lastObj = JSON.parse(lastLine);
			nextSeed = Number(lastObj.seed);
    } 
    
    return nextSeed;
  }
  
  const outputFile = "collatzOutput.ndjson";
  let startingSeed = await findPrevSeed(outputFile) + 1; // Starting number for Collatz sequence.

  if (startingSeed == null) {
    startingSeed = 1;
  }
  
  const numbersToAdd = 5;                         // The number of Collatz sequences to add to the output file.
  const endingSeed   = startingSeed + numbersToAdd; // Ending number for Collatz sequence.

  console.log(`Next value is: ${startingSeed} \n`);
  console.log("Processing... Please wait");
  console.log("If you stop this process, data may be lost");

  while (startingSeed <= endingSeed) {
    let highestHailstone = 0;            // The highest number in any given Collatz sequence.
    let valueOfN         = startingSeed; // Number being processed toward the 4-2-1 loop.
    let stepsToReachLoop = 0;            // Number of steps to reach 1.
    let sequenceValues   = [];           // List of values produced from startingSeed to 1.

    do {
      stepsToReachLoop++;

			if (valueOfN % 2 === 0) {
				valueOfN = valueOfN / 2;
			} else if (valueOfN % 2 === 1) {
				valueOfN = valueOfN * 3 + 1;
			}

			if (valueOfN > highestHailstone) highestHailstone = valueOfN;

			// sequenceValues.push(valueOfN.toLocaleString());
      sequenceValues.push(valueOfN);

    } while (valueOfN >= 2);

    // while (valueOfN >= 2) {
    //   stepsToReachLoop++;

    //   if (valueOfN % 2 === 0) {
    //     valueOfN = valueOfN / 2;
    //   } else if (valueOfN % 2 === 1) {
    //     valueOfN = valueOfN * 3 + 1;
    //   }

    //   if (valueOfN > highestHailstone) highestHailstone = valueOfN;

    //   sequenceValues.push(valueOfN.toLocaleString());
    // }
    
    // const outputDivider       = "\n\n------------------------------";
    // const startValueReport       = {originalN: startingSeed.toLocaleString()}; 
    // const sequenceValuesReport   = {sequenceValues: sequenceValues}; 
    // const stepCountReport        = {stepCount: stepsToReachLoop.toLocaleString()};
    // const highestHailstoneReport = {highestHailstone: highestHailstone.toLocaleString()};

    const fullSequenceReport = {
			seed: startingSeed,
			hailstoneSeq: sequenceValues,
			stepCount: stepsToReachLoop,
			highestHailstone: highestHailstone,

			// outputDivider,
			// startValueReport,
			// sequenceValuesReport,
			// stepCountReport,
			// highestHailstoneReport
		};
    
    await writeToFile(outputFile, JSON.stringify(fullSequenceReport) + "\n");

    startingSeed++;
  }

  console.log("\nFinished writing to file!");
};

generateCollatzSequence();