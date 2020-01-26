import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

import toJson from 'enzyme-to-json';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }

    wrapper = shallow(<MainPage { ...mockProps } />)
})

it('renders MainPage without crashing', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
})

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'john',
            email: 'john@email.com'
        }],
        searchField: 'john',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage { ...mockProps2 } />)
    expect(wrapper2.instance().filterRobots()).toEqual([
        {
            id: 3,
            name: 'john',
            email: 'john@email.com'
        }
    ])
})

it('filters robots correctly2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'john',
            email: 'john@email.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const filterRobots = []
    const wrapper2 = shallow(<MainPage { ...mockProps3 } />)
    expect(wrapper2.instance().filterRobots()).toEqual(filterRobots)
})