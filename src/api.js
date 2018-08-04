const url = 'https://www.thef2e.com/api';

export function signUpTotal() {
  return fetch(`${url}/signUpTotal`)
    .then(res => res.json());
}

export function stageCheck(email) {
  return fetch(`${url}/stageCheck`, {
    method: 'post',
    body: JSON.stringify(email),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json());
}
