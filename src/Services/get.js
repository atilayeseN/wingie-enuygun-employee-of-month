async function getMembers() {
  const memberData = await fetch(process.env.REACT_APP_ENDPOINTKEY + "/get-members", {
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
