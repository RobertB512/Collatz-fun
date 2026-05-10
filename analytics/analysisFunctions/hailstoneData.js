export const analyzeEachHailstone = async (data) => {
	// for frequency distribution
	let onesCount = 0;
	let twosCount = 0;
	let threesCount = 0;
	let foursCount = 0;
	let fivesCount = 0;
	let sixesCount = 0;
	let sevensCount = 0;
	let eightsCount = 0;
	let ninesCount = 0;
	let temp = 0;

	// for even and odd counts
	let evenHailstonesRepeated = 0;
	let oddHailstonesRepeated = 0;
	let evenHailstonesNoRepeat = 0;
	let oddHailstonesNoRepeat = 0;
	let hailstonesSeen = new Set();

	data.forEach((seq) => {
		seq.hailstoneSeq.forEach((hailstone) => {
			if (!hailstonesSeen.has(hailstone)) {
				hailstonesSeen.add(hailstone);
				hailstone % 2 == 0 ? evenHailstonesNoRepeat++ : oddHailstonesNoRepeat++;
				hailstone % 2 == 0 ? evenHailstonesRepeated++ : oddHailstonesRepeated++;
			} else {
				hailstone % 2 == 0 ? evenHailstonesRepeated++ : oddHailstonesRepeated++;
			}

			if (hailstone % 2 == 0) {
			}
			temp = hailstone;

			while (temp >= 10) {
				temp = Math.floor(temp / 10);
			}

			switch (temp) {
				case 1:
					onesCount++;
					break;
				case 2:
					twosCount++;
					break;
				case 3:
					threesCount++;
					break;
				case 4:
					foursCount++;
					break;
				case 5:
					fivesCount++;
					break;
				case 6:
					sixesCount++;
					break;
				case 7:
					sevensCount++;
					break;
				case 8:
					eightsCount++;
					break;
				case 9:
					ninesCount++;
					break;
			}
		});
	});

	return {
		ones: onesCount.toLocaleString(),
		twos: twosCount.toLocaleString(),
		threes: threesCount.toLocaleString(),
		fours: foursCount.toLocaleString(),
		fives: fivesCount.toLocaleString(),
		sixes: sixesCount.toLocaleString(),
		sevens: sevensCount.toLocaleString(),
		eights: eightsCount.toLocaleString(),
		nines: ninesCount.toLocaleString(),
		evenHailstonesRepeated: evenHailstonesRepeated.toLocaleString(),
		oddHailstonesRepeated: oddHailstonesRepeated.toLocaleString(),
		evenHailstonesNoRepeat: evenHailstonesNoRepeat.toLocaleString(),
		oddHailstonesNoRepeat: oddHailstonesNoRepeat.toLocaleString(),
	};
};
