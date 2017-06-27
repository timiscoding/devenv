import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Hi from './main';

describe('main.js', () => {
  it('tests true', () => {
    expect(true).to.eql(true);
  });

  it('renders <Hi />', () => {
    const wrapper = shallow(<Hi />);
    expect(wrapper.find('div').exists()).to.be.true;
  });
});
