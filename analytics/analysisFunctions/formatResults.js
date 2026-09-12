// import { formHailstoneOutputStr } from "./hailstoneData.js";

const formHailstoneOutputStr = (goal, startSeed, hailstone) => {
	return `${goal.padEnd(20)} ${startSeed.padEnd(15)} ${hailstone}`;
};

const formatBenfordsData = (
	leadingDigit,
	totalCount,
	totalFreq,
	uniqueCount,
	uniqueFreq,
) => {
	return `${leadingDigit.padEnd(17)} ${totalCount.padEnd(15)} ${(totalFreq + " %").padEnd(12)} ${uniqueCount.padEnd(12)} ${uniqueFreq + " %"}`;
};

const formatStatsData = (numOfStepCounts, mean, median, sd) => {
	return `${numOfStepCounts.padEnd(15)} ${mean.padEnd(10)} ${median.padEnd(10)} ${sd}`;
};

export const formatResults = (results) => {
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
		`Seed Range`,
		`-----------------------------------`,
		`${"First Seed Tested:".padEnd(20)} ${results.firstAndLastSeed.firstSeed}`,
		`${"Last Seed Tested:".padEnd(20)} ${results.firstAndLastSeed.lastSeed}\n\n`,
		"Total Hailstones",
		"-------------------",
		`${"All:".padEnd(10)} ${results.hailstoneData.totalHailstones}`,
		`${"Unique:".padEnd(10)} ${results.hailstoneData.totalUniqueHailstones}\n\n`,
		`Largest Hailstone`,
		`---------------------------------`,
		`${"Seed:".padEnd(15)} ${results.largestHailstone.seed}`,
		`${"Hailstone:".padEnd(15)} ${results.largestHailstone.largestHailstone}\n\n`,
		`Longest Hailstone Sequence`,
		`---------------------------------`,
		`${"Seed:".padEnd(15)} ${results.seqLengthStats.seed}`,
		`${"Step Count:".padEnd(15)} ${results.seqLengthStats.longestHailstoneSeq}\n\n`,
		`Longest Straight Drop`,
		`--------------------------`,
		`${"Seed:".padEnd(15)} ${results.longestStraightDrop.seed}`,
		`${"Step Count:".padEnd(15)} ${results.longestStraightDrop.dropSteps}\n\n`,
		`Largest Difference Between A Seed And Its Highest Hailstone`,
		`----------------------------------------------------------------`,
		`${"Difference:".padEnd(15)} ${results.largestPropDiff.difference} %`,
		`${"Seed:".padEnd(15)} ${results.largestPropDiff.seed}`,
		`${"Hailstone:".padEnd(15)} ${results.largestPropDiff.hailstone}\n\n`,
		"Even And Odd Hailstone Counts",
		`-------------------------------------------------`,
		`${"Type".padEnd(10)} ${"All".padEnd(15)} ${"Unique".padEnd(10)}`,
		"-------------------------------------------",
		`${"Evens".padEnd(10)} ${results.hailstoneData.evenHailstoneCount.all.padEnd(15)} ${results.hailstoneData.evenHailstoneCount.unique}`,
		`${"Odds".padEnd(10)} ${results.hailstoneData.oddHailstoneCount.all.padEnd(15)} ${results.hailstoneData.oddHailstoneCount.unique}`,
	].join("\n");

	benfordsData = [
		"=====================",
		"Benford's Law Data",
		"=====================\n",
		`${"Leading Digit".padEnd(17)} ${"All".padEnd(15)} ${"All %".padEnd(12)} ${"Unique".padEnd(12)} Unique %`,
		"---------------------------------------------------------------------------",
		formatBenfordsData(
			"Ones",
			results.hailstoneData.ones.all,
			results.hailstoneData.ones.allFreq,
			results.hailstoneData.ones.unique,
			results.hailstoneData.ones.uniqueFreq,
		),
		formatBenfordsData(
			"Twos",
			results.hailstoneData.twos.all,
			results.hailstoneData.twos.allFreq,
			results.hailstoneData.twos.unique,
			results.hailstoneData.twos.uniqueFreq,
		),
		formatBenfordsData(
			"Threes",
			results.hailstoneData.threes.all,
			results.hailstoneData.threes.allFreq,
			results.hailstoneData.threes.unique,
			results.hailstoneData.threes.uniqueFreq,
		),
		formatBenfordsData(
			"Fours",
			results.hailstoneData.fours.all,
			results.hailstoneData.fours.allFreq,
			results.hailstoneData.fours.unique,
			results.hailstoneData.fours.uniqueFreq,
		),
		formatBenfordsData(
			"Fives",
			results.hailstoneData.fives.all,
			results.hailstoneData.fives.allFreq,
			results.hailstoneData.fives.unique,
			results.hailstoneData.fives.uniqueFreq,
		),
		formatBenfordsData(
			"Sixes",
			results.hailstoneData.sixes.all,
			results.hailstoneData.sixes.allFreq,
			results.hailstoneData.sixes.unique,
			results.hailstoneData.sixes.uniqueFreq,
		),
		formatBenfordsData(
			"Sevens",
			results.hailstoneData.sevens.all,
			results.hailstoneData.sevens.allFreq,
			results.hailstoneData.sevens.unique,
			results.hailstoneData.sevens.uniqueFreq,
		),
		formatBenfordsData(
			"Eights",
			results.hailstoneData.eights.all,
			results.hailstoneData.eights.allFreq,
			results.hailstoneData.eights.unique,
			results.hailstoneData.eights.uniqueFreq,
		),
		formatBenfordsData(
			"Nines",
			results.hailstoneData.nines.all,
			results.hailstoneData.nines.allFreq,
			results.hailstoneData.nines.unique,
			results.hailstoneData.nines.uniqueFreq,
		),
	].join("\n");

	hailstoneStats = [
		"================================",
		"Stats Of First X Step Counts",
		"================================\n",
    `${"Step Count".padEnd(15)} ${"Mean".padEnd(10)} ${"Median".padEnd(10)} SD`,
    "------------------------------------------------",
    formatStatsData(
			"100",
			results.seqLengthStats.meanOfFst100,
			results.seqLengthStats.medOfFst100,
			results.seqLengthStats.sdOfFst100,
		),
		formatStatsData(
			"1,000",
			results.seqLengthStats.meanOfFst1Th,
			results.seqLengthStats.medOfFst1Th,
			results.seqLengthStats.sdOfFst1Th,
		),
		formatStatsData(
			"10,000",
			results.seqLengthStats.meanOfFst10Th,
			results.seqLengthStats.medOfFst10Th,
			results.seqLengthStats.sdOfFst10Th,
		),
		formatStatsData(
			"All",
			results.seqLengthStats.meanSeqLength,
			results.seqLengthStats.medSeqLength,
			results.seqLengthStats.sdOfSeqLength,
		),
	].join("\n");

	hailstoneMilestones = [
		"=====================================",
		"First Hailstone To Hit Milestones",
		"=====================================\n",
		`${"Goal".padEnd(20)} ${"Seed".padEnd(15)} Hailstone`,
		"-----------------------------------------------------",
		formHailstoneOutputStr(
			"100",
			results.milestoneResults.firstToBreak100.seed,
			results.milestoneResults.firstToBreak100.numberThatHit,
		),
		formHailstoneOutputStr(
			"500",
			results.milestoneResults.firstToBreak500.seed,
			results.milestoneResults.firstToBreak500.numberThatHit,
		),
		formHailstoneOutputStr(
			"1,000",
			results.milestoneResults.firstToBreak1Th.seed,
			results.milestoneResults.firstToBreak1Th.numberThatHit,
		),
		formHailstoneOutputStr(
			"5,000",
			results.milestoneResults.firstToBreak5Th.seed,
			results.milestoneResults.firstToBreak5Th.numberThatHit,
		),
		formHailstoneOutputStr(
			"10,000",
			results.milestoneResults.firstToBreak10Th.seed,
			results.milestoneResults.firstToBreak10Th.numberThatHit,
		),
		formHailstoneOutputStr(
			"25,000",
			results.milestoneResults.firstToBreak25Th.seed,
			results.milestoneResults.firstToBreak25Th.numberThatHit,
		),
		formHailstoneOutputStr(
			"50,000",
			results.milestoneResults.firstToBreak50Th.seed,
			results.milestoneResults.firstToBreak50Th.numberThatHit,
		),
		formHailstoneOutputStr(
			"100,000",
			results.milestoneResults.firstToBreak100Th.seed,
			results.milestoneResults.firstToBreak100Th.numberThatHit,
		),
		formHailstoneOutputStr(
			"500,000",
			results.milestoneResults.firstToBreak500Th.seed,
			results.milestoneResults.firstToBreak500Th.numberThatHit,
		),
		formHailstoneOutputStr(
			"1,000,000",
			results.milestoneResults.firstToBreak1M.seed,
			results.milestoneResults.firstToBreak1M.numberThatHit,
			results.milestoneResults.firstToBreak1M.numberThatHit,
		),
		formHailstoneOutputStr(
			"5,000,000",
			results.milestoneResults.firstToBreak5M.seed,
			results.milestoneResults.firstToBreak5M.numberThatHit,
		),
		formHailstoneOutputStr(
			"10,000,000",
			results.milestoneResults.firstToBreak10M.seed,
			results.milestoneResults.firstToBreak10M.numberThatHit,
		),
		formHailstoneOutputStr(
			"25,000,000",
			results.milestoneResults.firstToBreak25M.seed,
			results.milestoneResults.firstToBreak25M.numberThatHit,
		),
		formHailstoneOutputStr(
			"50,000,000",
			results.milestoneResults.firstToBreak50M.seed,
			results.milestoneResults.firstToBreak50M.numberThatHit,
		),
		formHailstoneOutputStr(
			"100,000,000",
			results.milestoneResults.firstToBreak100M.seed,
			results.milestoneResults.firstToBreak100M.numberThatHit,
		),
		formHailstoneOutputStr(
			"500,000,000",
			results.milestoneResults.firstToBreak500M.seed,
			results.milestoneResults.firstToBreak500M.numberThatHit,
		),
		formHailstoneOutputStr(
			"1,000,000,000",
			results.milestoneResults.firstToBreak1B.seed,
			results.milestoneResults.firstToBreak1B.numberThatHit,
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
