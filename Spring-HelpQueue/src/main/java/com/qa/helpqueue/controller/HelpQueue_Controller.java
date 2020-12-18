package com.qa.helpqueue.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.helpqueue.service.HelpQueue_Service;
import com.qa.helpqueue.ticket.Ticket;

@CrossOrigin
@RestController
public class HelpQueue_Controller {
	
	private HelpQueue_Service service;
	
	public HelpQueue_Controller(HelpQueue_Service service) {
		super();
		this.service = service;
	}
	
	@PostMapping("/createTicket")
	public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket){
		return new ResponseEntity<Ticket>(this.service.createTicket(ticket), HttpStatus.CREATED);
	}
	
	@GetMapping("/getTicket")
	public ResponseEntity<List<Ticket>> getTicket(){
		return ResponseEntity.ok(this.service.getTicket());
	}
	
	//SORTING
	@GetMapping("/getTicket/sort/{query}")
	public ResponseEntity<List<Ticket>> getAllSortTitle(@PathVariable String query){
		return ResponseEntity.ok(this.service.getAllSort(query));
	}	
	
	//FILTERING
	//STATUS
	@GetMapping("/getTicket/status/{value}")
	public ResponseEntity<List<Ticket>> filterStatus(@PathVariable String value){
		return ResponseEntity.ok(this.service.filterStatus(value));
	}
		
	//PRIORITY
	@GetMapping("/getTicket/priority/{value}")
	public ResponseEntity<List<Ticket>> filterPriority(@PathVariable String value){
		return ResponseEntity.ok(this.service.filterPriority(value));
	}
		
	//TOPIC
	@GetMapping("/getTicket/topic/{value}")
	public ResponseEntity<List<Ticket>> filterTopic(@PathVariable String value){
		return ResponseEntity.ok(this.service.filterTopic(value));
	}
		
	//COHORT
	@GetMapping("/getTicket/cohort/{value}")
	public ResponseEntity<List<Ticket>> filterCohort(@PathVariable String value){
		return ResponseEntity.ok(this.service.filterCohort(value));
	}
	

	@PutMapping("/updateTicket/{id}")
	public ResponseEntity<Ticket> updateTicket(@RequestBody Ticket ticket, @PathVariable Long id){
		return new ResponseEntity<Ticket>(this.service.updateTicket(ticket, id), HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/deleteTicket/{id}")
	public ResponseEntity<Object> deleteTicket(@PathVariable Long id) {
		if (this.service.deleteTicket(id)) {
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
