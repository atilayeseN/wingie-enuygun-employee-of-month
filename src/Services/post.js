function postMember(memberData) {
  var form_data = new FormData();

  for (var key in memberData) {
    form_data.append(key, memberData[key]);
  }

  const postData = fetch(process.env.REACT_APP_ENDPOINTKEY + "/save-member", {
    method: "POST",
    body: form_data,
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });

  return postData;
}

function eventLog(message) {
  const postData = fetch(process.env.REACT_APP_ENDPOINTKEY + "/event-log", {
    method: "POST",
    body: JSON.stringify({
      name: message,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => {
      console.log(err);
    });

  return postData;
}

function login(user) {
  return fetch(process.env.REACT_APP_ENDPOINTKEY + "/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => {});
}

function verifyToken(token) {
  return fetch(process.env.REACT_APP_ENDPOINTKEY + "verify", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-access-token": token,
    },
  })
    .then((response) => response)
    .then((response) => {
      if (response.status === 200) {
        return true
      }
      else {
        return false
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export { postMember, eventLog, login, verifyToken };
