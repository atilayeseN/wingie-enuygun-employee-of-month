import styles from "./ListItem.module.scss";
import Button from "../../Button/Button";
import { useQueryClient } from "react-query";
import { increasetPoint } from "../../../Services/patch";
import { eventLog } from "../../../Services/post";

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
    eventLog("Voted to:" + JSON.stringify(member));
  };

  return (
    <>
      <li {...props}>
        <img
          alt={listItem.name + " " + listItem.surname}
          src={process.env.REACT_APP_ENDPOINTKEY + "/get-image/" + listItem._id}
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
