export const analyzeEachHailstone = async (data) => {
	let leadingDigitCount = [
		{ all: 0, unique: 0 },
		{ all: 0, unique: 0 },
		{ all: 0, unique: 0 },
		{ all: 0, unique: 0 },
		{ all: 0, unique: 0 },
		{ all: 0, unique: 0 },
		{ all: 0, unique: 0 },
		{ all: 0, unique: 0 },
		{ all: 0, unique: 0 },
	];
	let temp = 0;

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
				hailstone % 2 == 0
					? evenAndOddCount[0].unique++
					: evenAndOddCount[1].unique++;
				hailstone % 2 == 0
					? evenAndOddCount[0].all++
					: evenAndOddCount[1].all++;
			} else {
				leadingDigitCount[temp - 1].all++;
				hailstone % 2 == 0
					? evenAndOddCount[0].all++
					: evenAndOddCount[1].all++;
			}
		});
	});

	return {
		ones: [
			leadingDigitCount[0].all.toLocaleString(),
			leadingDigitCount[0].unique.toLocaleString(),
		],
		twos: [
			leadingDigitCount[1].all.toLocaleString(),
			leadingDigitCount[1].unique.toLocaleString(),
		],
		threes: [
			leadingDigitCount[2].all.toLocaleString(),
			leadingDigitCount[2].unique.toLocaleString(),
		],
		fours: [
			leadingDigitCount[3].all.toLocaleString(),
			leadingDigitCount[3].unique.toLocaleString(),
		],
		fives: [
			leadingDigitCount[4].all.toLocaleString(),
			leadingDigitCount[4].unique.toLocaleString(),
		],
		sixes: [
			leadingDigitCount[5].all.toLocaleString(),
			leadingDigitCount[5].unique.toLocaleString(),
		],
		sevens: [
			leadingDigitCount[6].all.toLocaleString(),
			leadingDigitCount[6].unique.toLocaleString(),
		],
		eights: [
			leadingDigitCount[7].all.toLocaleString(),
			leadingDigitCount[7].unique.toLocaleString(),
		],
		nines: [
			leadingDigitCount[8].all.toLocaleString(),
			leadingDigitCount[8].unique.toLocaleString(),
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
