import { useNavigate } from 'react-router-dom';
import {auth} from '../../firebase';
import { signOut } from 'firebase/auth';
import CloseIcon from '@mui/icons-material/Close';
import './style.css'

function SignoutModel({setIsClicked}) {

    const navigate = useNavigate();
  
    const handleClick = async()=>{
      try{
         await signOut(auth);
         navigate('/login');
        localStorage.removeItem('user');
      }catch(e){
        console.log("Error is : ",e);
      }
      
    }
    return (
      <div className='logOut'>
          <div style={{display:"flex",justifyContent:"end"}}>
            <CloseIcon onClick={()=> setIsClicked(false)}/>
          </div>
          <p>Do you want to log out ?</p>
          <button  onClick={handleClick}className='logOut-btn'>Log Out</button>
      </div>
    )
  }
  
  export default SignoutModel