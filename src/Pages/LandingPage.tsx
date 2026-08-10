import {useState} from 'react';
import NavBar from '../components/NavBar';
import Signup from '../components/SignUp';

const LandingPage = () => {
  
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="flex h-screen w-full bg-linear-to-b from-black to-white">
      <NavBar setOpenForm={setOpenForm}/>
      <Signup openForm={openForm}/>
    </div>
  );
};

export default LandingPage;