import { render, screen } from '@testing-library/react';
import TicketList from '../Components/TicketPage/TicketList';
import '@testing-library/jest-dom';
import {create} from 'react-test-renderer';

jest.mock(`../Components/TicketPage/Ticket`, () => {
  return function TicketMock(props){
    return(<p>Mocked Ticket</p>)
  }
});

describe(`Snapshot test of TicketList`, () => {

  test(` TicketList should match the snapshot every time it is rendered`, () => {
    const instance = create(<TicketList/>).toJSON(); 
    expect(instance).toMatchSnapshot();
  });
});