import React from 'react';
import { create } from 'react-test-renderer';
import SolutionsHeader from '../Components/Solutions/SolutionsHeader';

describe(`SolutionsHeader render tests with data props`, () => {

const data = { 
    title: "Title", 
}

let testedSolutionsHeader;

beforeEach( () => {
    const TestInstance = create(<SolutionsHeader {...data}/>)
    testedSolutionsHeader = TestInstance.root;
});

it(`Should render "Title" in a title h3`, () => {
    const titl = testedSolutionsHeader.findByType(`h2`);
    expect(titl.children).toEqual([data.title]);
});

})