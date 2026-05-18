// import { formHailstoneOutputStr } from "./hailstoneData.js";

const formHailstoneOutputStr = (goal, startSeed, hailstone) => {
	return `- ${goal}: \n\tseed: ${startSeed} \n\thailstone: ${hailstone}`;
};

const formatBenfordsData = (
	leadingDigit,
	totalCount,
	totalFreq,
	uniqueCount,
	uniqueFreq,
) => {
	return `- ${leadingDigit} (all | unique): ${totalCount} (${totalFreq}%) | ${uniqueCount} (${uniqueFreq}%)`;
};

const formatStatsData = (numOfStepCounts, mean, median, sd) => {
	return `- ${numOfStepCounts} step counts: \n\tmean: ${mean} \n\tmedian: ${median} \n\tsd: ${sd}`;
};

export const formatResults = (resultsArray) => {
	// containers for values
	let generalInfo;
	let benfordsData;
	let hailstoneStats;
	let hailstoneMilestones;
	let finalResults;

	// containers for results
	generalInfo = [
		"---- General Info -----",
		`- First seed tested: ${resultsArray[0].firstSeed}`,
		`- Last seed tested: ${resultsArray[0].lastSeed}`,
		`- Largest hailstone: \n\tseed: ${resultsArray[18].seed} \n\thailstone: ${resultsArray[18].largestHailstone}`,
		`- Longest hailstone sequence: \n\tseed: ${resultsArray[1].seed} \n\tstep count: ${resultsArray[1].longestHailstoneSeq}`,
		`- Longest straight drop: \n\tseed: ${resultsArray[2].seed} \n\tsteps: ${resultsArray[2].dropSteps}`,
		`- Largest proportional difference between a seed and its highest hailstone: \n\tportion: ${resultsArray[22].proportion} \n\tseed: ${resultsArray[22].seed} \n\thailstone: ${resultsArray[22].hailstone}`,
		"- Even and odd hailstone counts:",
		`\tevens (all): ${resultsArray[21].evenHailstoneCount[0]} | (unique): ${resultsArray[21].evenHailstoneCount[1]}`,
		`\todds (all): ${resultsArray[21].oddHailstoneCount[0]} | (unique): ${resultsArray[21].oddHailstoneCount[1]}`,
	].join("\n");

	benfordsData = [
		"----- Benford's Law Data -----",
		formatBenfordsData(
			"Ones",
			resultsArray[21].ones[0],
			resultsArray[21].ones[1],
			resultsArray[21].ones[2],
			resultsArray[21].ones[3],
		),
		formatBenfordsData(
			"Twos",
			resultsArray[21].twos[0],
			resultsArray[21].twos[1],
			resultsArray[21].twos[2],
			resultsArray[21].twos[3],
		),
		formatBenfordsData(
			"Threes",
			resultsArray[21].threes[0],
			resultsArray[21].threes[1],
			resultsArray[21].threes[2],
			resultsArray[21].threes[3],
		),
		formatBenfordsData(
			"Fours",
			resultsArray[21].fours[0],
			resultsArray[21].fours[1],
			resultsArray[21].fours[2],
			resultsArray[21].fours[3],
		),
		formatBenfordsData(
			"Fives",
			resultsArray[21].fives[0],
			resultsArray[21].fives[1],
			resultsArray[21].fives[2],
			resultsArray[21].fives[3],
		),
		formatBenfordsData(
			"Sixes",
			resultsArray[21].sixes[0],
			resultsArray[21].sixes[1],
			resultsArray[21].sixes[2],
			resultsArray[21].sixes[3],
		),
		formatBenfordsData(
			"Sevens",
			resultsArray[21].sevens[0],
			resultsArray[21].sevens[1],
			resultsArray[21].sevens[2],
			resultsArray[21].sevens[3],
		),
		formatBenfordsData(
			"Eights",
			resultsArray[21].eights[0],
			resultsArray[21].eights[1],
			resultsArray[21].eights[2],
			resultsArray[21].eights[3],
		),
		formatBenfordsData(
			"Nines",
			resultsArray[21].nines[0],
			resultsArray[21].nines[1],
			resultsArray[21].nines[2],
			resultsArray[21].nines[3],
		),
	].join("\n");

	hailstoneStats = [
		"----- Stats Data -----",
		"Mean, median, and sd of:",
		formatStatsData(
			"first 100",
			resultsArray[1].meanOfFst100,
			resultsArray[1].medOfFst100,
			resultsArray[1].sdOfFst100,
		),
		formatStatsData(
			"first 1,000",
			resultsArray[1].meanOfFst1Th,
			resultsArray[1].medOfFst1Th,
			resultsArray[1].sdOfFst1Th,
		),
		formatStatsData(
			"first 10,000",
			resultsArray[1].meanOfFst10Th,
			resultsArray[1].medOfFst10Th,
			resultsArray[1].sdOfFst10Th,
		),
		formatStatsData(
			"all",
			resultsArray[1].meanSeqLength,
			resultsArray[1].medSeqLength,
			resultsArray[1].sdOfSeqLength,
		),
	].join("\n");

	hailstoneMilestones = [
		"----- First Hailstone To Hit -----",
		formHailstoneOutputStr(
			"100",
			resultsArray[3].seed,
			resultsArray[3].numberThatHit,
		),
		formHailstoneOutputStr(
			"500",
			resultsArray[4].seed,
			resultsArray[4].numberThatHit,
		),
		formHailstoneOutputStr(
			"1Th",
			resultsArray[5].seed,
			resultsArray[5].numberThatHit,
		),
		formHailstoneOutputStr(
			"5Th",
			resultsArray[6].seed,
			resultsArray[6].numberThatHit,
		),
		formHailstoneOutputStr(
			"10Th",
			resultsArray[7].seed,
			resultsArray[7].numberThatHit,
		),
		formHailstoneOutputStr(
			"25Th",
			resultsArray[8].seed,
			resultsArray[8].numberThatHit,
		),
		formHailstoneOutputStr(
			"50Th",
			resultsArray[9].seed,
			resultsArray[9].numberThatHit,
		),
		formHailstoneOutputStr(
			"100Th",
			resultsArray[10].seed,
			resultsArray[10].numberThatHit,
		),
		formHailstoneOutputStr(
			"500Th",
			resultsArray[11].seed,
			resultsArray[11].numberThatHit,
		),
		formHailstoneOutputStr(
			"1M",
			resultsArray[12].seed,
			resultsArray[12].numberThatHit,
		),
		formHailstoneOutputStr(
			"5M",
			resultsArray[13].seed,
			resultsArray[13].numberThatHit,
		),
		formHailstoneOutputStr(
			"10M",
			resultsArray[14].seed,
			resultsArray[14].numberThatHit,
		),
		formHailstoneOutputStr(
			"25M",
			resultsArray[15].seed,
			resultsArray[15].numberThatHit,
		),
		formHailstoneOutputStr(
			"50M",
			resultsArray[16].seed,
			resultsArray[16].numberThatHit,
		),
		formHailstoneOutputStr(
			"100M",
			resultsArray[17].seed,
			resultsArray[17].numberThatHit,
		),
		formHailstoneOutputStr(
			"500M",
			resultsArray[19].seed,
			resultsArray[19].numberThatHit,
		),
		formHailstoneOutputStr(
			"1B",
			resultsArray[20].seed,
			resultsArray[20].numberThatHit,
		),
	].join("\n");

	finalResults = [
		generalInfo,
		benfordsData,
		hailstoneStats,
		hailstoneMilestones,
	].join("\n\n\n");

	return finalResults;
};
