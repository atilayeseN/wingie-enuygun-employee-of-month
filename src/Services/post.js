function postMember(member) {
  const formData = new FormData();
  formData.append("name", member.name);
  formData.append("surname", member.surname);
  formData.append("position", member.position);
  formData.append("gender", member.gender);
  formData.append("point", member.point);
  formData.append("email", member.email);
  formData.append("phone", member.phone);
  formData.append("picture", member.file);

  fetch("http://localhost:8000/api/save-member", {
  
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => {
      console.log(err);
    });
}

async function hello() {
  await fetch("http://localhost:8000")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
export { postMember, hello };
