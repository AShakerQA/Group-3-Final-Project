import { render, screen } from '@testing-library/react';
import Solutions from '../Components/Solutions/Solutions';
import '@testing-library/jest-dom';
import {create} from 'react-test-renderer';

jest.mock(`../Components/Solutions/SolutionsStaticBody`, () => {
  return function SolutionsStaticBodyMock(props){
    return(<p>Mocked SolutionsStaticBody</p>)
  }
});

describe(`Snapshot test of Solutions`, () => {

  test(` Solutions should match the snapshot every time it is rendered`, () => {
    const instance = create(<Solutions/>).toJSON(); 
    expect(instance).toMatchSnapshot();
  });
});