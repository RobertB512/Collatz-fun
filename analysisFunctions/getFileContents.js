import fs from "node:fs";
import readline from "node:readline";

export const getFileContents = async (path) => {
	// const data = await fs.promises.readFile(path, "utf8");
	// const sections = data.split("------------------------------");
	// const collatzSeq = sections;
	// return collatzSeq;

	const stream = fs.createReadStream(path);

	const rl = readline.createInterface({
		input: stream,
		crlfDelay: Infinity,
	});

	// const state = {
	// 	lastSeed: null,
	// 	// anything else shared across functions
	// };

	for await (const line of rl) {
		if (!line.trim()) continue;

		const obj = JSON.parse(line);

		console.log(obj);

		// processObject(obj, state);

		// state.lastSeed = obj.seed;

		// console.log(state);
	}
};
