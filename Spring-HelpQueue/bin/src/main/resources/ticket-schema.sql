DROP TABLE ticket;

CREATE TABLE ticket (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    ticket_title VARCHAR(255),
    ticket_author VARCHAR(255),
    ticket_time VARCHAR(255),
    ticket_desc VARCHAR(255),
    ticket_urgency VARCHAR(255),
    ticket_topic VARCHAR(255),
    ticket_status VARCHAR(255),
    ticket_trainer VARCHAR(255),
    ticket_cohort VARCHAR(255)

);