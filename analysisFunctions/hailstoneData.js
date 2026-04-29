export const findLargestHailstone = (collatzArray) => {
	let largestHailstone = 0;
	let hailstoneSeed = 0;

	for (const seq of collatzArray) {
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

export const findFirstToBreakX = (collatzArray, hitPoint) => {
	// This function finds the first hailstone out of all sequences to hit a number.
	// Ex: finds the first number in all sequences combined to hit 1,000, 5,000, 10,000,
	// or any other number. For this project, these hit points will be predetermined.

	// const seqCollection = collatzArray;
	const numberToHit = hitPoint;
	const errorMsg = `error or number to hit ${numberToHit} is TBD.`;

	for (const seqInfo of collatzArray) {
		const hailstoneNumber = seqInfo.hailstoneSeq.find(
			(val) => val >= numberToHit,
		);

		if (hailstoneNumber !== undefined) {
			return {
				numberToHit: numberToHit.toLocaleString(),
				seed: seqInfo.seed.toLocaleString(),
				numberThatHit: hailstoneNumber.toLocaleString(),
			};
		}
	}
	return errorMsg;
};

export const analyzeHailstoneSeq = (collatzArray) => {
	const seqCollection = collatzArray;
	let longestHailstoneSeq = 0;
	let startingSeed;
	let lengthContainer = []; //contains the length of each seq
	let meanSeqLength = 0;
	let squaredDiff = 0;
	let variance = 0;
	let sdOfSeqLength = 0; // the standard deviation of all seq lengths

	// find the longest hailstone seq
	for (const seqInfo of seqCollection) {
		lengthContainer.push(seqInfo.stepCount);

		if (seqInfo.stepCount > longestHailstoneSeq) {
			longestHailstoneSeq = seqInfo.stepCount;
			startingSeed = seqInfo.seed;
		}
	}

	// find the mean seq length
	for (const seqInfo of lengthContainer) {
		meanSeqLength += seqInfo;
	}
	meanSeqLength /= lengthContainer.length;
	meanSeqLength = Math.round(meanSeqLength);

	// find the squared differences from the mean
	squaredDiff = lengthContainer.map((length) => {
		return (length - meanSeqLength) ** 2;
	});

	// find the mean of squared differences (variance)
	for (const value of squaredDiff) {
		variance += value;
	}
	variance /= lengthContainer.length;

	// find standard deviation
	sdOfSeqLength = Math.sqrt(variance).toFixed(2);

	return {
		seed: startingSeed.toLocaleString(),
		longestHailstoneSeq: longestHailstoneSeq.toLocaleString(),
		meanSeqLength: meanSeqLength.toLocaleString(),
		sdOfSeqLength: sdOfSeqLength.toLocaleString(),
	};
};

export const formHailstoneOutputStr = (goal, startSeed, hailstone) => {
	return `${goal}: seed of ${startSeed} | hailstone of ${hailstone}\n`;
};

export const findLongestStraightDrop = (brokenUpSeq) => {
	const seqCollection = [...brokenUpSeq].reverse();
	let originalSeed = 0;
	let longestDrop = 0;

	for (const seqInfo of seqCollection) {
		let seed = seqInfo.seed;
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
