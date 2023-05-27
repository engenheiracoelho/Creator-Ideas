
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
  const prompt="Do not do comments about your response, do not write any different orientation, just return 5 ideas for a content creator, that creates on " + contentType + " with the recommendations: "+keywords

  try {
      const requestTextResponse = await post(prompt)
      return requestTextResponse.choices[0].text.trim()
  } catch (error) {
    console.error(`Error whe request: ${error}`);
  }
}