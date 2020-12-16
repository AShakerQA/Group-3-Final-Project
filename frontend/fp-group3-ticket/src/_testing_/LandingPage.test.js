import { render, screen } from '@testing-library/react';
import LandingPage from '../Components/LandingPage/LandingPage';
import '@testing-library/jest-dom';
import {create} from 'react-test-renderer';

describe(`Snapshot test of Landing Page`, () => {

  test(` Landing Page should match the snapshot every time it is rendered`, () => {
    const instance = create(<LandingPage/>).toJSON(); 
    expect(instance).toMatchSnapshot();
  });
});