import { readFile } from "fs/promises";

export default defineEventHandler(async (event) => {
  try {
    const fileContents = await readFile("./should_redeploy.txt");
    return fileContents;
  } catch (error) {
    return "false";
  }
});
