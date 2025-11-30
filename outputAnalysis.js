// NOTE: This program requires Node to be installed.

const { log } = require("console");
const fs = require("fs");
const { start } = require("repl");

const analyzeCollatzOutput = async () => {
	const readFile = async (path) => {
		const data = await fs.promises.readFile(path, "utf8");
		const sections = data.split("------------------------------");
		const collatzSeq = sections;
		return collatzSeq;
	};

	const findFirstAndLastSeed = (collatzArray) => {
		const findVals = (array) => {
			const lines = array.split("\n");
			const filteredLines = lines.filter((val) => val.trim()); // To remove empty strings.
			const firstLine = filteredLines[0];
			const firstLineParts = firstLine.split(" ");
			const seedStr = firstLineParts[firstLineParts.length - 1].replaceAll(
				",",
				""
			);
			const seedVal = Number(seedStr);

			return seedVal;
		};

		const firstSeq = collatzArray[0]; // Index 2 since the array starts with other text.
		const lastSeq = collatzArray[collatzArray.length - 1];

		const firstSeed = findVals(firstSeq);
		const lastSeed = findVals(lastSeq);

		return { firstSeed: firstSeed, lastSeed: lastSeed };
	};

	const breakUpSeq = (collatzArray) => {
		const seqCollection = [];

		collatzArray.forEach((seq) => {
			// Get seed
			const lines = seq.split("\n");
			const cleanedLines = lines.filter((val) => val.trim());
			const startLine = cleanedLines[0];
			const startLineParts = startLine.split(" ");
			const seedStr = startLineParts[startLineParts.length - 1].replaceAll(
				",",
				""
			);
			const seedVal = Number(seedStr);

			// Get hailstone sequnces
			const hailstoneSeq = cleanedLines[1];
			const hailstoneArray = hailstoneSeq.split(" | ");
			const cleanedArray = hailstoneArray.map((val) => {
				const cammasRemoved = val.replaceAll(",", "");
				const numberFormated = Number(cammasRemoved);

				return numberFormated;
			});

			// Get step counts
			const stepsLine = cleanedLines[cleanedLines.length - 2];
			const stepsLineParts = stepsLine.split(" ");
			const stepsStr = stepsLineParts[stepsLineParts.length - 1].replaceAll(
				",",
				""
			);
			const stepsVal = Number(stepsStr);

			// Get highest hailstone
			const highestHailstoneLine = cleanedLines[cleanedLines.length - 1];
			const highestHailstoneParts = highestHailstoneLine.split(" ");
			const highestHailstoneStr = highestHailstoneParts[
				highestHailstoneParts.length - 1
			].replaceAll(",", "");
			const highestHailstoneVal = Number(highestHailstoneStr);

			seqCollection.push({
				seed: seedVal,
				hailstoneSeq: cleanedArray,
				stepCount: stepsVal,
				highestHailstone: highestHailstoneVal,
			});
		});

		return seqCollection;
	};

	const findLargestHailstone = (collatzArray) => {
		let largestHailstone = 0;
		let hailstoneSeed = 0;
		// let currentLargest = 0;

		for (seq of collatzArray) {
			let currentLargest = seq.highestHailstone;
			let currentSeed = seq.seed;

			if (currentLargest > largestHailstone) {
				largestHailstone = currentLargest;
				hailstoneSeed = currentSeed;
			}
		}

		console.log(hailstoneSeed, largestHailstone);

		return {
			seed: hailstoneSeed.toLocaleString(),
			largestHailstone: largestHailstone.toLocaleString(),
		};
	};

	const findFirstToBreakX = (collatzArray, hitPoint) => {
		// This function finds the first hailstone out of all sequences to hit a number.
		// Ex: finds the first number in all sequences combined to hit 1,000, 5,000, 10,000,
		// or any other number. For this project, these hit points will be predetermined.

		const seqCollection = brokenUpSeq;
		const numberToHit = hitPoint;
		const errorMsg = `error or number to hit ${numberToHit} is TBD.`;

		for (const seqInfo of seqCollection) {
			const hailstoneNumber = seqInfo.hailstoneSeq.find(
				(val) => val >= numberToHit
			);

			if (hailstoneNumber !== undefined) {
				return {
					numberToHit: numberToHit.toLocaleString(),
					seed: seqInfo.seed.toLocaleString(),
					numberThatHit: hailstoneNumber.toLocaleString(),
				};
			}
		}
		return errorMsg;
	};

	const findLongestHailstoneSeq = (collatzArray) => {
		const seqCollection = brokenUpSeq;
		let longestHailstoneSeq = 0;
		let startingSeed;

		for (const seqInfo of seqCollection) {
			if (seqInfo.stepCount > longestHailstoneSeq) {
				// console.log(seqInfo.stepCount);
				longestHailstoneSeq = seqInfo.stepCount;
				startingSeed = seqInfo.seed;
			}
		}

		return {
			seed: startingSeed.toLocaleString(),
			longestHailstoneSeq: longestHailstoneSeq.toLocaleString(),
		};
	};

	// find the longest straight drop from x to 1
	const findLongestStraightDrop = (collatzArray) => {
		const seqCollection = [...brokenUpSeq].reverse();
		let originalSeed = 0;
		let longestDrop = 0;

		for (const seqInfo of seqCollection) {
			let seed = seqInfo.seed;
			let startingSeed = seed;
			let currentDrop = 0;

			// skip numbers that aren’t divisible by 128, for quickness
			if (seed % 128 !== 0) continue;

			while (seed >= 1 && seed % 2 === 0) {
				seed /= 2;
				currentDrop++;
			}

			if (seed === 1 && currentDrop > longestDrop) {
				longestDrop = currentDrop;
				originalSeed = startingSeed;
			}
		}

		return {
			seed: originalSeed.toLocaleString(),
			dropSteps: longestDrop.toLocaleString(),
		};
	};

	const formHailstoneOutputStr = (goal, startSeed, hailstone) => {
		return `${goal}: seed of ${startSeed} | hailstone of ${hailstone}\n`;
	};

	const formatResults = (resultsArray) => {
		const firstSeed = `First seed tested: ${resultsArray[0].firstSeed.toLocaleString()}\n`;
		const lastSeed = `Last seed tested: ${resultsArray[0].lastSeed.toLocaleString()}\n`;
		const longestHailstoneSeq = `Longest hailstone sequence: \nseed of ${resultsArray[1].seed} | step count of ${resultsArray[1].longestHailstoneSeq}\n`;
		const largestHailstone = `Largest hailstone: \nseed of ${resultsArray[18].seed} | hailstone of ${resultsArray[18].largestHailstone}\n`;
		const longestStraightDrop = `Longest straight drop: \nseed of ${resultsArray[2].seed} | steps of ${resultsArray[2].dropSteps}\n\n`;
		const firstToHitX = "First hailstone to hit:\n";
		const firstToHit100 = formHailstoneOutputStr(
			"100",
			resultsArray[3].seed,
			resultsArray[3].numberThatHit
		);
		const firstToHit500 = formHailstoneOutputStr(
			"500",
			resultsArray[4].seed,
			resultsArray[4].numberThatHit
		);
		const firstToHit1Th = formHailstoneOutputStr(
			"1Th",
			resultsArray[5].seed,
			resultsArray[5].numberThatHit
		);
		const firstToHit5Th = formHailstoneOutputStr(
			"5Th",
			resultsArray[6].seed,
			resultsArray[6].numberThatHit
		);
		const firstToHit10Th = formHailstoneOutputStr(
			"10Th",
			resultsArray[7].seed,
			resultsArray[7].numberThatHit
		);
		const firstToHit25Th = formHailstoneOutputStr(
			"25Th",
			resultsArray[8].seed,
			resultsArray[8].numberThatHit
		);
		const firstToHit50Th = formHailstoneOutputStr(
			"50Th",
			resultsArray[9].seed,
			resultsArray[9].numberThatHit
		);
		const firstToHit100Th = formHailstoneOutputStr(
			"100Th",
			resultsArray[10].seed,
			resultsArray[10].numberThatHit
		);
		const firstToHit500Th = formHailstoneOutputStr(
			"500Th",
			resultsArray[11].seed,
			resultsArray[11].numberThatHit
		);
		const firstToHit1M = formHailstoneOutputStr(
			"1M",
			resultsArray[12].seed,
			resultsArray[12].numberThatHit
		);
		const firstToHit5M = formHailstoneOutputStr(
			"5M",
			resultsArray[13].seed,
			resultsArray[13].numberThatHit
		);
		const firstToHit10M = formHailstoneOutputStr(
			"10M",
			resultsArray[14].seed,
			resultsArray[14].numberThatHit
		);
		const firstToHit25M = formHailstoneOutputStr(
			"25M",
			resultsArray[15].seed,
			resultsArray[15].numberThatHit
		);
		const firstToHit50M = formHailstoneOutputStr(
			"50M",
			resultsArray[16].seed,
			resultsArray[16].numberThatHit
		);
		const firstToHit100M = formHailstoneOutputStr(
			"100M",
			resultsArray[17].seed,
			resultsArray[17].numberThatHit
		);

		const finalResults = [
			firstSeed,
			lastSeed,
			longestHailstoneSeq,
			largestHailstone,
			longestStraightDrop,
			firstToHitX,
			firstToHit100,
			firstToHit500,
			firstToHit1Th,
			firstToHit5Th,
			firstToHit10Th,
			firstToHit25Th,
			firstToHit50Th,
			firstToHit100Th,
			firstToHit500Th,
			firstToHit1M,
			firstToHit5M,
			firstToHit10M,
			firstToHit25M,
			firstToHit50M,
			firstToHit100M,
		];

		return finalResults;
	};

	const writeToFile = async (path, data) => {
		try {
			await fs.promises.writeFile(path, data);
		} catch (err) {
			console.log(`Error writing to file: ${err}.`);
		}
	};

	// Variables and function output
	const sourceFile = "collatzOutput.txt";
	const outputFile = "outputAnalysis.txt";
	const collatzData = await readFile(sourceFile);
	const seedInfo = collatzData.splice(2, collatzData.length - 1); // To remove some extra text
	const brokenUpSeq = breakUpSeq(seedInfo);
	const firstAndLastSeed = findFirstAndLastSeed(seedInfo);
	const longestHailstoneSeq = findLongestHailstoneSeq(seedInfo);
	const largestHailstone = findLargestHailstone(brokenUpSeq);
	const longestStraightDrop = findLongestStraightDrop(seedInfo);
	const firstToBreak100 = findFirstToBreakX(brokenUpSeq, 100);
	const firstToBreak500 = findFirstToBreakX(brokenUpSeq, 500);
	const firstToBreak1Th = findFirstToBreakX(brokenUpSeq, 1_000);
	const firstToBreak5Th = findFirstToBreakX(brokenUpSeq, 5_000);
	const firstToBreak10Th = findFirstToBreakX(brokenUpSeq, 10_000);
	const firstToBreak25Th = findFirstToBreakX(brokenUpSeq, 25_000);
	const firstToBreak50Th = findFirstToBreakX(brokenUpSeq, 50_000);
	const firstToBreak100Th = findFirstToBreakX(brokenUpSeq, 100_000);
	const firstToBreak500Th = findFirstToBreakX(brokenUpSeq, 500_000);
	const firstToBreak1M = findFirstToBreakX(brokenUpSeq, 1_000_000);
	const firstToBreak5M = findFirstToBreakX(brokenUpSeq, 5_000_000);
	const firstToBreak10M = findFirstToBreakX(brokenUpSeq, 10_000_000);
	const firstToBreak25M = findFirstToBreakX(brokenUpSeq, 25_000_000);
	const firstToBreak50M = findFirstToBreakX(brokenUpSeq, 50_000_000);
	const firstToBreak100M = findFirstToBreakX(brokenUpSeq, 100_000_000);

	const resultsArray = [
		firstAndLastSeed,
		longestHailstoneSeq,
		longestStraightDrop,
		firstToBreak100,
		firstToBreak500,
		firstToBreak1Th,
		firstToBreak5Th,
		firstToBreak10Th,
		firstToBreak25Th,
		firstToBreak50Th,
		firstToBreak100Th,
		firstToBreak500Th,
		firstToBreak1M,
		firstToBreak5M,
		firstToBreak10M,
		firstToBreak25M,
		firstToBreak50M,
		firstToBreak100M,
		largestHailstone,
	];
	const formatedResults = formatResults(resultsArray);

	await writeToFile(outputFile, formatedResults.join(""));

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
};

analyzeCollatzOutput();
