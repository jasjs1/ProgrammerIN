// Get form and container elements
const form = document.getElementById('event-form');
const container = document.getElementById('event-container');

// Listen for form submission
form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Get form values
	const eventType = document.getElementById('event-type').value;
	const eventDate = document.getElementById('event-date').value;
	const eventTime = document.getElementById('event-time').value;
	const eventLocation = document.getElementById('event-location').value;
	const whosInvited = document.getElementById('whos-invited').value;
	const description = document.getElementById('description').value;

	// Create event object
	const event = {
		eventType,
		eventDate,
		eventTime,
		eventLocation,
		whosInvited,
		description
	};

	// Store event object in local storage
	let events = JSON.parse(localStorage.getItem('events')) || [];
	events.push(event);
	localStorage.setItem('events', JSON.stringify(events));

	// Display added event in container
	displayEvents();

	// Reset form
	form.reset();
});

// Function to display events in container
function displayEvents() {
	container.innerHTML = '';
	const events = JSON.parse(localStorage.getItem('events')) || [];
	events.forEach((event) => {
		const eventElem = document.createElement('div');
		eventElem.innerHTML = `
			<h3>${event.eventType}</h3>
			<p>Date: ${event.eventDate}</p>
			<p>Time: ${event.eventTime}</p>
			<p>Location: ${event.eventLocation}</p>
			<p>Who's Invited: ${event.whosInvited}</p>
			<p>Description: ${event.description}</p>
			<button class="close-btn" onclick="deleteEvent(${events.indexOf(event)})">X</button>
		`;
		container.appendChild(eventElem);
	});
}

// Function to delete event from local storage and container
function deleteEvent(index) {
	let events = JSON.parse(localStorage.getItem('events')) || [];
	events.splice(index, 1);
	localStorage.setItem('events', JSON.stringify(events));
	displayEvents();
}

// Display events on page load
displayEvents();
