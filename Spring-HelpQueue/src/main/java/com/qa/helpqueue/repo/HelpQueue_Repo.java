package com.qa.helpqueue.repo;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.qa.helpqueue.ticket.Ticket;


@Repository
public interface HelpQueue_Repo extends JpaRepository<Ticket, Long> {
	
	@Query("Select t From Ticket t")
	List<Ticket> findByAndSort(Sort sort);
	
	List<Ticket> findTicketByStatus(String value);
	
	List<Ticket> findTicketByPriority(String value);

	List<Ticket> findTicketByCohort(String value);
	
	List<Ticket> findTicketByTopic(String value);
}
