import { render, screen } from '@testing-library/react';
import TicketPage from '../Components/TicketPage/TicketPage';
import '@testing-library/jest-dom';
import {create} from 'react-test-renderer';

jest.mock(`../Components/TicketPage/TicketList`, () => {
  return function TicketListMock(props){
    return(<p>Mocked TicketList</p>)
  }
});

jest.mock(`../Components/SideBar/Sidebar`, () => {
    return function SidebarMock(props){
      return(<p>Mocked Sidebar</p>)
    }
  });

describe(`Snapshot test of TicketPage`, () => {

  test(` TicketPage should match the snapshot every time it is rendered`, () => {
    const instance = create(<TicketPage/>).toJSON(); 
    expect(instance).toMatchSnapshot();
  });
});