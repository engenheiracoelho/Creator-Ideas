
export async function post() {
  return await fetch(process.env.API_BASE_URL + process.env.ENDPOINT_TEXT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer "+process.env.OPENAI_API_KEY,
    },

    body: JSON.stringify({
      model: process.env.MODEL,
      prompt:  process.env.PROMPT
    }),
  })
    .then((response) => { return response.json() })
    .catch((error) => { console.log("RESPONSE ERROR", error) })
}
