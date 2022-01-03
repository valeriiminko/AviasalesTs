import React,{useState} from 'react';
import Filter from '../Filter/Filter';
import Tickets from '../Tickets/Tickets';
import { usedTypedSelector } from '../hooks/usedTypedSelector';
import './App.scss';
import Modal from '../Modal/Modal';

function App() {

  const [isActive, setActive] = useState<boolean>(false);

  return (
    <div className="container">
      <div className={isActive ? 'row onblur':'row'}>
          <div className="col-4">
                 <Filter setActive={setActive} isActive={isActive}
                 />
          </div>
          <div className="col-8">
               <Tickets setActive={setActive} isActive={isActive} />
          </div>
      </div>
      {isActive && <Modal setActive={setActive} isActive={isActive}/>}
    </div>
  );
}

export default App;
