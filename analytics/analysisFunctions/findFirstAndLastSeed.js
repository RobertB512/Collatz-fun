export const findFirstAndLastSeed = async (seqInfo) => {
	const firstSeed = seqInfo[0].seed;
	const lastSeed = seqInfo[seqInfo.length - 1].seed;

	return {
		firstSeed: firstSeed.toLocaleString(),
		lastSeed: lastSeed.toLocaleString(),
	};
};
