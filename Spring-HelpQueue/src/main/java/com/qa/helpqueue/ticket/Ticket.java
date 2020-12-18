package com.qa.helpqueue.ticket;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

 

@Entity
public class Ticket {

    //attributes
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String title;
        private String author;
        private String timestamp;
        private String content;
        private String priority;
        private String topic;
        private String status;
        private String trainer;
        private String cohort;
        
        public Ticket() {
            super();
        }
        
    // Constructor
        public Ticket(String title, String author, String timestamp, String content, String priority,
				String topic, String status, String trainer, String cohort) {
			super();
			this.title = title;
			this.author = author;
			this.timestamp = timestamp;
			this.content = content;
			this.priority = priority;
			this.topic = topic;
			this.status = status;
			this.trainer = trainer;
			this.cohort = cohort;
		}
    // Getters and Setters


		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getAuthor() {
			return author;
		}

		public void setAuthor(String author) {
			this.author = author;
		}

		public String getTimestamp() {
			return timestamp;
		}

		public void setTimestamp(String timestamp) {
			this.timestamp = timestamp;
		}	
		
		public String getContent() {
			return content;
		}

		public void setContent(String content) {
			this.content = content;
		}

		public String getPriority() {
			return priority;
		}

		public void setPriority(String priority) {
			this.priority = priority;
		}

		public String getTopic() {
			return topic;
		}

		public void setTopic(String topic) {
			this.topic = topic;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

		public String getTrainer() {
			return trainer;
		}

		public void setTrainer(String trainer) {
			this.trainer = trainer;
		}

		public String getCohort() {
			return cohort;
		}

		public void setCohort(String cohort) {
			this.cohort = cohort;
		}
		
		
		@Override
        public String toString() {
            return "Ticket [id=" + id + ", title=" + title + ", author=" + author
                    + ", time=" + timestamp + ", content=" + content + ", priority=" + priority
                    + ", topic=" + topic + ", status=" + status + ", trainer="
                    + trainer + ", cohort=" + cohort + "]";
        }
        

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((author == null) ? 0 : author.hashCode());
			result = prime * result + ((cohort == null) ? 0 : cohort.hashCode());
			result = prime * result + ((content == null) ? 0 : content.hashCode());
			result = prime * result + ((status == null) ? 0 : status.hashCode());
			result = prime * result + ((timestamp == null) ? 0 : timestamp.hashCode());
			result = prime * result + ((title == null) ? 0 : title.hashCode());
			result = prime * result + ((topic == null) ? 0 : topic.hashCode());
			result = prime * result + ((trainer == null) ? 0 : trainer.hashCode());
			result = prime * result + ((priority == null) ? 0 : priority.hashCode());
			return result;
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			Ticket other = (Ticket) obj;
			if (author == null) {
				if (other.author != null)
					return false;
			} else if (!author.equals(other.author))
				return false;
			if (cohort == null) {
				if (other.cohort != null)
					return false;
			} else if (!cohort.equals(other.cohort))
				return false;
			if (content == null) {
				if (other.content != null)
					return false;
			} else if (!content.equals(other.content))
				return false;
			if (status == null) {
				if (other.status != null)
					return false;
			} else if (!status.equals(other.status))
				return false;
			if (timestamp == null) {
				if (other.timestamp != null)
					return false;
			} else if (!timestamp.equals(other.timestamp))
				return false;
			if (title == null) {
				if (other.title != null)
					return false;
			} else if (!title.equals(other.title))
				return false;
			if (topic == null) {
				if (other.topic != null)
					return false;
			} else if (!topic.equals(other.topic))
				return false;
			if (trainer == null) {
				if (other.trainer != null)
					return false;
			} else if (!trainer.equals(other.trainer))
				return false;
			if (priority == null) {
				if (other.priority != null)
					return false;
			} else if (!priority.equals(other.priority))
				return false;
			return true;
		}

        
}
