package com.qa.helpqueue.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.qa.helpqueue.repo.HelpQueue_Repo;
import com.qa.helpqueue.ticket.Ticket;

@Service
public class HelpQueue_Service {
	
	@Autowired
	private HelpQueue_Repo repo;
	
	public HelpQueue_Service(HelpQueue_Repo repo) {
		super();
		this.repo = repo;
	}
	
	public Ticket createTicket(Ticket ticket) {
		return this.repo.save(ticket);
	}
	
	public List<Ticket> getTicket() {
		return this.repo.findAll();
	}
	
	//SORTING
	public List<Ticket> getAllSort(String query) {
		return this.repo.findByAndSort(Sort.by(query));
	}
		
	//STATUS
	public List<Ticket> filterStatus(String value) {
		return this.repo.findTicketByStatus(value);
	}
		
	//PRIORITY
	public List<Ticket> filterPriority(String value) {
		return this.repo.findTicketByPriority(value);
	}
		
	//TOPIC
	public List<Ticket> filterTopic(String value) {
		return this.repo.findTicketByTopic(value);
	}
		
	//COHORT
	public List<Ticket> filterCohort(String value) {
		return this.repo.findTicketByCohort(value);
	}
	
	
	public Ticket updateTicket(Ticket ticket, Long id) {
		//Optional<Ticket> optTicket = this.repo.findById(id);
		Ticket oldTicket = this.repo.findById(id).orElseThrow();
		
		oldTicket.setTitle(ticket.getTitle());
		oldTicket.setAuthor(ticket.getAuthor());
		oldTicket.setContent(ticket.getContent());
		oldTicket.setTimestamp(ticket.getTimestamp());
		oldTicket.setPriority(ticket.getPriority());
		oldTicket.setTopic(ticket.getTopic());
		oldTicket.setStatus(ticket.getStatus());
		oldTicket.setTrainer(ticket.getTrainer());
		oldTicket.setCohort(ticket.getCohort());
		
		Ticket saved = this.repo.save(oldTicket);
		return saved;
	}
	
	public boolean deleteTicket(Long id) {
		this.repo.deleteById(id);
		return !this.repo.existsById(id);
	}


}
