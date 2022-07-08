import "./App.scss";
import MemberList from "./Components/MemberList/MemberList";
import Button from "./Components/Button/Button";
import { useState } from "react";
import Modal from "./Components/Modal/Modal";
import Input from "./Components/Input/Input";
import { getMembers } from "./Services/get";
import { useQuery } from "react-query";

function App() {
  const [inputModalState, setinputModalState] = useState(false);

  const { isLoading, isError, error, data } = useQuery("members", getMembers);

  const manageModal = () => {
    setinputModalState((modalState) => !modalState);
  };

  
  if (isLoading) return (<div>
    <h1>Loading</h1>
  </div>);
  if (isError) return <pre>{error}</pre>;
  if (data) {
    return (
      <div className="App">
        <h1>EMPLOYEE OF MONTH</h1>
        <MemberList members={data}></MemberList>
  
        <Button event={manageModal}>Add Member</Button>
        {inputModalState && (
          <Modal manageModal={manageModal}>
            <Input manageModal={manageModal} members={data}></Input>
          </Modal>
        )}
      </div>
    );
  }


  
}

export default App;
