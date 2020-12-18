package com.qa.helpqueue.rest;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.Sql.ExecutionPhase;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.qa.helpqueue.ticket.Ticket;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ActiveProfiles(profiles = "test")
@Sql(scripts = { "classpath:ticket-schema.sql",
		"classpath:ticket-data.sql" }, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD)

public class TicketIntegrationTest {

	@Autowired
	private MockMvc mockMVC;

	@Autowired
	private ObjectMapper mapper;

	@Test
	void testCreateTicket() throws Exception {
		Ticket newTicket = new Ticket("Title", "Author", "2018-07-07 05:15:09", "Desc", "Urgency", "Topic", "Status",
				"Trainer", "Cohort");
		String requestBody = this.mapper.writeValueAsString(newTicket);

		RequestBuilder request = post("/createTicket").contentType(MediaType.APPLICATION_JSON).content(requestBody);

		ResultMatcher checkStatus = status().isCreated();

		Ticket savedTicket = new Ticket("Title", "Author", "2018-07-07 05:15:09", "Desc", "Urgency", "Topic", "Status",
				"Trainer", "Cohort");
		savedTicket.setId(6L);

		String resultBody = this.mapper.writeValueAsString(savedTicket);
		ResultMatcher checkBody = content().json(resultBody);

		this.mockMVC.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}

	@Test
	void testDeleteTicket() throws Exception {

		RequestBuilder request1 = delete("/deleteTicket/1");
		ResultMatcher checkStatus1 = status().isOk();

		this.mockMVC.perform(request1).andExpect(checkStatus1);

	}

	// @Test
	// void testDeleteTicket2() throws NestedServletException {

	// RequestBuilder request = delete("/deleteTicket/2");
	// ResultMatcher checkStatus = status().isInternalServerError();

	// try {
	// this.mockMVC.perform(request).andExpect(checkStatus);
	// } catch (Exception e) {
	// TODO Auto-generated catch block
	// e.printStackTrace();
	// }

	// }

	@Test
	void testReadTicket() throws Exception {
		// MUST match the test database record
		Ticket ticket = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Medium", "React",
				"Incomplete", "Savannah", "Software");
		ticket.setId(1L);
		Ticket ticket2 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Urgent", "Nexus",
				"Pending", "Savannah", "DevOps");
		ticket2.setId(2L);
		Ticket ticket3 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Urgent", "Java",
				"Pending", "Savannah", "DevOps");
		ticket3.setId(3L);
		Ticket ticket4 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Low", "Docker",
				"Completed", "Savannah", "Cloud Native");
		ticket4.setId(4L);
		Ticket ticket5 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Low", "AWS",
				"Completed", "Savannah", "Cloud Native");
		ticket5.setId(5L);

		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket);
		tickets.add(ticket2);
		tickets.add(ticket3);
		tickets.add(ticket4);
		tickets.add(ticket5);
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/getTicket")).andExpect(status().isOk()).andExpect(content().json(responseBody));

	}

	@Test
	void testSort() throws Exception {
		Ticket ticket = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Medium", "React",
				"Incomplete", "Savannah", "Software");
		ticket.setId(1L);
		Ticket ticket2 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Urgent", "Nexus",
				"Pending", "Savannah", "DevOps");
		ticket2.setId(2L);
		Ticket ticket3 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Urgent", "Java",
				"Pending", "Savannah", "DevOps");
		ticket3.setId(3L);
		Ticket ticket4 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Low", "Docker",
				"Completed", "Savannah", "Cloud Native");
		ticket4.setId(4L);
		Ticket ticket5 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Low", "AWS",
				"Completed", "Savannah", "Cloud Native");
		ticket5.setId(5L);
		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket5);
		tickets.add(ticket4);
		tickets.add(ticket3);
		tickets.add(ticket2);
		tickets.add(ticket);
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/getTicket/sort/topic")).andExpect(status().isOk())
				.andExpect(content().json(responseBody));
	}

	@Test
	void testFilterStatus() throws Exception {
		Ticket ticket = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Medium", "React",
				"Incomplete", "Savannah", "Software");
		ticket.setId(1L);
		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket);
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/getTicket/status/Incomplete")).andExpect(status().isOk())
				.andExpect(content().json(responseBody));
	}

	@Test
	void testFilterPriority() throws Exception {
		Ticket ticket2 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Urgent", "Nexus",
				"Pending", "Savannah", "DevOps");
		ticket2.setId(2L);
		Ticket ticket3 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Urgent", "Java",
				"Pending", "Savannah", "DevOps");
		ticket3.setId(3L);
		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket2);
		tickets.add(ticket3);
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/getTicket/priority/Urgent")).andExpect(status().isOk())
				.andExpect(content().json(responseBody));
	}

	@Test
	void testFilterTopic() throws Exception {
		Ticket ticket4 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Low", "Docker",
				"Completed", "Savannah", "Cloud Native");
		ticket4.setId(4L);
		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket4);
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/getTicket/topic/Docker")).andExpect(status().isOk())
				.andExpect(content().json(responseBody));
	}

	@Test
	void testFilterCohort() throws Exception {
		Ticket ticket4 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Low", "Docker",
				"Completed", "Savannah", "Cloud Native");
		ticket4.setId(4L);
		Ticket ticket5 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Low", "AWS",
				"Completed", "Savannah", "Cloud Native");
		ticket5.setId(5L);
		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket4);
		tickets.add(ticket5);
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/getTicket/cohort/Cloud Native")).andExpect(status().isOk())
				.andExpect(content().json(responseBody));
	}

	@Test
	void testUpdateTicket() throws Exception {
		// Updates the book with id=1 in the test database
		Long id = 1L;
		Ticket updatedTicket = new Ticket("Some Updated Title", "Some Author", "2018-08-08 05:15:10", "Desc", "Urgent",
				"React", "Completed", "Savannah", "Cloud Native");
		String requestBody = this.mapper.writeValueAsString(updatedTicket);
		RequestBuilder request = put("/updateTicket/" + id).contentType(MediaType.APPLICATION_JSON)
				.content(requestBody);

		ResultMatcher checkStatus = status().isAccepted();

		Ticket returnedTicket = new Ticket("Some Updated Title", "Some Author", "2018-08-08 05:15:10", "Desc", "Urgent",
				"React", "Completed", "Savannah", "Cloud Native");
		returnedTicket.setId(id);

		String resultBody = this.mapper.writeValueAsString(returnedTicket);
		ResultMatcher checkBody = content().json(resultBody);

		this.mockMVC.perform(request).andExpect(checkStatus).andExpect(checkBody);

	}

}