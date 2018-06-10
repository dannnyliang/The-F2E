const serverURL = 'https://www.thef2e.com/api'

export function signUpTotal() {
  return fetch(serverURL + '/signUpTotal')
    .then(res => {
      return res.json()
    })
    .catch(err => {
      console.log(err);
    })
}