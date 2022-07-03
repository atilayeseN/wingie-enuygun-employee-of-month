import styles from "./ListItem.module.scss";
import Button from "../../Button/Button";
import { useQueryClient } from "react-query";
import { increasetPoint } from "../../../Services/patch";

function ListItem({ listItem, memberModal, ...props }) {
  const queryClient = useQueryClient();

  const vote = async (member) => {
    const updatedMember = await increasetPoint(member);
    queryClient.setQueryData("members", (old) =>
      old
        .map((e) => {
          if (e._id === updatedMember._id) {
            e = updatedMember;
          }
          return e;
        })
        .sort((a, b) => {
          return b.point - a.point;
        })
    );
  };

  return (
    <>
      <li {...props}>
        <img
          alt={listItem.name + " " + listItem.surname}
          src={"http://localhost:8000/api/get-image/" + listItem._id}
        ></img>
        <p onClick={() => memberModal(listItem)}>
          {" "}
          {listItem.name} {listItem.surname}
        </p>{" "}
        <Button
          event={() => vote(listItem)}
          style={{ backgroundColor: "$blue" }}
        >
          Vote
        </Button>
        <div className={styles.pointBox}>{listItem.point}</div>
      </li>
    </>
  );
}
export default ListItem;
