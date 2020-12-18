import React from 'react';
import { create } from 'react-test-renderer';
import SolutionsSubHead from '../Components/Solutions/SolutionsSubHead';

describe(`SolutionsSubHead render tests with data props`, () => {

const data = { 
    title: "Title", 
}

let testedSubHead;

beforeEach( () => {
    const TestInstance = create(<SolutionsSubHead {...data}/>)
    testedSubHead = TestInstance.root;
});

it(`Should render "Title" in a title h3`, () => {
    const titl = testedSubHead.findByType(`h3`);
    expect(titl.children).toEqual([data.title]);
});

})