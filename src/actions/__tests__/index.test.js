import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types.js';

describe('saveComment', function () {
    it('has the correct type', function () {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    })

    it('has the correct payload', function () {
        const action = saveComment('New Comment');

        expect(action.payload).toEqual('New Comment');

    })
})