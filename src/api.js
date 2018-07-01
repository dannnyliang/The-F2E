const url = 'https://www.thef2e.com/api'

export function signUpTotal() {
  return fetch(url + '/signUpTotal')
    .then(res => {
      return res.json()
    })
    .catch(err => {
      console.log(err);
    })
}

export function stageCheck(email) {
  console.log(JSON.stringify(email));
  return fetch(url + `/stageCheck`, {
    method: 'post',
    body: JSON.stringify(email),
    headers: {
      'content-type': 'application/json',
    }
  }).then(res => {
    return res.json()
  }).catch(err => {
    console.log(err);
  })
}
