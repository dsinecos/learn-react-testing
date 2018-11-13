import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
})

afterEach(() => {
    wrapped.unmount();
})

it('renders textarea and button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
})

describe('the text area', () => {

    beforeEach(() => {
        wrapped
            .find('textarea')
            .simulate('change', {
                target: {
                    value: 'new comment'
                }
            })

        wrapped.update();
    })

    it('allows user to input in textarea', () => {
        expect(
            wrapped
                .find('textarea')
                .prop('value')
        ).toEqual('new comment');
    })

    it('empties textarea after data is submitted', () => {
        expect(
            wrapped
                .find('textarea')
                .prop('value')
        ).toEqual('new comment');

        wrapped
            .find('form')
            .simulate('submit')

        expect(
            wrapped
                .update()
                .find('textarea')
                .prop('value')
        ).toEqual('');
    })
})
