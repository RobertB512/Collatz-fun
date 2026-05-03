export const findFirstAndLastSeed = async (seqObj) => {
	const firstSeed = seqObj[0].seed;
	const lastSeed = seqObj[seqObj.length - 1].seed;

	return {
		firstSeed: firstSeed.toLocaleString(),
		lastSeed: lastSeed.toLocaleString(),
	};
};
