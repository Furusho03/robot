import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

import toJson from 'enzyme-to-json';
// import TestRenderer from 'react-test-renderer';

// const CardRender = TestRenderer.create(
//     <Card />
// );

it('test render', () => {  
    expect(toJson(shallow(<Card />))).toMatchSnapshot();
})
