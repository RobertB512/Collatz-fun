import fs from "node:fs";
// import readline from "node:readline";
import { readFile } from "node:fs/promises";

export const getFileContents = async (path) => {
	const data = (await readFile(path, "utf8"))
		.split("\n")
		.filter((line) => line.trim() !== "")
		.map((seq) => JSON.parse(seq));

	return data;
};
