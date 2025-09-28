// NOTE: This program requires Node to be installed.

const { log }   = require("console");
const fs        = require("fs");  
const { start } = require("repl");

const analyzeCollatzOutput = async () => {
  const readFile = async (path) => {
    const data             = await fs.promises.readFile(path, "utf8");
    const sections         = data.split("------------------------------");
    const collatzSeq = sections;
    return collatzSeq;
  }

  const findFirstAndLastSeed = (collatzArray) => {
    const findVals = (array) => {      
      const lines          = array.split("\n");
      const filteredLines  = lines.filter(val => val.trim()); // To remove empty strings.
      const firstLine      = filteredLines[0];
      const firstLineParts = firstLine.split(" ");
      const seedStr        = firstLineParts[firstLineParts.length - 1].replaceAll(",", "");
      const seedVal      = Number(seedStr);

      return seedVal;
    }
    
    const firstSeq = collatzArray[0]; // Index 2 since the array starts with other text.
    const lastSeq  = collatzArray[collatzArray.length - 1];

    const firstSeed = findVals(firstSeq);
    const lastSeed  = findVals(lastSeq);
    
    return {firstSeed: firstSeed, lastSeed: lastSeed};
  }

  const breakUpSeq = (collatzArray) => {
    const seqCollection = [];

    collatzArray.forEach(seq => {
      // Get seed
      const lines          = seq.split("\n");
      const cleanedLines   = lines.filter(val => val.trim());
      const startLine      = cleanedLines[0];
      const startLineParts = startLine.split(" ");
      const seedStr        = startLineParts[startLineParts.length - 1].replaceAll(",", "");
      const seedVal        = Number(seedStr);

      // Get hailstone sequnces 
      const hailstoneSeq     = cleanedLines[1];
      const hailstoneArray   = hailstoneSeq.split(" | ");
      const cleanedArray     = hailstoneArray.map(val => {
        const cammasRemoved  = val.replaceAll(",", "");
        const numberFormated = Number(cammasRemoved);

        return numberFormated;
      });

      // Get step counts
      const stepsLine      = cleanedLines[cleanedLines.length - 2];
      const stepsLineParts = stepsLine.split(" ");
      const stepsStr       = stepsLineParts[stepsLineParts.length - 1].replaceAll(",", "");
      const stepsVal       = Number(stepsStr);

      // Get highest hailstone
      const highestHailstoneLine  = cleanedLines[cleanedLines.length - 1];
      const highestHailstoneParts = highestHailstoneLine.split(" ");
      const highestHailstoneStr   = highestHailstoneParts[highestHailstoneParts.length - 1].replaceAll(",", "");
      const highestHailstoneVal   = Number(highestHailstoneStr);

      seqCollection.push({seed: seedVal, 
        hailstoneSeq: cleanedArray, 
        stepCount: stepsVal, 
        highestHailstone: highestHailstoneVal})
    });

    return seqCollection;
  }

  const findFirstToBreakX = (collatzArray, hitPoint) => {
    // This function finds the first hailstone out of all sequences to hit a number.
    // Ex: finds the first number in all sequences combined to hit 1,000, 5,000, 10,000,
    // or any other number. For this project, these hit points will be predetermined.

    const seqCollection = breakUpSeq(collatzArray);
    const numberToHit   = hitPoint;
    const errorMsg      = `error or number to hit ${numberToHit} is TBD.`

    for (const seqInfo of seqCollection) {
      const hailstoneNumber = seqInfo.hailstoneSeq.find(val => val >= numberToHit);

      if (hailstoneNumber !== undefined) {
        return {
          numberToHit: numberToHit.toLocaleString(),
          seed: seqInfo.seed.toLocaleString(),
          numberThatHit: hailstoneNumber.toLocaleString()
        };
      }
    }
    return errorMsg;
  }

  const findLongestHailstoneSeq = (collatzArray) => {
    const seqCollection     = breakUpSeq(collatzArray);
    let longestHailstoneSeq = 0;
    let startingSeed;

    for (const seqInfo of seqCollection) {
      if (seqInfo.stepCount > longestHailstoneSeq) {
        // console.log(seqInfo.stepCount);
        longestHailstoneSeq = seqInfo.stepCount;
        startingSeed        = seqInfo.seed;
      }
    }

    return {seed: startingSeed.toLocaleString(), longestHailstoneSeq: longestHailstoneSeq.toLocaleString()}
  }


  const formatResults = (resultsArray) => {
    const firstSeed           = `First seed tested: ${resultsArray[0].firstSeed.toLocaleString()}\n`;
    const lastSeed            = `Last seed tested: ${resultsArray[0].lastSeed.toLocaleString()}\n`;
    const longestHailstoneSeq = `Longest hailstone sequence: Start seed of ${resultsArray[1].seed} with a step count of ${resultsArray[1].longestHailstoneSeq}\n`;
    const firstToHit100       = `First hailstone to hit 100: Start seed of ${resultsArray[2].seed} and a hailstone of ${resultsArray[2].numberThatHit}\n`;
    const firstToHit500       = `First hailstone to hit 500: Start seed of ${resultsArray[3].seed} and a hailstone of ${resultsArray[3].numberThatHit}\n`;
    const firstToHit1Th       = `First hailstone to hit 1,000: Start seed of ${resultsArray[4].seed} and a hailstone of ${resultsArray[4].numberThatHit}\n`;
    const firstToHit5Th       = `First hailstone to hit 5,000: Start seed of ${resultsArray[5].seed} and a hailstone of ${resultsArray[5].numberThatHit}\n`;
    const firstToHit10Th      = `First hailstone to hit 10,000: Start seed of ${resultsArray[6].seed} and a hailstone of ${resultsArray[6].numberThatHit}\n`;
    const firstToHit25Th      = `First hailstone to hit 25,000: Start seed of ${resultsArray[7].seed} and a hailstone of ${resultsArray[7].numberThatHit}\n`;
    const firstToHit50Th      = `First hailstone to hit 50,000: Start seed of ${resultsArray[8].seed} and a hailstone of ${resultsArray[8].numberThatHit}\n`;
    const firstToHit100Th     = `First hailstone to hit 100,000: Start seed of ${resultsArray[9].seed} and a hailstone of ${resultsArray[9].numberThatHit}\n`;
    const firstToHit500Th     = `First hailstone to hit 500,000: Start seed of ${resultsArray[10].seed} and a hailstone of ${resultsArray[10].numberThatHit}\n`;
    const firstToHit1M        = `First hailstone to hit 1,000,000: Start seed of ${resultsArray[11].seed} and a hailstone of ${resultsArray[11].numberThatHit}\n`;
    const firstToHit5M        = `First hailstone to hit 5,000,000: Start seed of ${resultsArray[12].seed} and a hailstone of ${resultsArray[12].numberThatHit}\n`;
    const firstToHit10M       = `First hailstone to hit 10,000,000: Start seed of ${resultsArray[13].seed} and a hailstone of ${resultsArray[13].numberThatHit}\n`;
    const firstToHit25M       = `First hailstone to hit 25,000,000: Start seed of ${resultsArray[14].seed} and a hailstone of ${resultsArray[14].numberThatHit}\n`;
    const firstToHit50M       = `First hailstone to hit 50,000,000: Start seed of ${resultsArray[15].seed} and a hailstone of ${resultsArray[15].numberThatHit}\n`;
    const firstToHit100M      = `First hailstone to hit 100,000,000: Start seed of ${resultsArray[16].seed} and a hailstone of ${resultsArray[16].numberThatHit}\n`;
    
    const finalResults = [firstSeed, lastSeed, 
      longestHailstoneSeq, firstToHit100, 
      firstToHit500, firstToHit1Th, 
      firstToHit5Th, firstToHit10Th, 
      firstToHit25Th, firstToHit50Th, 
      firstToHit100Th, firstToHit500Th, 
      firstToHit1M, firstToHit5M, 
      firstToHit10M, firstToHit25M, 
      firstToHit50M, firstToHit100M
    ];
    
      return finalResults;
  }

  const writeToFile = async (path, data) => {
    try {
      await fs.promises.writeFile(path, data)
    } catch (err) {
      console.log(`Error writing to file: ${err}.`);
    }
  }

  // Variables and function output
  const sourceFile          = "collatzOutput.txt";
  const outputFile          = "outputAnalysis.txt";
  const collatzData         = await readFile(sourceFile); 
  const seedInfo            = collatzData.splice(2, collatzData.length - 1); // To remove some extra text
  const firstAndLastSeed    = findFirstAndLastSeed(seedInfo);
  const longestHailstoneSeq = findLongestHailstoneSeq(seedInfo)
  const firstToBreak100     = findFirstToBreakX(seedInfo, 100);
  const firstToBreak500     = findFirstToBreakX(seedInfo, 500);
  const firstToBreak1Th     = findFirstToBreakX(seedInfo, 1_000);
  const firstToBreak5Th     = findFirstToBreakX(seedInfo, 5_000);
  const firstToBreak10Th    = findFirstToBreakX(seedInfo, 10_000);
  const firstToBreak25Th    = findFirstToBreakX(seedInfo, 25_000);
  const firstToBreak50Th    = findFirstToBreakX(seedInfo, 50_000);
  const firstToBreak100Th   = findFirstToBreakX(seedInfo, 100_000);
  const firstToBreak500Th   = findFirstToBreakX(seedInfo, 500_000);
  const firstToBreak1M      = findFirstToBreakX(seedInfo, 1_000_000);
  const firstToBreak5M      = findFirstToBreakX(seedInfo, 5_000_000);
  const firstToBreak10M     = findFirstToBreakX(seedInfo, 10_000_000);
  const firstToBreak25M     = findFirstToBreakX(seedInfo, 25_000_000);
  const firstToBreak50M     = findFirstToBreakX(seedInfo, 50_000_000);
  const firstToBreak100M    = findFirstToBreakX(seedInfo, 100_000_000);
  
  const resultsArray = [firstAndLastSeed, 
    longestHailstoneSeq, firstToBreak100, 
    firstToBreak500, firstToBreak1Th, 
    firstToBreak5Th, firstToBreak10Th,  
    firstToBreak25Th, firstToBreak50Th, 
    firstToBreak100Th, firstToBreak500Th, 
    firstToBreak1M, firstToBreak5M, 
    firstToBreak10M, firstToBreak25M, 
    firstToBreak50M, firstToBreak100M
  ];
  const formatedResults = formatResults(resultsArray);

  await writeToFile(outputFile, formatedResults.join(""))

  // Logs
  // console.log(firstToBreak100);
  // console.log(firstToBreak1Th);
  // console.log(firstToBreak5Th);
  // console.log(firstToBreak10Th);
  // console.log(firstToBreak25Th);
  // console.log(firstToBreak50Th);
  // console.log(firstToBreak100Th);
  // console.log(firstToBreak500Th);
  // console.log(firstToBreak1M);
  // console.log(firstToBreak5M);
  // console.log(firstToBreak10M);
  // console.log(firstToBreak25M);
  // console.log(firstToBreak50M);
  // console.log(firstToBreak100M);
  // console.log(firstAndLastSeed);
  // console.log(longestHailstoneSeq);


}

analyzeCollatzOutput();