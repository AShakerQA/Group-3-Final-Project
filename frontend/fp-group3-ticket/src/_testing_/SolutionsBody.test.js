import React from 'react';
import { create } from 'react-test-renderer';
import SolutionsBody from '../Components/Solutions/SolutionsBody';

describe(`SolutionsHeader render tests with data props`, () => {

const data = { 
    content: "Content", 
}

let testedSolutionsBody;

beforeEach( () => {
    const TestInstance = create(<SolutionsBody {...data}/>)
    testedSolutionsBody = TestInstance.root;
});

it(`Should render "Title" in a title h3`, () => {
    const titl = testedSolutionsBody.findByType(`p`);
    expect(titl.children).toEqual([data.content]);
});

})