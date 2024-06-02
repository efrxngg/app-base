import {useContext, useState} from 'react';
import {AppContext} from '../../contexts/project.context.tsx';
import {SimpleModal} from '../../components/Modal.tsx';


function Home() {
  const {title} = useContext(AppContext);
  const [open, setOpen] = useState(false);
  
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <div>{title} + ReactTS + Vite</div>
      <button className="border p-2 ui-button" onClick={() => setOpen(true)}>OpenModal</button>
      <SimpleModal onClose={() => setOpen(false)} open={open}>
        <div className="w-full h-full bg-white rounded-md px-3 py-2">
          Hello World
        </div>
      </SimpleModal>
    </div>)
    ;
}


export default Home;
