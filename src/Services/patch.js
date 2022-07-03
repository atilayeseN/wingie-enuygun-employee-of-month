function increasetPoint(member) {
  const patchData = fetch(
    process.env.REACT_APP_ENDPOINTKEY + "/update-user/" + member._id,
    {
      method: "PATCH",
      body: JSON.stringify({
        point: member.point + 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {return response})
    .catch((err) => {
      console.log(err);
    });

  return patchData;
}

export { increasetPoint };