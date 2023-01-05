import React from 'react';
import { act } from '@testing-library/react';
import { shallow } from 'enzyme';
import '../../setupTests';
import BackButton from './index';


describe("BackButtonComponent", () => {

    test('Should render the Back Button with "Return" text', () => {
        const button = shallow(<BackButton />);
        expect(button.text()).toBe('Return');
    });

    test('Should render the Back Button and trigger the goBack function', () => {
        const historyMock = { push: jest.fn(), goBack: jest.fn(), location: {}, listen: jest.fn() };

        const button = shallow(<BackButton history={historyMock} />);
        const { onClick } = button.props();
        act(() => {
            onClick();
        });
        expect(historyMock.goBack).toBeCalled();
    });
});