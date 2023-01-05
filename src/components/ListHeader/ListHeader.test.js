import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';

import ListHeader from './index';
import { Item } from './styles';

describe('ListHeaderComponent', () => {
    it('Should not render any column in the ListHeader', () => {
        const list = shallow(<ListHeader columns={[]} />);
        expect(list.find(Item).length).toBe(0);
    });
    it('Should render the ListHeader with one Column', () => {
        const list = shallow(<ListHeader columns={["Test"]} />);
        expect(list.find(Item).length).toBe(1);
        expect(list.find(Item).dive().text()).toBe("Test");
    });
    it('Should render the ListHeader with three Columns', () => {
        const list = shallow(<ListHeader columns={["Test", "Test 1", "Test 2"]} />);
        expect(list.find(Item).length).toBe(3);
        expect(list.find(Item).at(0).dive().text()).toBe("Test");
        expect(list.find(Item).at(1).dive().text()).toBe("Test 1");
        expect(list.find(Item).at(2).dive().text()).toBe("Test 2");
    });
});

