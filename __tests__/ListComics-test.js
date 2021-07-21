/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ListComics from '../src/scenes/listComics';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => jest.fn(),
    useRoute: jest.fn().mockImplementation(() => {
      return {
        params: {
          favoriteChar: {
            id: 1234,
          },
        },
      };
    }),
  };
});

describe('Redenring tests for ListComics', () => {
  it('ListComics renders correctly', () => {
    renderer.create(<ListComics />);
  });
  it('ListComics snapshot test', () => {
    const tree = renderer.create(<ListComics />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
