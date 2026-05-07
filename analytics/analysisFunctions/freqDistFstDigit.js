export const freqDistFstDigit = async (data) => {
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

	data.forEach((seq) => {
		seq.hailstoneSeq.forEach((hailstone) => {
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
	};
};
