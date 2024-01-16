import { post } from '../service/openAiConnection.js'

export async function requestOpenAi (prompt) {
    const requestURL = process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_ENDPOINT_TEXT
    const model = process.env.REACT_APP_MODEL

    return await post(requestURL, model, prompt);
}
