// import { formHailstoneOutputStr } from "./hailstoneData.js";

const formHailstoneOutputStr = (goal, startSeed, hailstone) => {
	return `${goal}: \n\tseed: ${startSeed} \n\thailstone: ${hailstone}\n`;
};

export const formatResults = (resultsArray) => {
	// general
	const sectionBreak = "\n\n\n";

	// For general data
	const categoryGeneral = "---- General Info -----\n";
	const firstSeed = `- First seed tested: ${resultsArray[0].firstSeed}\n`;
	const lastSeed = `- Last seed tested: ${resultsArray[0].lastSeed}\n`;
	const largestHailstone = `- Largest hailstone: \n\tseed: ${resultsArray[18].seed} \n\thailstone: ${resultsArray[18].largestHailstone}\n`;
	const longestHailstoneSeq = `- Longest hailstone sequence: \n\tseed: ${resultsArray[1].seed} \n\tstep count: ${resultsArray[1].longestHailstoneSeq}\n`;
	const longestStraightDrop = `- Longest straight drop: \n\tseed: ${resultsArray[2].seed} \n\tsteps: ${resultsArray[2].dropSteps}\n`;
	const largestPropDiff = `- Largest proportional difference between a seed and its highest hailstone: \n\tportion: ${resultsArray[22].proportion} \n\tseed: ${resultsArray[22].seed} \n\thailstone: ${resultsArray[22].hailstone}\n`;
	const evensAndOdds = "- Even and odd hailstone counts:\n";
	const totalCounts = `\tevens (all): ${resultsArray[21].evenHailstoneCount[0]} | odds (all): ${resultsArray[21].oddHailstoneCount[0]}\n`;
	const uniqueCounts = `\tevens (unique): ${resultsArray[21].evenHailstoneCount[1]} | odds (unique): ${resultsArray[21].oddHailstoneCount[1]}`;

	// Frequency distribution of first digit
	const categoryFreqFstDigit =
		"----- Frequency Distribution Of Each Hailstone's First Digit -----\n";
	const freqDistOfFstDigit = `Ones (all | unique): ${resultsArray[21].ones[0]} | ${resultsArray[21].ones[1]} \nTwos (all | unique): ${resultsArray[21].twos[0]} | ${resultsArray[21].twos[1]} \nThrees (all | unique): ${resultsArray[21].threes[0]} | ${resultsArray[21].threes[1]} \nFours (all | unique): ${resultsArray[21].fours[0]} | ${resultsArray[21].fours[1]} \nFives (all | unique): ${resultsArray[21].fives[0]} | ${resultsArray[21].fives[1]} \nSixes (all | unique): ${resultsArray[21].sixes[0]} | ${resultsArray[21].sixes[1]} \nSevens (all | unique): ${resultsArray[21].sevens[0]} | ${resultsArray[21].sevens[1]} \nEights (all | unique): ${resultsArray[21].eights[0]} | ${resultsArray[21].eights[1]} \nNines (all | unique): ${resultsArray[21].nines[0]} | ${resultsArray[21].nines[1]}`;

	// For stats data
	const categoryStats = "----- Stats Data -----\n";
	const meanOfFst100Seq = `- Mean of first 100 step counts: ${resultsArray[1].meanOfFst100}\n`;
	const medOfFst100Seq = `- Median of first 100 step counts: ${resultsArray[1].medOfFst100}\n`;
	const sdOffst100Seq = `- Standard deviation of first 100 step counts ${resultsArray[1].sdOfFst100}\n\n`;

	const meanOfFst1ThSeq = `- Mean of first 1,000 step counts: ${resultsArray[1].meanOfFst1Th}\n`;
	const medOfFst1ThSeq = `- Median of first 1,000 step counts: ${resultsArray[1].medOfFst1Th}\n`;
	const sdOffst1ThSeq = `- Standard deviation of first 1,000 step counts ${resultsArray[1].sdOfFst1Th}\n\n`;

	const meanOfFst10ThSeq = `- Mean of first 10,000 step counts: ${resultsArray[1].meanOfFst10Th}\n`;
	const medOfFst10ThSeq = `- Median of first 10,000 step counts: ${resultsArray[1].medOfFst10Th}\n`;
	const sdOffst10ThSeq = `- Standard deviation of first 10,000 step counts ${resultsArray[1].sdOfFst10Th}\n\n`;

	const meanSeqLength = `- Mean of all step counts: ${resultsArray[1].meanSeqLength}\n`;
	const medSeqLength = `- Meadian of all step counts: ${resultsArray[1].medSeqLength}\n`;
	const sdOfSeqLength = `- Standard deviation of of all step counts: ${resultsArray[1].sdOfSeqLength}`;

	// For hailstone mile markers
	const categoryHailstoneGoals = "----- First Hailstone To Hit -----\n";
	const firstToHit100 = formHailstoneOutputStr(
		"100",
		resultsArray[3].seed,
		resultsArray[3].numberThatHit,
	);
	const firstToHit500 = formHailstoneOutputStr(
		"500",
		resultsArray[4].seed,
		resultsArray[4].numberThatHit,
	);
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
		categoryGeneral,
		firstSeed,
		lastSeed,
		largestHailstone,
		longestHailstoneSeq,
		longestStraightDrop,
    largestPropDiff,
		evensAndOdds,
		totalCounts,
		uniqueCounts,
		sectionBreak,
		categoryStats,
		meanOfFst100Seq,
		medOfFst100Seq,
		sdOffst100Seq,
		meanOfFst1ThSeq,
		medOfFst1ThSeq,
		sdOffst1ThSeq,
		meanOfFst10ThSeq,
		medOfFst10ThSeq,
		sdOffst10ThSeq,
		meanSeqLength,
		medSeqLength,
		sdOfSeqLength,
		sectionBreak,
		categoryFreqFstDigit,
		freqDistOfFstDigit,
		sectionBreak,
		categoryHailstoneGoals,
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
