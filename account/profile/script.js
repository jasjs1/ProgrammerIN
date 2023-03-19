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

const descriptionText = document.getElementById("description-text");
const createDescriptionBtn = document.getElementById("create-description-btn");
const descriptionModal = document.getElementById("description-modal");
const saveDescriptionBtn = document.getElementById("save-description-btn");
const cancelDescriptionBtn = document.getElementById("cancel-description-btn");
const maxChars = 150;

// Load description from local storage
const description = localStorage.getItem("description");
if (description) {
  descriptionText.textContent = description;
}

// Open description modal
createDescriptionBtn.addEventListener("click", () => {
  descriptionModal.style.display = "block";
  document.getElementById("new-description").value = description || "";
});


saveDescriptionBtn.addEventListener("click", () => {
    const newDescription = document.getElementById("new-description").value;
    const charCount = newDescription.length;
    
    if (charCount > 150) {
      alert(`Description exceeds maximum length by ${charCount - 150} characters. The description character length needs to be 150 characters`);
    } else {
      localStorage.setItem("description", newDescription);
      descriptionText.textContent = newDescription;
      descriptionModal.style.display = "none";
    }
  });
  
  

// Close description modal
cancelDescriptionBtn.addEventListener("click", () => {
  descriptionModal.style.display = "none";
});

// Edit description
descriptionText.addEventListener("click", () => {
  descriptionModal.style.display = "block";
  document.getElementById("new-description").value = descriptionText.textContent || "";
});
