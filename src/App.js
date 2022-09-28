
import './App.css';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@material-ui/core/Button';




function App() {

  //let count=1;
  //const state =useState();
  const[ count,setCout]=useState(1);


  

 
  const IncNum=()=>{

    setCout(count+1);

}
const DcNum=()=>{

 

   (count<=0? alert("you can't decreem more"): setCout(count-1))


}
 

  return (
    <>
    <div className='div'>
    
    <h1 >
    <button className="button" onClick={DcNum} >
      <DeleteIcon/>
      
    </button>{count} <button className="button"  onClick={IncNum} >
    <AddIcon/>
    </button>
    </h1>
    </div>
</>
  
  );
}

export default App;
