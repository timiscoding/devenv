import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Main from './main';

describe('main.js', () => {
  it('tests true', () => {
    expect(true).to.eql(true);
  });

  it('renders <Main />', () => {
    const wrapper = mount(<Main />);
    expect(wrapper.find('div').exists()).to.be.true;
  });
});
