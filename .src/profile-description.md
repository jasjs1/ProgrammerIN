# HTML

  <div>
	<label for="description">Description:</label>
	<p id="description-text"></p>
	<button id="create-description-btn">Create Description</button>
  </div>
  
  <div id="description-modal" style="display: none">
	<label for="new-description">Enter your new description:</label>
	<input type="text" id="new-description">
	<button id="save-description-btn">Save Description</button>
	<button id="cancel-description-btn">Cancel</button>
  </div>
  
# CSS: 

.description-div {
    padding-top: 32.5px;
    padding-bottom: 4.5px;
}

# JS:

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

// Function to render list of basic skills
// Function to render list of basic skills
function renderSkills() {
  const skillsList = document.getElementById('skills-list');
  skillsList.innerHTML = '';
  const skills = JSON.parse(localStorage.getItem('skills')) || [];
  skills.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
  });
}

// Function to add a new skill
function addSkill(skill) {
  const skillsList = document.getElementById('skills-list');
  const li = document.createElement('li');
  li.textContent = skill;
  skillsList.appendChild(li);
}

// Function to handle form submit
function handleFormSubmit(event) {
  event.preventDefault();
  const input = document.getElementById('new-skill');
  const skill = input.value;
  addSkill(skill);
  input.value = '';

  const skillsForm = document.querySelector('#skills-form');
  const skillsList = document.querySelector('#skills-list');
  let skillsArray = JSON.parse(localStorage.getItem('skills')) || [];
  
  // Function to render skills
  function renderSkills() {
    skillsList.innerHTML = '';
    for (let i = 0; i < skillsArray.length; i++) {
      const skillItem = document.createElement('li');
      skillItem.textContent = skillsArray[i];
      skillsList.appendChild(skillItem);
    }
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    const skillInput = document.querySelector('#skill-input');
    const skillValue = skillInput.value.trim();
    if (skillValue) {
      skillsArray.push(skillValue);
      localStorage.setItem('skills', JSON.stringify(skillsArray));
      skillInput.value = '';
      renderSkills();
    }
  }
  
  // Attach event listeners
  skillsForm.addEventListener('submit', handleFormSubmit);
  
  // Render initial skills
  renderSkills();
}
