export const findLargestHailstone = (seqInfo) => {
	let largestHailstone = 0;
	let hailstoneSeed = 0;

	for (const seq of seqInfo) {
		let currentLargest = seq.highestHailstone;
		let currentSeed = seq.seed;

		if (currentLargest > largestHailstone) {
			largestHailstone = currentLargest;
			hailstoneSeed = currentSeed;
		}
	}

	return {
		seed: hailstoneSeed.toLocaleString(),
		largestHailstone: largestHailstone.toLocaleString(),
	};
};

export const findFirstToBreakX = (seqInfo, hitPoint) => {
	// This function finds the first hailstone out of all sequences to hit a number.
	// Ex: finds the first number in all sequences combined to hit 1,000, 5,000, 10,000,
	// or any other number. For this project, these hit points will be predetermined.

	// const seqCollection = collatzArray;
	const numberToHit = hitPoint;
	const errorMsg = `error or number to hit ${numberToHit} is TBD.`;

	for (const seq of seqInfo) {
		const hailstoneNumber = seq.hailstoneSeq.find(
			(val) => val >= numberToHit,
		);

		if (hailstoneNumber !== undefined) {
			return {
				numberToHit: numberToHit.toLocaleString(),
				seed: seq.seed.toLocaleString(),
				numberThatHit: hailstoneNumber.toLocaleString(),
			};
		}
	}
	return errorMsg;
};

export const analyzeHailstoneSeq = async (seqInfo) => {
	let mostSteps = 0;
	let seed;
	let lengthContainer = []; //contains the length of each seq
	let meanSeqLength = 0;
	let seqTotals = 0; // total of all seq lengths
	let squaredDiff = 0;
	let variance = 0;
	let sdOfSeqLength = 0; // the standard deviation of all seq lengths

	// find longest seq
	for (let seq of seqInfo) {
		if (seq.stepCount > mostSteps) {
			mostSteps = seq.stepCount;
			seed = seq.seed;
		}
	}

	// find mean seq length
	for (let seq of seqInfo) {
    let steps = seq.stepCount;
		lengthContainer.push(steps);
		seqTotals += steps;
	}
	meanSeqLength = (seqTotals / lengthContainer.length).toFixed(2);

	// find squared difference of seq length
	for (let num of lengthContainer) {
		squaredDiff += (num - meanSeqLength) ** 2;
	}


	// find variance of seq length
	variance = squaredDiff / lengthContainer.length;

	// find the pop std of squared differences (variance)
	sdOfSeqLength = Math.sqrt(variance).toFixed(2);

	return {
		seed: seed.toLocaleString(),
		longestHailstoneSeq: mostSteps.toLocaleString(),
		meanSeqLength: meanSeqLength.toLocaleString(),
		sdOfSeqLength: sdOfSeqLength.toLocaleString(),
	};
};

export const findLongestStraightDrop = (seqInfo) => {
	const seqCollection = [...seqInfo].reverse();
	let originalSeed = 0;
	let longestDrop = 0;

	for (const seq of seqInfo) {
		let seed = seq.seed;
		let startingSeed = seed;
		let currentDrop = 0;

		// skip numbers that aren’t divisible by 128, for quickness
		if (seed % 128 !== 0) continue;

		while (seed >= 1 && seed % 2 === 0) {
			seed /= 2;
			currentDrop++;
		}

		if (seed === 1 && currentDrop > longestDrop) {
			longestDrop = currentDrop;
			originalSeed = startingSeed;
		}
	}

	return {
		seed: originalSeed.toLocaleString(),
		dropSteps: longestDrop.toLocaleString(),
	};
};
