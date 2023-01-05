import React from 'react';
import { shallow } from 'enzyme';
import { act } from '@testing-library/react';
import '../../setupTests';
import List from './index';
import { EmptyMessage } from './styles';
import ListRow from '../../components/ListRow';

describe('ListComponent', () => {
    beforeEach(() => {
        jest.spyOn(React, "useEffect").mockImplementationOnce(f => f());
    })
    it('Should not render the List', () => {
        const list = shallow(<List data={[]} />);
        expect(list.find(ListRow).length).toBe(0);
        expect(list.find(EmptyMessage).dive().text()).toBe("No items found");
    });
    it('Should render the List with one line', () => {
        const list = shallow(<List data={[{ name: "Test" }]} />);
        expect(list.find(ListRow).length).toBe(1);
        expect(list.find(ListRow).dive().text()).toBe("Test");
    });
    it('Should render the List with three lines', () => {
        const list = shallow(<List data={[{ name: "Test" }, { name: "Test 1" }, { name: "Test 2" }]} />);
        expect(list.find(ListRow).length).toBe(3);
        expect(list.find(ListRow).at(0).dive().text()).toBe("Test");
        expect(list.find(ListRow).at(1).dive().text()).toBe("Test 1");
        expect(list.find(ListRow).at(2).dive().text()).toBe("Test 2");
    });
    it('Should render the list with filtered items', () => {
        const list = shallow(<List data={[{ name: "Test 2" }, { name: "Test 1" }, { name: "Test 11" }]} search="Test 1" />);
        expect(list.find(ListRow).length).toBe(2);
        expect(list.find(ListRow).at(0).dive().text()).toBe("Test 1");
        expect(list.find(ListRow).at(1).dive().text()).toBe("Test 11");
    });
    it('Should navigate to page when click row', () => {
        const historyMock = { push: jest.fn(), goBack: jest.fn(), location: {}, listen: jest.fn() };

        const list = shallow(<List history={historyMock} data={[{ name: "Test", id: "123" }]} navigateTo="test" />);
        expect(list.find(ListRow).length).toBe(1);
        const { onClick } = list.find(ListRow).dive().props();
        act(() => {
            onClick();
        });
        expect(historyMock.push).toBeCalledWith('/test/123');

    });
});

