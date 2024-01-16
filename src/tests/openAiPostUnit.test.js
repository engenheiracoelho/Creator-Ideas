import { post } from '../service/openAiConnection.js';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

describe('Post OpenAi method', () => {
    it('Verify if the post method was called on the execution', () => {
        post()
        expect(fetch).toBeCalled();
    })
})