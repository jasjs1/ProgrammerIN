document.addEventListener('DOMContentLoaded', () => {
  // Get the input fields and select element
  const locationInput = document.querySelector('input[name="location"]');
  const currentRoleInput = document.querySelector('input[name="role"]');
  const roleAtInput = document.querySelector('input[name="roleAt"]');
  const hiringStatusInput = document.querySelector('input[name="hiringStatus"]');
  const workLocationSelect = document.querySelector('#work-location');
  const compensationInput = document.querySelector('#cmp');

  // Get the submit button
  const saveButton = document.querySelector('#save-button');

  // Add event listener to save the values to local storage on submit
  saveButton.addEventListener('click', () => {
    localStorage.setItem('location', locationInput.value);
    localStorage.setItem('currentRole', currentRoleInput.value);
    localStorage.setItem('roleAt', roleAtInput.value);
    localStorage.setItem('hiringStatus', hiringStatusInput.value);
    localStorage.setItem('workLocation', workLocationSelect.value);

    const compensationValue = compensationInput.value;
    if (isNaN(compensationValue)) {
      alert('Please enter a valid number for compensation');
      console.error('Invalid input for compensation:', compensationValue);
    } else {
      localStorage.setItem('compensation', compensationValue);

      // Redirect to a new page after everything is saved
      window.location.href = 'http://127.0.0.1:5500/.app/app.html';
    }
  });

  // Get the saved compensation value from local storage and set it to the input value on page load
  const savedCompensationValue = localStorage.getItem('compensation');
  if (savedCompensationValue) {
    compensationInput.value = savedCompensationValue;
  }
});
