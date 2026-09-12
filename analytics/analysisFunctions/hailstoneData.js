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
	let evenAndOddCount = {
		evens: { all: 0, unique: 0 }, 
		odds: { all: 0, unique: 0 }, 
  };

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
        if (hailstone % 2 == 0) {
          evenAndOddCount.evens.unique++
          evenAndOddCount.evens.all++
        } else {
          evenAndOddCount.odds.unique++;
          evenAndOddCount.odds.all++;
        }
			} else {
				leadingDigitCount[temp - 1].all++;
        totalHailstones++;
        if (hailstone % 2 == 0) {
          evenAndOddCount.evens.all++
        } else {
          evenAndOddCount.odds.all++;
        }
			}
		});
	});

  leadingDigitCount.forEach((digit) => {
		digit.percentFreqOfAll = ((digit.all / totalHailstones) * 100).toFixed(2);
		digit.percentFreqOfUnique = ((digit.unique / totalUniqueHailstones) * 100).toFixed(2);
	});

	return {
    totalHailstones: totalHailstones.toLocaleString(),
    totalUniqueHailstones: totalUniqueHailstones.toLocaleString(),
		ones: {
			all: leadingDigitCount[0].all.toLocaleString(),
			allFreq:leadingDigitCount[0].percentFreqOfAll,
			unique: leadingDigitCount[0].unique.toLocaleString(),
			uniqueFreq: leadingDigitCount[0].percentFreqOfUnique,
    },
		twos: {
			all: leadingDigitCount[1].all.toLocaleString(),
			allFreq: leadingDigitCount[1].percentFreqOfAll,
			unique: leadingDigitCount[1].unique.toLocaleString(),
			uniqueFreq: leadingDigitCount[1].percentFreqOfUnique,
    },
		threes: {
			all: leadingDigitCount[2].all.toLocaleString(),
			allFreq: leadingDigitCount[2].percentFreqOfAll,
			unique: leadingDigitCount[2].unique.toLocaleString(),
			uniqueFreq: leadingDigitCount[2].percentFreqOfUnique,
		},
		fours: {
			all: leadingDigitCount[3].all.toLocaleString(),
			allFreq: leadingDigitCount[3].percentFreqOfAll,
			unique: leadingDigitCount[3].unique.toLocaleString(),
			uniqueFreq: leadingDigitCount[3].percentFreqOfUnique,
		},
		fives: {
			all: leadingDigitCount[4].all.toLocaleString(),
			allFreq: leadingDigitCount[4].percentFreqOfAll,
			unique: leadingDigitCount[4].unique.toLocaleString(),
			uniqueFreq: leadingDigitCount[4].percentFreqOfUnique,
		},
		sixes: {
			all: leadingDigitCount[5].all.toLocaleString(),
			allFreq: leadingDigitCount[5].percentFreqOfAll,
			unique: leadingDigitCount[5].unique.toLocaleString(),
			uniqueFreq: leadingDigitCount[5].percentFreqOfUnique,
		},
		sevens: {
			all: leadingDigitCount[6].all.toLocaleString(),
			allFreq: leadingDigitCount[6].percentFreqOfAll,
			unique: leadingDigitCount[6].unique.toLocaleString(),
			uniqueFreq: leadingDigitCount[6].percentFreqOfUnique,
		},
		eights: {
			all: leadingDigitCount[7].all.toLocaleString(),
			allFreq: leadingDigitCount[7].percentFreqOfAll,
			unique: leadingDigitCount[7].unique.toLocaleString(),
			uniqueFreq: leadingDigitCount[7].percentFreqOfUnique,
		},
		nines: {
			all: leadingDigitCount[8].all.toLocaleString(),
			allFreq: leadingDigitCount[8].percentFreqOfAll,
			unique: leadingDigitCount[8].unique.toLocaleString(),
			uniqueFreq: leadingDigitCount[8].percentFreqOfUnique,
		},
		evenHailstoneCount: {
			all: evenAndOddCount.evens.all.toLocaleString(),
			unique: evenAndOddCount.evens.unique.toLocaleString(),
    },
		oddHailstoneCount: {
			all: evenAndOddCount.odds.all.toLocaleString(),
			unique: evenAndOddCount.odds.unique.toLocaleString(),
		},
	};
};
