function StateManagement (){

};
export default StateManagement;

function App(){
    //Hooks
    const [num , setNum] = useState(0);
    const [textVal ,setTextVal] = useState('');
    const [myList,setList] = useState([]);
    let  addItem = ()=>{
     // setList([...myList,{name:"New Name"}]);
     setList([...myList,{name:`New ${myList.length}`}])
    }
  
       return(
        <div>
          {num}
          <button onClick={() =>setNum(num + 1)}>Inc</button>
          <input type='text' onChange={(e)=>setTextVal(e.target.value)} />
          <label>{textVal}</label><br></br>
          <button onClick={addItem}>Change</button>
          <ul>
            {
              myList.map((item)=>{
                return <li>{item.name}</li>
              })
            }
          </ul>
        </div>
       )
  };



  import logo from './logo.svg';
import './App.css';

import PriceCard from '../PriceCard';
import 'font-awesome/css/font-awesome.css'
import {useState} from 'react';

function App(){
 
   const [list,setList] = useState([]);
   const [currentTask,setCurrentTask] = useState("")
   let addTask = () => {
        setList([...list,{id:list.length + 1 , name:currentTask,isDone:false}])
        //setCurrentTask("")
   }
   let markDone=(id)=>{
   
        let itemIndex = list.findIndex[(obj) => obj.id === id];
        list[itemIndex].isDone = true;
        setList([...list])
   }
     return(
       <div>
        <input type="text" onChange={(e)=>setCurrentTask(e.target.value)}/>
        <button onClick={addTask}>Add Task</button>
        <ul>
          { 
          
            list.map((item)=>{
              return (<li className={item.isDone ? "mark-done" : ""}>
                {item.name} - 
              <button onClick={()=> markDone(item.id)}>Done</button></li>
            )})
            
          }
        </ul>
       </div>
     )
};


function App(){
  const [list,setList]=useState([]);
 const[currentTask,setCurrentTask]=useState("");

 let addTask = ()=>{
    setList([...list,{name:currentTask}])
 }
 return(
  <div>
    <input type='text' onChange={(e)=>setCurrentTask(e.target.value)}/>
    <button onClick={addTask}>Add Task</button>
    <ul>
      {
        list.map((item)=>{
          return 
          <li>{item.name}</li>
        })
      }
    </ul>
  </div>
 )}