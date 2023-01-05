import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';

import { act } from '@testing-library/react';

import ListRow from './index';
import { Item } from './styles';

describe('ListRowComponent', () => {
    it('Should not render any item in the ListRow', () => {
        const list = shallow(<ListRow columnsData={[]} />);
        expect(list.find(Item).length).toBe(0);
    });
    it('Should render the ListRow with one item', () => {
        const list = shallow(<ListRow data={{ name: 'Test' }} columnsData={['name']} />);
        expect(list.find(Item).length).toBe(1);
        expect(list.find(Item).dive().text()).toBe("Test");
    });
    it('Should render the ListRow with three items', () => {
        const list = shallow(<ListRow data={{ name: 'Test 1', age: '99', user: 'test1User', location: 'BR' }} columnsData={["name", "age", "user"]} />);
        expect(list.find(Item).length).toBe(3);
        expect(list.find(Item).at(0).dive().text()).toBe("Test 1");
        expect(list.find(Item).at(1).dive().text()).toBe("99");
        expect(list.find(Item).at(2).dive().text()).toBe("test1User");
    });
    it('Should trigger the ListRow click', () => {
        const onClickMock = jest.fn();
        const list = shallow(<ListRow data={{ name: 'Test 1' }} columnsData={["name"]} onClick={onClickMock} />);
        const { onClick } = list.props();
        act(() => {
            onClick();
        });
        expect(onClickMock).toBeCalled();
    });
});

