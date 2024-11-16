import { useParams, useSearchParams } from "react-router-dom";
import UserContext from "./UserContext";
import {useContext} from 'react' 

// function ViewUser(){
  
//     // let params = useParams();
//     //console.log(params)
//     let{userid} = useParams();
//     console.log(userid)
//     return(
//    <div>Name : {users[userid-1].name} </div>
//     )
// };
// export default ViewUser;


//https://localhost:3000/portal/usr/view/1?name=aale&age=20
//protocal-domain-portal-route-parameter-query params




function ViewUser(){
    let  users = [
        {
            id: 1,
            name:"Person 1",
            position:20,
            office:"Chennai",
            age:20,
            startdate :'12/01/22',
            salary:3000
        },
        {
            id: 2,
            name:"Person 2",
            position:30,
            office:"mumbai",
            age:34,
            startdate :'12/05/22',
            salary:5000
        },
        {
            id: 3,
            name:"Person 3",
            position:20,
            office:"madurai",
            age:28,
            startdate :'19/06/22',
            salary:4500
        },
    ];
    let userData = useContext(UserContext); // vid 47 
    // let params = useParams();
    //console.log(params)
    let{userid} = useParams();
    // console.log(userid)
    let params = useParams();
    console.log(params);

    const [seacrchParams, setSearchParams] = useSearchParams()
    console.log(...seacrchParams)
    // let paramVal = new URLSearchParams(Object.fromEntries([...seacrchParams])).toString()

    // console.log(paramVal)
    return(
   <div>Name : {users[userid-1].name}
   {userData.user.name}
   <button onClick={()=>{
    userData.setUser({name:"majee",age:23,position:"dev"})
   }}>Click</button>
    </div>
    )
};
export default ViewUser;