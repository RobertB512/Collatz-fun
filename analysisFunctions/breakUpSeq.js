export const breakUpSeq = (collatzArray) => {
	const seqCollection = [];

	collatzArray.forEach((seq) => {
		// Get seed
		const lines = seq.split("\n");
		const cleanedLines = lines.filter((val) => val.trim());
		const startLine = cleanedLines[0];
		const startLineParts = startLine.split(" ");
		const seedStr = startLineParts[startLineParts.length - 1].replaceAll(
			",",
			"",
		);
		const seedVal = Number(seedStr);

		// Get hailstone sequnces
		const hailstoneSeq = cleanedLines[1];
		const hailstoneArray = hailstoneSeq.split(" | ");
		const cleanedArray = hailstoneArray.map((val) => {
			const cammasRemoved = val.replaceAll(",", "");
			const numberFormated = Number(cammasRemoved);

			return numberFormated;
		});

		// Get step counts
		const stepsLine = cleanedLines[cleanedLines.length - 2];
		const stepsLineParts = stepsLine.split(" ");
		const stepsStr = stepsLineParts[stepsLineParts.length - 1].replaceAll(
			",",
			"",
		);
		const stepsVal = Number(stepsStr);

		// Get highest hailstone
		const highestHailstoneLine = cleanedLines[cleanedLines.length - 1];
		const highestHailstoneParts = highestHailstoneLine.split(" ");
		const highestHailstoneStr = highestHailstoneParts[
			highestHailstoneParts.length - 1
		].replaceAll(",", "");
		const highestHailstoneVal = Number(highestHailstoneStr);

		seqCollection.push({
			seed: seedVal,
			hailstoneSeq: cleanedArray,
			stepCount: stepsVal,
			highestHailstone: highestHailstoneVal,
		});
	});

	return seqCollection;
};
