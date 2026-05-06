const findMedianLength = (arr) => {
	let median = 0;
  let index = 0;

	arr.sort((a, b) => a - b);
	if (arr.length % 2 == 0) {
		index = arr.length / 2;
		return (median = ((arr[index] + arr[index - 1]) / 2).toFixed(2));
	} else if (arr.length % 2 == 1) {
		index = math.floor(arr.length / 2);
		return (median = arr[index]);
	}
};

const findMeanLength = (arr) => {
	let total = 0;

	for (let x of arr) {
		total += x;
	}

	return (total / arr.length).toFixed(2);
};

const findSdLength = (arr, mean) => {
	let variance = 0;
	let squaredDiff = 0;
	let sdOfSeqLength = 0;

	// find squared difference of seq length
	for (let num of arr) {
		squaredDiff += (num - mean) ** 2;
	}

	// find variance of seq length
	variance = squaredDiff / arr.length;

	// find the pop std of squared differences (variance)
	return (sdOfSeqLength = Math.sqrt(variance).toFixed(2));
};

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
		const hailstoneNumber = seq.hailstoneSeq.find((val) => val >= numberToHit);

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
	// for function vars
  let mostSteps = 0;
	let seed;
	let lengthContainer = []; //contains the length of each seq
	let fst100Seq = [];

  // stats for all seqs
	let sdOfSeqLength = 0; // the standard deviation of all seq lengths
	let meanSeqLength = 0;
	let medSeqLength = 0;

  // stats for first 100 seqs
	let sdOfFst100 = 0;
	let meanOfFst100 = 0;
	let medOfFst100 = 0;

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
	}
	fst100Seq = lengthContainer.slice(0, 100);

	meanSeqLength = findMeanLength(lengthContainer);
	meanOfFst100 = findMeanLength(fst100Seq);

	// find median seq length
	medSeqLength = findMedianLength(lengthContainer);
	medOfFst100 = findMedianLength(fst100Seq);

	// Find standard deviation of seq length
	sdOfSeqLength = findSdLength(lengthContainer, meanSeqLength);
	sdOfFst100 = findSdLength(fst100Seq, meanOfFst100);

	return {
		seed: seed.toLocaleString(),
		longestHailstoneSeq: mostSteps.toLocaleString(),
		meanSeqLength: meanSeqLength.toLocaleString(),
		medSeqLength: medSeqLength.toLocaleString(),
		sdOfSeqLength: sdOfSeqLength.toLocaleString(),
		meanOfFst100: meanOfFst100,
		medOfFst100: medOfFst100.toLocaleString(),
		sdOfFst100: sdOfFst100.toLocaleString(),
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
