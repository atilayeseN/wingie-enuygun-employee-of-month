async function getMembers() {
  const memberData = fetch("http://localhost:8000/api/get-members", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => {
      console.log(err);
    });
  return memberData;
}
export { getMembers };
