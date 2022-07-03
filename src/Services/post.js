function postMember(member) {
  const formData = new FormData();
  

  for (let key in member) {
    formData.append(key, member[key]);
  }

  const postData = fetch("http://localhost:8000/api/save-member", {
  
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((response) => {return response})
    .catch((err) => {
      console.log(err);
    });

    return postData;
}

async function hello() {
  await fetch("http://localhost:8000")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
export { postMember, hello };
