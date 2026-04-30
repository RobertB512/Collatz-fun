// NOTE: This program requires Node to be installed.

const fs = require("fs");
const { json } = require("stream/consumers");

const writeToFile = async (path, data) => {
	try {
		await fs.promises.appendFile(path, data);
	} catch (err) {
		console.log(`Error writing to file: ${err}.`);
	}
};

const findPrevSeed = async (path) => {
	const data = (await fs.promises.readFile(path, "utf8")).trim();
	let nextSeed = null;

	if (data) {
		const lastLine = data.slice(data.lastIndexOf("\n") + 1);
		const lastObj = JSON.parse(lastLine);
		nextSeed = Number(lastObj.seed);
	}

	return nextSeed;
};

const generateCollatzSeq = async (startSeed, endSeed, file) => {
  while (startSeed <= endSeed) {
		let highestHailstone = 0; // The highest number in any given Collatz sequence.
		let valOfN = startSeed; // Number being processed toward the 4-2-1 loop.
		let steps = 0; // Number of steps to reach 1.
		let seqVals = []; // List of values produced from startingSeed to 1.

		do {
			steps++;

			if (valOfN % 2 === 0) {
				valOfN = valOfN / 2;
			} else if (valOfN % 2 === 1) {
				valOfN = valOfN * 3 + 1;
			}

			if (valOfN > highestHailstone) highestHailstone = valOfN;

			seqVals.push(valOfN);
		} while (valOfN >= 2);

		const fullSeqReport = {
			seed: startSeed,
			hailstoneSeq: seqVals,
			stepCount: steps,
			highestHailstone: highestHailstone,
		};

		await writeToFile(file, JSON.stringify(fullSeqReport) + "\n");

		startSeed++;
	}

	console.log("\nFinished writing to file!");
};

const prepSeqGeneration = async () => {
	const outputFile = "collatzOutput.ndjson";
  let startingSeed = (await findPrevSeed(outputFile)) + 1; // Starting number for Collatz sequence.

	if (startingSeed == null) {
		startingSeed = 1;
	}

	const numbersToAdd = 5000; // The number of Collatz sequences to add to the output file.
	const endingSeed = startingSeed + numbersToAdd - 1; // - 1 since otherwise one additional seq would be added, since
  // every run starts at last seed + 1, which would have not been included if it weren't for the - 1

	console.log(`Next value is: ${startingSeed} \n`);
  console.log(`Adding ${numbersToAdd} more numbers...`);
	console.log("Processing... Please wait");
	console.log("If you stop this process, data may be lost or messed up");

	generateCollatzSeq(startingSeed, endingSeed, outputFile);
};

prepSeqGeneration();
