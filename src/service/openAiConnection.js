import ReactGA from 'react-ga';

export async function post(requestURL, model, prompt) {

  return await fetch(requestURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer "+process.env.REACT_APP_OPENAI_API_KEY,
    },

    body: JSON.stringify({
      model: model,
      prompt: prompt
    }),
  })
    .then((response) => { return response.json() })
    .catch((error) => { 
      ReactGA.exception({
        description: `OpenAi request has failed ${error}`,
        fatal: false
      });
    })
}