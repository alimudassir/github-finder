const github = new Github();
const ui = new UI();

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (event) => {
  if (event.code === "Enter") {
    const userText = event.target.value;
    if (userText !== '') {
      github.getUser(userText)
        .then((data) => {
          if(data.profile.message === 'Not Found'){
            // Show Alert
          } else {
            ui.showProfile(data.profile);
          }
        });
    } else {
      // Clear Profile
    }
  }
});