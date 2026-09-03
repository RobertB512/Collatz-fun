// NOTE: This program requires Node to be installed.

// imports packages
import fs from "node:fs";
import readline from "node:readline";
import path from "node:path";
import { writeFile } from "node:fs/promises";
const __dirname = import.meta.dirname;

// import modules
import { getFileContents } from "./analysisFunctions/getFileContents.js";
import { breakUpSeq } from "./analysisFunctions/breakUpSeq.js";
import { findFirstAndLastSeed } from "./analysisFunctions/findFirstAndLastSeed.js";
import { findLargestHailstone } from "./analysisFunctions/seqLengthData.js";
import { findFirstToBreakX } from "./analysisFunctions/seqLengthData.js";
import { analyzeHailstoneSeq } from "./analysisFunctions/seqLengthData.js";
import { findLongestStraightDrop } from "./analysisFunctions/seqLengthData.js";
import { formatResults } from "./analysisFunctions/formatResults.js";
import { analyzeEachHailstone } from "./analysisFunctions/hailstoneData.js";
import { findLargestDiff } from "./analysisFunctions/seqLengthData.js";

// base function
const analyzeCollatzOutput = async () => {
	console.time("timeProg");

	const sourceFile = path.join(__dirname, "..", "dataOutput.ndjson");
	const outputFilePath = path.join(__dirname, "results.txt");
	const data = await getFileContents(sourceFile);

	const firstAndLastSeed = await findFirstAndLastSeed(data);
	const seqLengthStats = await analyzeHailstoneSeq(data);
	const largestHailstone = findLargestHailstone(data);
	const longestStraightDrop = findLongestStraightDrop(data);
	const largestPropDiff = findLargestDiff(data);
	const hailstoneData = await analyzeEachHailstone(data);
	const firstToBreak100 = findFirstToBreakX(data, 100);
	const firstToBreak500 = findFirstToBreakX(data, 500);
	const firstToBreak1Th = findFirstToBreakX(data, 1_000);
	const firstToBreak5Th = findFirstToBreakX(data, 5_000);
	const firstToBreak10Th = findFirstToBreakX(data, 10_000);
	const firstToBreak25Th = findFirstToBreakX(data, 25_000);
	const firstToBreak50Th = findFirstToBreakX(data, 50_000);
	const firstToBreak100Th = findFirstToBreakX(data, 100_000);
	const firstToBreak500Th = findFirstToBreakX(data, 500_000);
	const firstToBreak1M = findFirstToBreakX(data, 1_000_000);
	const firstToBreak5M = findFirstToBreakX(data, 5_000_000);
	const firstToBreak10M = findFirstToBreakX(data, 10_000_000);
	const firstToBreak25M = findFirstToBreakX(data, 25_000_000);
	const firstToBreak50M = findFirstToBreakX(data, 50_000_000);
	const firstToBreak100M = findFirstToBreakX(data, 100_000_000);
	const firstToBreak500M = findFirstToBreakX(data, 500_000_000);
	const firstToBreak1B = findFirstToBreakX(data, 1_000_000_000);

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
		hailstoneData,
		largestPropDiff,
	];

	const formatedResults = formatResults(resultsArray);

	try {
		await writeFile(outputFilePath, formatedResults);
		console.log("File written successfully");
    console.timeEnd("timeProg");
	} catch (err) {
		console.error("Error writing file:", err);
    console.timeEnd("timeProg");
	}

	
};

analyzeCollatzOutput();
