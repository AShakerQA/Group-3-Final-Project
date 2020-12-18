import React from 'react';
import { create } from 'react-test-renderer';
import Ticket from '../Components/TicketPage/Ticket';

describe(`Ticket render tests with ticket data props`, () => {

const ticketData = { 
    id: 1,
    acc_id: 2,
    title: "Title", 
    topic: "Topic", 
    desc: "Description", 
    time: "Time",
    status: "Status",
    trainee: "Trainee",
    trainer: "Trainer",
    priority: "Priority",
    cohort: "Cohort"
}

let testedTicket;

beforeEach( () => {
    const TestInstance = create(<Ticket {...ticketData}/>)
    testedTicket = TestInstance.root;
});

it(`Should render "Title" in a title h5`, () => {
    const titl = testedTicket.findByProps({ id: "tickTitle"});
    expect(titl.children).toEqual([ticketData.title]);
});


it(`Should render "Topic" in a topic div `, () => {
    const topc = testedTicket.findByProps({ id: "tickTopic"});
    expect(topc.children).toEqual([ticketData.topic]);
});


it(`Should render "Cohort" in a cohort div `, () => {
    const cohr = testedTicket.findByProps({ id: "tickCohort"});
    expect(cohr.children).toEqual([ticketData.cohort]);
});


it(`Should render "Time" in a time h6 `, () => {
    const tim = testedTicket.findByProps({ id: "tickTime"});
    expect(tim.children).toEqual([ticketData.time]);
});


it(`Should render "Trainer" in a trainer h6 `, () => {
    const trner = testedTicket.findByProps({ id: "tickTrainer"});
    expect(trner.children).toEqual([ticketData.trainer]);
});


it(`Should render "Priority" in a priority p `, () => {
    const prior = testedTicket.findByProps({ id: "tickPriority"});
    expect(prior.children).toEqual([ticketData.priority]);
});


it(`Should render "Trainee" in a trainee h6 `, () => {
    const trnee = testedTicket.findByProps({ id: "tickTrainee"});
    expect(trnee.children).toEqual([ticketData.trainee]);
});



})