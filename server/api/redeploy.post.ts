export default defineEventHandler(async (event) => {
  const query = getQuery(event) as { key: string };

  let response = {
    state: "fail",
    description: "redeploy failed",
    context: "Continuous integration by chore-charter",
    target_url: "https://chore-charter.com/api/redeploy",
  };

  if (query.key === process.env.REDEPLOY_SECRET) {
    response = {
      state: "success",
      description: "redeploy succeeded",
      context: "Continuous integration by chore-charter",
      target_url: "https://chore-charter.com/api/redeploy",
    };
  }

  return response;
});
