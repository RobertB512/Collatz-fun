// NOTE: This program requires Node to be installed.

// imports packages
import fs from "node:fs/promises";
import { writeFile } from "node:fs/promises";

// import modules
import { getFileContents } from "./analysisFunctions/getFileContents.js";
import { breakUpSeq } from "./analysisFunctions/breakUpSeq.js";
import { findFirstAndLastSeed } from "./analysisFunctions/findFirstAndLastSeed.js";
import { findLargestHailstone } from "./analysisFunctions/hailstoneData.js";
import { findFirstToBreakX } from "./analysisFunctions/hailstoneData.js";
import { analyzeHailstoneSeq } from "./analysisFunctions/hailstoneData.js";
import { findLongestStraightDrop } from "./analysisFunctions/hailstoneData.js";
import { formatResults } from "./analysisFunctions/formatResults.js";

// base function
const analyzeCollatzOutput = async () => {
	const sourceFile = "collatzOutput.txt";
	const outputFile = "outputAnalysis.txt";
	const collatzData = await getFileContents(sourceFile);
	const seedInfo = collatzData.splice(2, collatzData.length - 1); // To remove some extra text
	const brokenUpSeq = breakUpSeq(seedInfo);
	const firstAndLastSeed = findFirstAndLastSeed(brokenUpSeq);
	const seqLengthStats = analyzeHailstoneSeq(brokenUpSeq);
	const largestHailstone = findLargestHailstone(brokenUpSeq);
	const longestStraightDrop = findLongestStraightDrop(brokenUpSeq);
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
	const firstToBreak500M = findFirstToBreakX(brokenUpSeq, 500_000_000);
	const firstToBreak1B = findFirstToBreakX(brokenUpSeq, 1_000_000_000);

	const resultsArray = [
		firstAndLastSeed,
		seqLengthStats,
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
		firstToBreak500M,
		firstToBreak1B,
	];

	const formatedResults = formatResults(resultsArray);

	try {
		await writeFile(outputFile, formatedResults);
		console.log("File written successfully");
	} catch (err) {
		console.error("Error writing file:", err);
	}
};

analyzeCollatzOutput();
