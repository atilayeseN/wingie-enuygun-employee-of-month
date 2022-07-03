import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { setMembers } from "./store/members";
import MemberList from "./Components/MemberList/MemberList";
import Button from "./Components/Button/Button";
import { useState } from "react";
import Modal from "./Components/Modal/Modal";
import Input from "./Components/Input/Input";
import { getMembers } from "./Services/get";
import { useQuery } from "react-query";

function App() {
  const { members } = useSelector((state) => state.members);
  const [inputModalState, setinputModalState] = useState(false);

  const { isLoading, isError, error, data } = useQuery("members", getMembers);

  const dispatch = useDispatch();

  const manageModal = () => {
    setinputModalState((modalState) => !modalState);
  };


  if (isLoading) return ("LOADING");
  if (isError) return <pre>{error}</pre>;
  if (data) {
    dispatch(setMembers(data));
  }

  


  return (
    <div className="App">
      <h1>EMPLOYEE OF MONTH</h1>
      <MemberList members={members}></MemberList>

      <Button event={manageModal}>Add Member</Button>
      {inputModalState && (
        <Modal manageModal={manageModal}>
          <Input manageModal={manageModal} members={members}></Input>
        </Modal>
      )}
    </div>
  );
}

export default App;
