/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, act} from '@testing-library/react-native';
import FavoriteChar from '../src/components/FavoriteChar';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const favoriteChar = {
  name: 'Super Ben',
  description: 'A react native developer born in 1990;',
};

describe('Redenring tests for ListComics', () => {
  it('FavoriteChar renders correctly', () => {
    renderer.create(<FavoriteChar favoriteChar={favoriteChar} />);
  });
  it('FavoriteChar snapshot test', () => {
    const tree = renderer
      .create(<FavoriteChar favoriteChar={favoriteChar} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should return render the value passed', () => {
    const {getByText} = render(<FavoriteChar favoriteChar={favoriteChar} />);
    act(() => {
      expect(getByText(favoriteChar.name)).not.toBe(null);
    });
  });
});
