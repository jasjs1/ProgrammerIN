// Retrieve the existing job experiences from local storage, if any
let jobExperiences = JSON.parse(localStorage.getItem('jobExperiences')) || [];


// Function to add a new job experience to the list and local storage
function addJobExperience(jobRole, companyEmployed, location, dateJoined, dateLeft) {
  // Create a new job experience object
  const newExperience = {
    jobRole,
    companyEmployed,
    location,
    dateJoined,
    dateLeft
  };

  // Add the new experience to the list
  jobExperiences.push(newExperience);

  // Update the local storage with the new experience
  localStorage.setItem('jobExperiences', JSON.stringify(jobExperiences));

  // Update the experiences list on the page
  updateExperiencesList();
}

// Function to update the experiences list on the page
function updateExperiencesList() {
  const experiencesList = document.getElementById('experiences-list');

  // Clear the existing list items
  experiencesList.innerHTML = '';

  // Add each job experience as a list item to the experiences list
  jobExperiences.forEach(experience => {
    const listItem = document.createElement('li');

    const container = document.createElement('div');

    const jobRole = document.createElement('h3');
    jobRole.textContent = experience.jobRole;

    const companyEmployed = document.createElement('h3');
    companyEmployed.textContent = experience.companyEmployed;

    container.appendChild(jobRole);
    container.appendChild(companyEmployed);

    const location = document.createElement('p');
    location.textContent = experience.location;

    const dates = document.createElement('p');
    dates.textContent = `${experience.dateJoined} - ${experience.dateLeft}`;

    listItem.appendChild(container);
    listItem.appendChild(location);
    listItem.appendChild(dates);

    experiencesList.appendChild(listItem);
  });
}

// Add an event listener to the form for when it is submitted
const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const jobRole = document.getElementById('job-role').value;
  const companyEmployed = document.getElementById('company-employed').value;
  const location = document.getElementById('location').value;
  const dateJoined = document.getElementById('date-joined').value;
  const dateLeft = document.getElementById('date-left').value;

  addJobExperience(jobRole, companyEmployed, location, dateJoined, dateLeft);

  // Clear the form fields
  form.reset();
});

// Update the experiences list when the page loads
updateExperiencesList();
