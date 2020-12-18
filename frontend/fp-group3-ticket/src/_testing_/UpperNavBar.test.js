import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@testing-library/jest-dom';
import {create} from 'react-test-renderer';
import UpperNavBar from '../Components/UpperNavBar';


  describe(`Test of UpperNavBar`, () => {

    test('Renders Ticket Hub Button', () => {
        render(<Router><UpperNavBar /></Router>);
        const linkElement = screen.getByText(/ticket hub/i);
        expect(linkElement).toBeInTheDocument();
      });

    test('Renders Solutions', () => {
        render(<Router><UpperNavBar /></Router>);
        const linkElement = screen.getByText(/solutions/i);
        expect(linkElement).toBeInTheDocument();
      });

    test('Renders Log Out', () => {
        render(<Router><UpperNavBar /></Router>);
        const linkElement = screen.getByText(/log out/i);
        expect(linkElement).toBeInTheDocument();
      });

    test(`UpperNavBar should match the snapshot every time it is rendered`, () => {
      const instance = create(<Router><UpperNavBar /></Router>).toJSON(); 
      expect(instance).toMatchSnapshot();
    });
  });