import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

import toJson from 'enzyme-to-json';
// import TestRenderer from 'react-test-renderer';

// const CardRender = TestRenderer.create(
//     <Card />
// );

it('test render', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'Jhon Snow',
            username: 'Jhon',
            email: 'jhon@gmail.com'
        }
    ]
    expect(toJson(shallow(<CardList robots={mockRobots} />))).toMatchSnapshot();
})