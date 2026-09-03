// import { formHailstoneOutputStr } from "./hailstoneData.js";

const formHailstoneOutputStr = (goal, startSeed, hailstone) => {
	return `${goal.padEnd(20)} ${startSeed.padEnd(20)} ${hailstone}`;
};

const formatBenfordsData = (
	leadingDigit,
	totalCount,
	totalFreq,
	uniqueCount,
	uniqueFreq,
) => {
	return `${leadingDigit.padEnd(20)} ${totalCount.padEnd(15)} ${totalFreq} ${"%".padEnd(10)} ${uniqueCount.padEnd(10)} ${uniqueFreq} %`;
};

const formatStatsData = (numOfStepCounts, mean, median, sd) => {
	return `${numOfStepCounts.padEnd(15)} ${mean.padEnd(10)} ${median.padEnd(10)} ${sd.padEnd(10)}`;
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
		"===============",
		"General Info",
		"===============\n",
		`${"First Seed Tested:".padEnd(20)} ${resultsArray[0].firstSeed}`,
		`${"Last Seed Tested:".padEnd(20)} ${resultsArray[0].lastSeed}\n\n`,
		`Largest Hailstone:`,
		`${"Seed:".padEnd(15)} ${resultsArray[18].seed}`,
		`${"Hailstone:".padEnd(15)} ${resultsArray[18].largestHailstone}\n\n`,
		`Longest Hailstone Sequence:`,
		`${"Seed:".padEnd(15)} ${resultsArray[1].seed}`,
		`${"Step Count:".padEnd(15)} ${resultsArray[1].longestHailstoneSeq}\n\n`,
		`Longest Straight Drop:`,
		`${"Seed:".padEnd(15)} ${resultsArray[2].seed}`,
		`${"Step Count:".padEnd(15)} ${resultsArray[2].dropSteps}\n\n`,
		`Largest Difference Between A Seed And Its Highest Hailstone:`,
		`${"Difference:".padEnd(15)} ${resultsArray[22].difference} %`,
		`${"Seed:".padEnd(15)} ${resultsArray[22].seed}`,
		`${"Hailstone:".padEnd(15)} ${resultsArray[22].hailstone}\n\n`,
		"Even And Odd Hailstone Counts",
		`${"Type".padEnd(10)} ${"All".padEnd(15)} ${"Unique".padEnd(10)}`,
		"-------------------------------------------",
		`${"Evens".padEnd(10)} ${resultsArray[21].evenHailstoneCount[0].padEnd(15)} ${resultsArray[21].evenHailstoneCount[1]}`,
		`${"Odds".padEnd(10)} ${resultsArray[21].oddHailstoneCount[0].padEnd(15)} ${resultsArray[21].oddHailstoneCount[1]}`,
	].join("\n");

	benfordsData = [
		"=====================",
		"Benford's Law Data",
		"=====================\n",
		`${"Leading Digit".padEnd(20)} ${"All".padEnd(15)} ${"All %".padEnd(10)} ${"Unique".padEnd(10)} ${"Unique %"}`,
		"---------------------------------------------------------------------------",
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
		"===================",
		"Step Count Stats",
		"===================\n",
    `${"Step Count".padEnd(15)} ${"Mean".padEnd(10)} ${"Median".padEnd(10)} ${"SD".padEnd(10)}`,
    "------------------------------------------------",
    formatStatsData(
			"100",
			resultsArray[1].meanOfFst100,
			resultsArray[1].medOfFst100,
			resultsArray[1].sdOfFst100,
		),
		formatStatsData(
			"1,000",
			resultsArray[1].meanOfFst1Th,
			resultsArray[1].medOfFst1Th,
			resultsArray[1].sdOfFst1Th,
		),
		formatStatsData(
			"10,000",
			resultsArray[1].meanOfFst10Th,
			resultsArray[1].medOfFst10Th,
			resultsArray[1].sdOfFst10Th,
		),
		formatStatsData(
			"All",
			resultsArray[1].meanSeqLength,
			resultsArray[1].medSeqLength,
			resultsArray[1].sdOfSeqLength,
		),
	].join("\n");

	hailstoneMilestones = [
		"=====================================",
		"First Hailstone To Hit Milestones",
		"=====================================\n",
		`${"Goal".padEnd(20)} ${"Seed".padEnd(20)} Hailstone`,
    "----------------------------------------------------------",
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
			"1,000",
			resultsArray[5].seed,
			resultsArray[5].numberThatHit,
		),
		formHailstoneOutputStr(
			"5,000",
			resultsArray[6].seed,
			resultsArray[6].numberThatHit,
		),
		formHailstoneOutputStr(
			"10,000",
			resultsArray[7].seed,
			resultsArray[7].numberThatHit,
		),
		formHailstoneOutputStr(
			"25,000",
			resultsArray[8].seed,
			resultsArray[8].numberThatHit,
		),
		formHailstoneOutputStr(
			"50,000",
			resultsArray[9].seed,
			resultsArray[9].numberThatHit,
		),
		formHailstoneOutputStr(
			"100,000",
			resultsArray[10].seed,
			resultsArray[10].numberThatHit,
		),
		formHailstoneOutputStr(
			"500,000",
			resultsArray[11].seed,
			resultsArray[11].numberThatHit,
		),
		formHailstoneOutputStr(
			"1,000,000",
			resultsArray[12].seed,
			resultsArray[12].numberThatHit,
		),
		formHailstoneOutputStr(
			"5,000,000",
			resultsArray[13].seed,
			resultsArray[13].numberThatHit,
		),
		formHailstoneOutputStr(
			"10,000,000",
			resultsArray[14].seed,
			resultsArray[14].numberThatHit,
		),
		formHailstoneOutputStr(
			"25,000,000",
			resultsArray[15].seed,
			resultsArray[15].numberThatHit,
		),
		formHailstoneOutputStr(
			"50,000,000",
			resultsArray[16].seed,
			resultsArray[16].numberThatHit,
		),
		formHailstoneOutputStr(
			"100,000,000",
			resultsArray[17].seed,
			resultsArray[17].numberThatHit,
		),
		formHailstoneOutputStr(
			"500,000,000",
			resultsArray[19].seed,
			resultsArray[19].numberThatHit,
		),
		formHailstoneOutputStr(
			"1,000,000,000",
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
