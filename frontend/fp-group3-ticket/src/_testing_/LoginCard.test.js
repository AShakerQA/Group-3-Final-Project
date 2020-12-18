import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {create} from 'react-test-renderer';
import LoginCard from '../Components/LandingPage/LoginCard';


  describe(`Test of Login Card`, () => {

    test('Renders Log In', () => {
        render(<Router><LoginCard /></Router>);
        const linkElement = screen.getByText(/log in/i);
        expect(linkElement).toBeInTheDocument();
      });

    test('Renders Email Address', () => {
        render(<Router><LoginCard /></Router>);
        const linkElement = screen.getByText(/email address/i);
        expect(linkElement).toBeInTheDocument();
      });

    test('Renders Password', () => {
        render(<Router><LoginCard /></Router>);
        const linkElement = screen.getByText(/password/i);
        expect(linkElement).toBeInTheDocument();
      });

    test(` Login Card should match the snapshot every time it is rendered`, () => {
      const instance = create(<Router><LoginCard/></Router>).toJSON(); 
      expect(instance).toMatchSnapshot();
    });
  });