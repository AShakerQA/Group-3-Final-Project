import { render, screen } from '@testing-library/react';
import SolutionsStaticBody from '../Components/Solutions/SolutionsStaticBody';
import '@testing-library/jest-dom';
import {create} from 'react-test-renderer';

describe(`Snapshot test of SolutionsStaticBody`, () => {

  test(` SolutionsStaticBody should match the snapshot every time it is rendered`, () => {
    const instance = create(<SolutionsStaticBody/>).toJSON(); 
    expect(instance).toMatchSnapshot();
  });
});