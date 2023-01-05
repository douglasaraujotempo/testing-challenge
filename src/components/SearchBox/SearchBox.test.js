import React from 'react';
import { act } from '@testing-library/react';
import { shallow } from 'enzyme';
import '../../setupTests';

import SearchBox from './index';
import { SearchInput } from './styles'

describe("SearchBoxComponent", () => {

    test('Should not render the SearchBox', () => {
        const input = shallow(<SearchBox showSearch={false}/>);
        expect(input.prop("searchVisible")).toBeFalsy();
    });
    test('Should render the SearchBox with initial value', () => {
        const input = shallow(<SearchBox />);
        expect(input.find(SearchInput).dive().prop("value")).toBe("");
    });
    test('Should render the SearchBox with default value', () => {
        const input = shallow(<SearchBox showSearch={true} search="Test" />);
        expect(input.find(SearchInput).dive().prop("value")).toBe('Test');
    });
    test('Should trigger the SearchBox onChange event', () => {
        const setSearch = jest.fn();
        const input = shallow(<SearchBox showSearch={true} setSearch={setSearch} />);
        const { onChange } = input.find(SearchInput).dive().props();
        act(() => {
            onChange({ target: { value: 'test' } })
        })

        expect(setSearch).toBeCalledWith("test");
    });


});