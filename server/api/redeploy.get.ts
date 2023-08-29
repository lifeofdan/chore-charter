import { readFile } from "fs/promises";

export default defineEventHandler(async (event) => {
  setResponseStatus(event, 200);
  const redeployStatus = await readFile("./should_redeploy.txt");
  return redeployStatus;
});
