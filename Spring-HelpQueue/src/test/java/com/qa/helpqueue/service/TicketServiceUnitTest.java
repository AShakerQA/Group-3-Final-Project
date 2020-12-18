package com.qa.helpqueue.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Sort;
import org.springframework.test.context.ActiveProfiles;

import com.qa.helpqueue.repo.HelpQueue_Repo;
import com.qa.helpqueue.ticket.Ticket;

@SpringBootTest
@ActiveProfiles(profiles = "test")
public class TicketServiceUnitTest {

	@Autowired
	private HelpQueue_Service service;

	@MockBean
	private HelpQueue_Repo repo;

	@Test
	void testCreateTicket() {
		Long id = 1L;
		Ticket newTicket = new Ticket("Title", "Author", "2018-07-07 05:15:09", "Desc", "Urgency", "Topic", "Status",
				"Trainer", "Cohort");
		Ticket savedTicket = new Ticket("Title", "Author", "2018-07-07 05:15:09", "Desc", "Urgency", "Topic", "Status",
				"Trainer", "Cohort");
		savedTicket.setId(id);

		Mockito.when(this.repo.save(newTicket)).thenReturn(savedTicket);

		assertThat(this.service.createTicket(newTicket)).isEqualTo(savedTicket);
	}

	@Test
	void testCallRepo() {
		assertEquals(false, repo.existsById(1L));
	}

	@Test
	void testGetTicket() {

		List<Ticket> tickets = new ArrayList<Ticket>();
		Long id = 1L;
		Ticket addedTicket = new Ticket("Title", "Author", "2018-07-07 05:15:09", "Desc", "Urgency", "Topic", "Status",
				"Trainer", "Cohort");
		addedTicket.setId(id);
		tickets.add(addedTicket);

		Mockito.when(this.repo.findAll()).thenReturn(tickets);

		assertThat(this.service.getTicket()).isEqualTo(tickets);
	}

	@Test
	void testAllSort() {
		String query = "topic";
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
		List<Ticket> tickets = new ArrayList<Ticket>();
		tickets.add(ticket5);
		tickets.add(ticket4);
		tickets.add(ticket3);
		tickets.add(ticket2);
		tickets.add(ticket);

		Mockito.when(this.repo.findByAndSort(Sort.by(query))).thenReturn(tickets);

		assertThat(this.service.getAllSort(query)).isEqualTo(tickets);
	}

	@Test
	void testFilterStatus() {
		String query = "Incomplete";
		Long id = 1L;
		Ticket ticket = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Medium", "React",
				"Incomplete", "Savannah", "Software");
		ticket.setId(id);
		List<Ticket> tickets = new ArrayList<Ticket>();
		tickets.add(ticket);

		Mockito.when(this.repo.findTicketByStatus(query)).thenReturn(tickets);

		assertThat(this.service.filterStatus(query)).isEqualTo(tickets);
	}

	@Test
	void testFilterPriority() {
		String query = "Urgent";
		Ticket ticket2 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Urgent", "Nexus",
				"Pending", "Savannah", "DevOps");
		ticket2.setId(2L);
		Ticket ticket3 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Urgent", "Java",
				"Pending", "Savannah", "DevOps");
		ticket3.setId(3L);
		List<Ticket> tickets = new ArrayList<Ticket>();
		tickets.add(ticket2);
		tickets.add(ticket3);

		Mockito.when(this.repo.findTicketByPriority(query)).thenReturn(tickets);

		assertThat(this.service.filterPriority(query)).isEqualTo(tickets);
	}

	@Test
	void testFilterTopic() {
		String query = "Docker";
		Ticket ticket4 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Low", "Docker",
				"Completed", "Savannah", "Cloud Native");
		ticket4.setId(4L);
		List<Ticket> tickets = new ArrayList<Ticket>();
		tickets.add(ticket4);

		Mockito.when(this.repo.findTicketByTopic(query)).thenReturn(tickets);

		assertThat(this.service.filterTopic(query)).isEqualTo(tickets);
	}

	@Test
	void testFilterCohort() {
		String query = "Cloud Native";
		Ticket ticket4 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Low", "Docker",
				"Completed", "Savannah", "Cloud Native");
		ticket4.setId(4L);
		Ticket ticket5 = new Ticket("Some Title", "Some Author", "2018-07-07 05:15:09", "Desc", "Low", "AWS",
				"Completed", "Savannah", "Cloud Native");
		ticket5.setId(5L);
		List<Ticket> tickets = new ArrayList<Ticket>();
		tickets.add(ticket4);
		tickets.add(ticket5);

		Mockito.when(this.repo.findTicketByCohort(query)).thenReturn(tickets);

		assertThat(this.service.filterCohort(query)).isEqualTo(tickets);
	}

	@Test
	void testUpdateTicket() {
		Long id = 1L;
		Ticket newTicket = new Ticket("Another Title", "Another Author", "2018-08-08 05:15:10", "Desc", "Urgency",
				"Topic", "Status", "Trainer", "Cohort");
		Ticket oldTicket = new Ticket("Title", "Author", "2018-07-07 05:15:09", "Desc", "Urgency", "Topic", "Status",
				"Trainer", "Cohort");
		oldTicket.setId(id);
		Ticket updatedTicket = new Ticket("Another Title", "Another Author", "2018-08-08 05:15:10", "Desc", "Urgency",
				"Topic", "Status", "Trainer", "Cohort");
		updatedTicket.setId(id);

		Mockito.when(this.repo.findById(id)).thenReturn(Optional.of(oldTicket));
		Mockito.when(this.repo.save(updatedTicket)).thenReturn(updatedTicket);

		assertThat(this.service.updateTicket(newTicket, id)).isEqualTo(updatedTicket);

	}

	@Test
	void testDeleteTicket() {
		Long id = 1L;
		Ticket toRemoveTicket = new Ticket("Title", "Author", "2018-07-07 05:15:09", "Desc", "Urgency", "Topic",
				"Status", "Trainer", "Cohort");
		toRemoveTicket.setId(id);

		Mockito.when(this.repo.existsById(id)).thenReturn(false);

		assertThat(this.service.deleteTicket(id)).isEqualTo(true);

	}

	@Test
	void testToString() {
		Ticket ticket = new Ticket();
		String testedString = ticket.toString();
		assertEquals(testedString,
				"Ticket [id=" + ticket.getId() + ", title=" + ticket.getTitle() + ", author=" + ticket.getAuthor()
						+ ", time=" + ticket.getTimestamp() + ", content=" + ticket.getContent() + ", priority="
						+ ticket.getPriority() + ", topic=" + ticket.getTopic() + ", status=" + ticket.getStatus()
						+ ", trainer=" + ticket.getTrainer() + ", cohort=" + ticket.getCohort() + "]");

	}

}
