import React from 'react';
import { create } from 'react-test-renderer';
import SideHeader from '../Components/SideBar/SideHeader';

describe(`SideHeader render tests with data props`, () => {

const data = { 
    title: "Title", 
}

let testedSideHeader;

beforeEach( () => {
    const TestInstance = create(<SideHeader {...data}/>)
    testedSideHeader = TestInstance.root;
});

it(`Should render "Title" in a title h6`, () => {
    const titl = testedSideHeader.findByType(`h4`);
    expect(titl.children).toEqual([data.title]);
});

})