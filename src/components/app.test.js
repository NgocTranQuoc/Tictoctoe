import 'react-native';
import React from 'react';
import CellComponent from './Cell';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  renderer.create(<CellComponent marker={'X'} onPress={() => {}} index={0} />);
});
