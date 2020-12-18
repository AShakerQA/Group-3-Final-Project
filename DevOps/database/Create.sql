DROP DATABASE IF EXISTS project;

CREATE DATABASE project;

USE project;

DROP TABLE IF EXISTS `ticket`;

CREATE TABLE `ticket` (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    author VARCHAR(255),
    timestamp DATETIME,
    content VARCHAR(255),
    priority VARCHAR(255),
    topic VARCHAR(255),
    status VARCHAR(255),
    trainer VARCHAR(255),
    cohort VARCHAR(255)

);

insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('dapibus dolor vel est', 'Karlyn Piniur', '5/29/2020', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Low', 'Security', 'Ongoing', 'Yvonne Crutchfield', 'Devops');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('augue vestibulum ante ipsum primis in faucibus orci luctus', 'Pammie Alaway', '9/21/2020', 'Suspendisse accumsan tortor quis turpis. Sed ante.', 'High', 'Security', 'Unresolved', 'Ron O''Gormally', 'Cloudnative');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('quam suspendisse potenti nullam porttitor lacus at', 'Ann-marie McRobbie', '1/11/2020', 'Aliquam erat volutpat. In congue. Etiam justo.', 'Low', 'Other', 'Resolved', 'Lise Padley', 'Cloudnative');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('a odio in', 'Walliw Darnborough', '7/24/2020', 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'Medium', 'Hardware', 'Ongoing', 'Foster Newcomb', 'Testing');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('et eros vestibulum ac', 'Zora Klousner', '11/15/2020', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.', 'High', 'Privacy', 'Ongoing', 'Joy Waumsley', 'Testing');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('praesent blandit nam', 'Hyacinthie Brizell', '3/5/2020', 'Etiam pretium iaculis justo. In hac habitasse platea dictumst.', 'High', 'Security', 'Resolved', 'Kaia Kleinstern', 'Devops');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('id turpis integer aliquet massa id lobortis convallis tortor', 'Cass Tocqueville', '11/21/2020', 'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.', 'Low', 'Security', 'Resolved', 'Alejandrina Riddich', 'Software');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('sapien arcu sed augue aliquam erat volutpat', 'Filmer Szymanowski', '8/6/2020', 'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.', 'High', 'Hardware', 'Unresolved', 'Eamon Sliman', 'Devops');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('sem mauris laoreet ut rhoncus', 'Esmaria Sowthcote', '12/3/2020', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', 'Low', 'Hardware', 'Unresolved', 'Josh Dunnett', 'Other');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('eros viverra eget congue', 'Constancia Parfrey', '8/27/2020', 'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.', 'Medium', 'Security', 'Unresolved', 'Gratia Niland', 'Cloudnative');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('convallis eget eleifend luctus ultricies eu', 'Angelia Kohnen', '3/6/2020', 'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.', 'Low', 'Hardware', 'Unresolved', 'Henri See', 'Other');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('hac habitasse platea dictumst maecenas', 'Jennette Tudor', '8/3/2020', 'Morbi a ipsum. Integer a nibh. In quis justo.', 'High', 'Networking', 'Resolved', 'Boycie Liddington', 'Software');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('ipsum primis in faucibus orci luctus et ultrices posuere cubilia', 'Cathleen Baus', '5/16/2020', 'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'Medium', 'Other', 'Ongoing', 'Lindi Fellnee', 'Cloudnative');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('leo rhoncus sed vestibulum sit amet', 'Norton Segrave', '7/19/2020', 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.', 'Medium', 'Networking', 'Resolved', 'Mady Neagle', 'Software');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('cras in purus eu magna', 'Orlando Massy', '3/20/2020', 'Aliquam erat volutpat. In congue.', 'High', 'Privacy', 'Ongoing', 'Dalis Chillcot', 'Software');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('nulla nisl nunc nisl', 'Eveleen Farrimond', '10/30/2020', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.', 'Medium', 'Privacy', 'Ongoing', 'Poul Czaple', 'Devops');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('tempor convallis nulla neque libero convallis eget eleifend', 'Baxy Dunsford', '12/2/2020', 'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Low', 'Networking', 'Resolved', 'Winslow Taggart', 'Devops');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('nec nisi vulputate nonummy maecenas tincidunt', 'Windy Kempstone', '12/6/2020', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.', 'Low', 'Other', 'Ongoing', 'Samara Fesby', 'Other');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('luctus rutrum', 'Neale O''Mailey', '3/29/2020', 'Donec dapibus. Duis at velit eu est congue elementum.', 'Medium', 'Other', 'Resolved', 'Brett Poynton', 'Software');
insert into `ticket` (`title`, `author`, `timestamp`, `content`, `priority`, `topic`, `status`, `trainer`, `cohort`) values ('consequat nulla nisl nunc nisl', 'Maynard Simonitto', '12/4/2020', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.', 'Medium', 'Networking', 'Ongoing', 'Derby Simmens', 'Testing');




