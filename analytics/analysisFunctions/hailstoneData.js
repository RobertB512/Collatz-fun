export const analyzeEachHailstone = async (data) => {
	// for leading digit counts
  let leadingDigitCount = [
		{ all: 0, percentFreqOfAll: 0, unique: 0, percentFreqOfUnique: 0 },
		{ all: 0, percentFreqOfAll: 0, unique: 0, percentFreqOfUnique: 0 },
		{ all: 0, percentFreqOfAll: 0, unique: 0, percentFreqOfUnique: 0 },
		{ all: 0, percentFreqOfAll: 0, unique: 0, percentFreqOfUnique: 0 },
		{ all: 0, percentFreqOfAll: 0, unique: 0, percentFreqOfUnique: 0 },
		{ all: 0, percentFreqOfAll: 0, unique: 0, percentFreqOfUnique: 0 },
		{ all: 0, percentFreqOfAll: 0, unique: 0, percentFreqOfUnique: 0 },
		{ all: 0, percentFreqOfAll: 0, unique: 0, percentFreqOfUnique: 0 },
		{ all: 0, percentFreqOfAll: 0, unique: 0, percentFreqOfUnique: 0 },
	];
	let temp = 0;
  let totalHailstones = 0;
  let totalUniqueHailstones = 0;

	// multi purpose
	let hailstonesSeen = new Set();

	// for even and odd counts
	let evenAndOddCount = [
		{ all: 0, unique: 0 }, // evens
		{ all: 0, unique: 0 }, // odds
	];

	// the main logic
	data.forEach((seq) => {
		seq.hailstoneSeq.forEach((hailstone) => {
			temp = hailstone;

			while (temp >= 10) {
				temp = Math.floor(temp / 10);
			}

			if (!hailstonesSeen.has(hailstone)) {
				hailstonesSeen.add(hailstone);
				leadingDigitCount[temp - 1].all++;
				leadingDigitCount[temp - 1].unique++;
        totalHailstones++;
        totalUniqueHailstones++;
				hailstone % 2 == 0
					? evenAndOddCount[0].unique++
					: evenAndOddCount[1].unique++;
				hailstone % 2 == 0
					? evenAndOddCount[0].all++
					: evenAndOddCount[1].all++;
			} else {
				leadingDigitCount[temp - 1].all++;
        totalHailstones++;
				hailstone % 2 == 0
					? evenAndOddCount[0].all++
					: evenAndOddCount[1].all++;
			}
		});
	});

  leadingDigitCount.forEach((digit) => {
		digit.percentFreqOfAll = ((digit.all / totalHailstones) * 100).toFixed(2);
		digit.percentFreqOfUnique = ((digit.unique / totalUniqueHailstones) * 100).toFixed(2);
	});

	return {
		ones: [
			leadingDigitCount[0].all.toLocaleString(),
			leadingDigitCount[0].percentFreqOfAll,
			leadingDigitCount[0].unique.toLocaleString(),
			leadingDigitCount[0].percentFreqOfUnique,
		],
		twos: [
			leadingDigitCount[1].all.toLocaleString(),
			leadingDigitCount[1].percentFreqOfAll,
			leadingDigitCount[1].unique.toLocaleString(),
			leadingDigitCount[1].percentFreqOfUnique,
		],
		threes: [
			leadingDigitCount[2].all.toLocaleString(),
			leadingDigitCount[2].percentFreqOfAll,
			leadingDigitCount[2].unique.toLocaleString(),
			leadingDigitCount[2].percentFreqOfUnique,
		],
		fours: [
			leadingDigitCount[3].all.toLocaleString(),
			leadingDigitCount[3].percentFreqOfAll,
			leadingDigitCount[3].unique.toLocaleString(),
			leadingDigitCount[3].percentFreqOfUnique,
		],
		fives: [
			leadingDigitCount[4].all.toLocaleString(),
			leadingDigitCount[4].percentFreqOfAll,
			leadingDigitCount[4].unique.toLocaleString(),
			leadingDigitCount[4].percentFreqOfUnique,
		],
		sixes: [
			leadingDigitCount[5].all.toLocaleString(),
			leadingDigitCount[5].percentFreqOfAll,
			leadingDigitCount[5].unique.toLocaleString(),
			leadingDigitCount[5].percentFreqOfUnique,
		],
		sevens: [
			leadingDigitCount[6].all.toLocaleString(),
			leadingDigitCount[6].percentFreqOfAll,
			leadingDigitCount[6].unique.toLocaleString(),
			leadingDigitCount[6].percentFreqOfUnique,
		],
		eights: [
			leadingDigitCount[7].all.toLocaleString(),
			leadingDigitCount[7].percentFreqOfAll,
			leadingDigitCount[7].unique.toLocaleString(),
			leadingDigitCount[7].percentFreqOfUnique,
		],
		nines: [
			leadingDigitCount[8].all.toLocaleString(),
			leadingDigitCount[8].percentFreqOfAll,
			leadingDigitCount[8].unique.toLocaleString(),
			leadingDigitCount[8].percentFreqOfUnique,
		],
		evenHailstoneCount: [
			evenAndOddCount[0].all.toLocaleString(),
			evenAndOddCount[0].unique.toLocaleString(),
		],
		oddHailstoneCount: [
			evenAndOddCount[1].all.toLocaleString(),
			evenAndOddCount[1].unique.toLocaleString(),
		],
	};
};
