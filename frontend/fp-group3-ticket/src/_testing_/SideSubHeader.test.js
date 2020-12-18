import React from 'react';
import { create } from 'react-test-renderer';
import SideSubHeader from '../Components/SideBar/SideSubHeader';

describe(`SideSubHeader render tests with data props`, () => {

const data = { 
    title: "Title", 
}

let testedSubHead;

beforeEach( () => {
    const TestInstance = create(<SideSubHeader {...data}/>)
    testedSubHead = TestInstance.root;
});

it(`Should render "Title" in a title h6`, () => {
    const titl = testedSubHead.findByType(`h6`);
    expect(titl.children).toEqual([data.title]);
});

})