function increasetPoint(member) {
  const patchData = fetch(
    "http://localhost:8000/api/update-user/" + member._id,
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
    .then((response) => response)
    .catch((err) => {
      console.log(err);
    });

  return patchData;
}

export { increasetPoint };