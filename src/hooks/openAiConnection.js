
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

export async function requestContentIdeas(keywords, contentType) {
  var requestTextResponse;
  try {
      requestTextResponse = await post(keywords, contentType)
      return requestTextResponse.choices[0].text.trim()
  } catch (error) {
    console.error(`Error whe request: ${requestTextResponse}`);
  }
}