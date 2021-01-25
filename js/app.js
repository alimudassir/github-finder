const github = new Github();
const ui = new UI();

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (event) => {
  if (event.code === "Enter") {
    const userText = event.target.value;
    if (userText !== '') {
      github.getUser(userText)
        .then((data) => {
          if (data.profile.message === 'Not Found') {
            ui.showAlert('User not found', 'alert alert-danger mt-2');
          } else {
            console.log(data.profile);
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
          }
        });
    } else {
      ui.clearProfile();
    }
  }
});