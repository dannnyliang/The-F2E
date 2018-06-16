export function signUpTotal() {
  return fetch('https://www.thef2e.com/api/signUpTotal')
    .then(res => {
      return res.json()
    })
    .catch(err => {
      console.log(err);
    })
}