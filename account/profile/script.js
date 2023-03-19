// Retrieve the experiences array from local storage, or create a new one if none exists
const experiences = JSON.parse(localStorage.getItem('experiences')) || [];

// Retrieve the experiences list element
const experiencesList = document.getElementById('experiences-list');

// Function to render a job experience item
function renderExperience(experience) {
  const li = document.createElement('li');
  li.innerHTML = `
    <h3>${experience.jobRole} at ${experience.company}</h3>
    <p>${experience.location}, ${new Date(experience.dateJoined).toLocaleDateString()} - ${new Date(experience.dateLeft).toLocaleDateString()}</p>
    <p>${experience.description}</p>
  `;
  return li;
}

// Function to render all job experience items
function renderExperiences() {
  experiencesList.innerHTML = '';
  for (const experience of experiences) {
    experiencesList.appendChild(renderExperience(experience));
  }
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const jobRoleInput = document.getElementById('job-role');
  const companyInput = document.getElementById('company-employed');
  const locationInput = document.getElementById('location');
  const dateJoinedInput = document.getElementById('date-joined');
  const dateLeftInput = document.getElementById('date-left');
  const description = '';

  const experience = {
    jobRole: jobRoleInput.value,
    company: companyInput.value,
    location: locationInput.value,
    dateJoined: dateJoinedInput.value,
    dateLeft: dateLeftInput.value,
    description: description
  };

  experiences.push(experience);
  localStorage.setItem('experiences', JSON.stringify(experiences));
  jobRoleInput.value = '';
  companyInput.value = '';
  locationInput.value = '';
  dateJoinedInput.value = '';
  dateLeftInput.value = '';
  renderExperiences();
}

// Function to handle "Create Description" button click
function handleCreateDescriptionButtonClick() {
  const descriptionModal = document.getElementById('description-modal');
  descriptionModal.style.display = 'block';
}

// Function to handle "Save Description" button click
function handleSaveDescriptionButtonClick() {
  const newDescriptionInput = document.getElementById('new-description');
  const descriptionText = document.getElementById('description-text');
  descriptionText.textContent = newDescriptionInput.value;
  const descriptionModal = document.getElementById('description-modal');
  descriptionModal.style.display = 'none';
}

// Function to handle "Cancel" button click
function handleCancelDescriptionButtonClick() {
  const descriptionModal = document.getElementById('description-modal');
  descriptionModal.style.display = 'none';
}

// Attach event listeners
const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

const createDescriptionButton = document.getElementById('create-description-btn');
createDescriptionButton.addEventListener('click', handleCreateDescriptionButtonClick);

const saveDescriptionButton = document.getElementById('save-description-btn');
saveDescriptionButton.addEventListener('click', handleSaveDescriptionButtonClick);

const cancelDescriptionButton = document.getElementById('cancel-description-btn');
cancelDescriptionButton.addEventListener('click', handleCancelDescriptionButtonClick);

// Render initial job experiences
renderExperiences();
