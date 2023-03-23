// Get the form element and add an event listener for form submission
const gigForm = document.querySelector('#gig-form');
gigForm.addEventListener('submit', addGig);

function addGig(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the input values from the form
  const gigTitle = document.querySelector('#gig-title').value;
  const langUsed = document.querySelector('#lang-used').value;
  const gigTags = document.querySelector('#gig-tags').value;
  const gigCreator = document.querySelector('#gig-creator').value;
  const description = document.querySelector('#description').value;

  // Create a new object with the input values
  const gig = {
    title: gigTitle,
    language: langUsed,
    tags: gigTags,
    creator: gigCreator,
    description: description
  };

  // Save the object to local storage
  localStorage.setItem('gig', JSON.stringify(gig));

  // Clear the form inputs
  gigForm.reset();
}
