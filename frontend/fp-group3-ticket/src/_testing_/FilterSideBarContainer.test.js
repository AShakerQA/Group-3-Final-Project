import { render, screen } from '@testing-library/react';
import FilterSideBarContainer from '../Components/SideBar/FilterSideBarContainer';
import '@testing-library/jest-dom';
import {create} from 'react-test-renderer';

jest.mock(`../Components/SideBar/SideFilterPriority`, () => {
  return function FilterPriorityMock(props){
    return(<p>Mocked FilterPriority</p>)
  }
});

jest.mock(`../Components/SideBar/SideFilterCohort`, () => {
    return function FilterCohortMock(props){
      return(<p>Mocked FilterCohort</p>)
    }
  });

jest.mock(`../Components/SideBar/SideFilterStatus`, () => {
    return function FilterStatusMock(props){
      return(<p>Mocked FilterStatus</p>)
    }
  });

jest.mock(`../Components/SideBar/SideFilterTopic`, () => {
    return function FilterTopicMock(props){
      return(<p>Mocked FilterTopic</p>)
    }
  });

jest.mock(`../Components/SideBar/SideHeader`, () => {
    return function FilterTopicMock(props){
      return(<p>Mocked FilterTopic</p>)
    }
  });

describe(`Snapshot test of FilterSideBarContainer`, () => {

  test(` FilterSideBarContainer should match the snapshot every time it is rendered`, () => {
    const instance = create(<FilterSideBarContainer/>).toJSON(); 
    expect(instance).toMatchSnapshot();
  });
});