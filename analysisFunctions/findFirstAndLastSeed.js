export const findFirstAndLastSeed = (collatzArray) => {
	const firstSeed = collatzArray[0].seed;
	const lastSeed = collatzArray[collatzArray.length - 1].seed;

	return { firstSeed: firstSeed, lastSeed: lastSeed };
};
