function postMember(memberData) {
  console.log(memberData);

  const postData = fetch(process.env.REACT_APP_ENDPOINTKEY + "/save-member", {
    method: "POST",
    body: memberData,
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

export { postMember, eventLog };
