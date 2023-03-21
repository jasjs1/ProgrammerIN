const notification = document.getElementById('notification');
const closeButton = document.querySelector('#notification .close');

closeButton.addEventListener('click', () => {
  notification.style.display = 'none';
  console.log('Notification has been hidden');
});

// const notificationMessages = [
//     "Hello there!",
//     "Welcome to our website!",
//     "Thanks for visiting!",
//     "Have a nice day!",
//     "You're awesome!",
//     "Keep up the good work!",
//   ];
  
//   const randomIndex = Math.floor(Math.random() * notificationMessages.length);
//   const message = notificationMessages[randomIndex];
  
