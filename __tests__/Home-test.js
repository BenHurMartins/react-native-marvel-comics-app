/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../src/scenes/home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
describe('Redenring tests for Home', () => {
  it('Home renders correctly', () => {
    renderer.create(<Home />);
  });
  it('Home snapshot test', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
