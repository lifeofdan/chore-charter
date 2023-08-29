import { writeFile } from "fs";

export default defineEventHandler(async (event) => {
  const query = getQuery(event) as { key: string };

  setResponseStatus(event, 403);

  let response = {
    state: "fail",
    description: "redeploy failed",
    context: "Continuous integration by chore-charter",
    target_url: "https://chore-charter.com/api/redeploy",
  };

  if (query.key === process.env.REDEPLOY_SECRET) {
    setResponseStatus(event, 200);

    writeFile("./should_redeploy.txt", "true", (err) => {
      if (err) throw `Could not update re-deploy status: ${err}`;
    });

    response = {
      state: "success",
      description: "redeploy succeeded",
      context: "Continuous integration by chore-charter",
      target_url: "https://chore-charter.com/api/redeploy",
    };
  }

  return { server_response: response };
});
