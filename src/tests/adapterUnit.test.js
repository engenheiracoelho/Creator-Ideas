import { requestOpenAi } from '../anti_corruption_layer/adapter.js';
import { post } from '../service/openAiConnection.js';

jest.mock('../service/openAiConnection.js', () => {
    return {
        post: jest.fn(),
    };
})

describe('OpenAiConnection method', () => {
    it('Verify if the post method was called on the execution', () => {
        requestOpenAi()
        expect(post).toBeCalled();
    })
})
