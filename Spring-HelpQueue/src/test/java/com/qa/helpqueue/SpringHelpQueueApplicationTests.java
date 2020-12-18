package com.qa.helpqueue;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import com.qa.helpqueue.ticket.Ticket;

import nl.jqno.equalsverifier.EqualsVerifier;

@SpringBootTest
@ActiveProfiles(profiles = "test")
class SpringHelpQueueApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test // tests the main method in application class; will only pass if
			// the application is not running, otherwise port conflicts will arise
	public void applicationContextTest() {
		SpringHelpQueueApplication.main(new String[] {});
	}

	@Test
	void hashAndEquals() {
		EqualsVerifier.forClass(Ticket.class).usingGetClass().verify();
	}

}
