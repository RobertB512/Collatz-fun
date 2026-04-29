import fs from "node:fs";
import { readFile } from "node:fs";

export const getFileContents = async (path) => {
	const data = await fs.promises.readFile(path, "utf8");
	const sections = data.split("------------------------------");
	const collatzSeq = sections;
	return collatzSeq;
};
