import { useState } from "react";
import ListItem from "./ListItem/ListItem";
import "./MemberList.module.scss";
import Modal from "../Modal/Modal";
import Info from "../Info/Info";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { eventLog } from "../../Services/post";

function MemberList({ members }) {
  const [parent] = useAutoAnimate();
  const [infoModal, setInfoModal] = useState(false);
  const [userCard, setUserCard] = useState();
  const manageModal = () => {
    setInfoModal((infoModal) => !infoModal);
  };

  const userModal = (e) => {
    setUserCard(e);
    eventLog("Viewed info page:" + JSON.stringify(e));
    setInfoModal((infoModal) => !infoModal);
  };
  return (
    <>
      <ul ref={parent}>
        {members.map((item, itemIndex) => (
          <ListItem
            key={itemIndex}
            listItem={item}
            index={itemIndex}
            memberModal={userModal}
          ></ListItem>
        ))}
      </ul>
      {infoModal && (
        <Modal manageModal={manageModal}>
          <Info member={userCard}></Info>
        </Modal>
      )}
    </>
  );
}

export default MemberList;
