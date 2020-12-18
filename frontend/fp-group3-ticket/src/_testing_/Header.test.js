import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {create} from 'react-test-renderer';
import Header from '../Components/LandingPage/Header';


  describe(`Test of Header`, () => {

    test('Renders QA HelpDesk link', () => {
        render(<Header />);
        const linkElement = screen.getByText(/old data/i);
        expect(linkElement).toBeInTheDocument();
      });

    test(`Header should match the snapshot every time it is rendered`, () => {
      const instance = create(<Header/>).toJSON(); 
      expect(instance).toMatchSnapshot();
    });
  });

