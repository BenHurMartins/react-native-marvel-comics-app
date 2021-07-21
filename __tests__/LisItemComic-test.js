/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import ListItemComic from '../src/components/ListItemComic';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const item = {
  thumbnail: {path: 'https'},
  title: 'mock comics',
  prices: [{price: 1.99}],
};

describe('Redenring tests for ListComics Items', () => {
  it('ListComics renders correctly', () => {
    renderer.create(<ListItemComic item={item} />);
  });
  it('ListComics snapshot test', () => {
    const tree = renderer.create(<ListItemComic item={item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should return 1 comic in the list', () => {
    const {getByText} = render(<ListItemComic item={item} />);
    act(() => {
      expect(getByText('mock comics')).not.toBe(null);
    });
    // expect(1).to.be.equal(1);
  });
});
