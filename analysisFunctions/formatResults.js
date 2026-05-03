// import { formHailstoneOutputStr } from "./hailstoneData.js";

const formHailstoneOutputStr = (goal, startSeed, hailstone) => {
	return `${goal}: \n\tseed: ${startSeed} \n\thailstone: ${hailstone}\n`;
};

export const formatResults = (resultsArray) => {
	const firstSeed = `- First seed tested: ${resultsArray[0].firstSeed}\n`;
	const lastSeed = `- Last seed tested: ${resultsArray[0].lastSeed}\n`;
	const largestHailstone = `- Largest hailstone: \n\tseed: ${resultsArray[18].seed} \n\thailstone: ${resultsArray[18].largestHailstone}\n`;
	const longestHailstoneSeq = `- Longest hailstone sequence: \n\tseed: ${resultsArray[1].seed} \n\tstep count: ${resultsArray[1].longestHailstoneSeq}\n`;
	const meanSeqLength = `- Mean sequence length: ${resultsArray[1].meanSeqLength}\n`;
	const sdOfSeqLength = `- Standard deviation of sequence length: ${resultsArray[1].sdOfSeqLength}\n`;
	const longestStraightDrop = `- Longest straight drop: \n\tseed: ${resultsArray[2].seed} \n\tsteps: ${resultsArray[2].dropSteps}\n\n`;
	const firstToHitX = "- First hailstone to hit:\n";
	const firstToHit100 = formHailstoneOutputStr(
    "100", 
    resultsArray[3].seed, 
    resultsArray[3].numberThatHit
  );
	const firstToHit500 = formHailstoneOutputStr(
		"500",
		resultsArray[4].seed,
		resultsArray[4].numberThatHit,
	);;
	const firstToHit1Th = formHailstoneOutputStr(
		"1Th",
		resultsArray[5].seed,
		resultsArray[5].numberThatHit,
	);
	const firstToHit5Th = formHailstoneOutputStr(
		"5th",
		resultsArray[6].seed,
		resultsArray[6].numberThatHit,
	);
	const firstToHit10Th = formHailstoneOutputStr(
		"10Th",
		resultsArray[7].seed,
		resultsArray[7].numberThatHit,
	);
	const firstToHit25Th = formHailstoneOutputStr(
		"25Th",
		resultsArray[8].seed,
		resultsArray[8].numberThatHit,
	);
	const firstToHit50Th = formHailstoneOutputStr(
		"50Th",
		resultsArray[9].seed,
		resultsArray[9].numberThatHit,
	);
	const firstToHit100Th = formHailstoneOutputStr(
		"100Th",
		resultsArray[10].seed,
		resultsArray[10].numberThatHit,
	);
	const firstToHit500Th = formHailstoneOutputStr(
		"500Th",
		resultsArray[11].seed,
		resultsArray[11].numberThatHit,
	);
	const firstToHit1M = formHailstoneOutputStr(
		"1M",
		resultsArray[12].seed,
		resultsArray[12].numberThatHit,
	);
	const firstToHit5M = formHailstoneOutputStr(
		"5M",
		resultsArray[13].seed,
		resultsArray[13].numberThatHit,
	);
	const firstToHit10M = formHailstoneOutputStr(
		"10M",
		resultsArray[14].seed,
		resultsArray[14].numberThatHit,
	);
	const firstToHit25M = formHailstoneOutputStr(
		"25M",
		resultsArray[15].seed,
		resultsArray[15].numberThatHit,
	);
	const firstToHit50M = formHailstoneOutputStr(
		"50M",
		resultsArray[16].seed,
		resultsArray[16].numberThatHit,
	);
	const firstToHit100M = formHailstoneOutputStr(
		"100M",
		resultsArray[17].seed,
		resultsArray[17].numberThatHit,
	);
	const firstToHit500M = formHailstoneOutputStr(
		"500M",
		resultsArray[19].seed,
		resultsArray[19].numberThatHit,
	);
	const firstToHit1B = formHailstoneOutputStr(
		"1B",
		resultsArray[20].seed,
		resultsArray[20].numberThatHit,
	);

	const finalResults = [
		firstSeed,
		lastSeed,
		largestHailstone,
		longestHailstoneSeq,
		meanSeqLength,
		sdOfSeqLength,
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
		firstToHit500M,
		firstToHit1B,
	];

	return finalResults.join("");
};
