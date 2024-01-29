import './App.css';
import {useState} from "react";
import './styles/constants.css'
import {Schedule} from './components/modal/Schedule/Schedule'
import Modal from "./components/common/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='App'>
      <button className='button' onClick={()=>setIsOpen(true)}>Установить расписание</button>
       <Modal active={isOpen} ><Schedule setIsOpen={setIsOpen} /></Modal>
    </div>
  );
}

export default App;
