const github = new Github();

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (event) => {
  if (event.code === "Enter") {
    const userText = event.target.value;
    if (userText !== '') {
      github.getUser(userText)
        .then((data) => {
          console.log(data);
          if(data.profile.message === 'Not Found'){
            // Show Alert
          } else {
            // Show Profile
          }
        });
    } else {
      // Clear Profile
    }
  }
});