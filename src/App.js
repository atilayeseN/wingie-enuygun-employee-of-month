import './App.scss';
import { useSelector } from "react-redux"
import MemberList from './Components/MemberList/MemberList';
import Button from './Components/Button/Button';
import { useState } from 'react';
import Modal from './Components/Modal/Modal';
import Input from './Components/Input/Input';

function App() {
  const {members} = useSelector(state => state.members);
  const [inputModalState,setinputModalState] = useState(false);

  const manageModal = () => {
    setinputModalState(modalState => !modalState)
  }


  return (
    <div className="App">    
      <h1>EMPLOYEE OF MONTH</h1>
      <MemberList members={members}></MemberList>
      
      <Button event={manageModal}>Add Member</Button>
      {inputModalState && <Modal manageModal={manageModal}><Input manageModal={manageModal} members={members}></Input></Modal>}
    </div>
  );
}

export default App