
import { useEffect } from "react"
import { Link, Params,useSearchParams } from "react-router-dom"
import { useState } from "react";
// import axios from "axios";
import axios from "./Axios";

import Lottie from 'react-lottie-player';


import animationData from './lottie/Animation - 1731580347524.json';


function User() {
    // let  users = [
    //     {  id: 1,   name:"Person 1",   position:20,  office:"Chennai", age:20,startdate :'12/01/22',salary:3000  },
    //     {  id: 2,ame:"Person 2", position:30, office:"mumbai", age:34, startdate :'12/05/22',salary:5000  },
    //     {  id: 3, name:"Person 3",    position:20,  office:"madurai", age:28,  startdate :'19/06/22',   salary:4500  }, ]
  
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false) // vid 46 1:03:00
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };  // vid 46 1:00:00
    
    let timer;
    // ON MOUNT
    useEffect(()=>{
            fetchData();
            // timer = setInterval(()=>{
            // console.log("Timer")
            // },1000)
            // window.localStorage.setItem("new","Hellooo")
            window.localStorage.setItem("new",JSON.stringify(users))
            
    }, []);  // []- Empty aah iruntha eppolam component load aagutho appolam excute aagumnu 
            
//     useEffect(()=>{
//        return () => {
//         clearInterval(timer)
//        }
//   },[]) 
    // useEffect(()=>{
    //       // when the useState is Updated
    //       // this useEffect will excute
    // },[users]) 
    const [seacrchParams, setSearchParams] = useSearchParams()
    let paramVal = new URLSearchParams(Object.fromEntries([...seacrchParams])).toString()

    // console.log(paramVal)
    // console.log(...seacrchParams)
    let fetchData = async () =>
        {
            setLoading(true)  // vid 46 1:03:00
        // let userData = await axios.get("https://66dfea882fb67ac16f278b83.mockapi.io/api/students")
        let userData = await axios.get(
            // `https://66dfea882fb67ac16f278b83.mockapi.io/api/students?sortBy=name&order=desc`
             `https://66dfea882fb67ac16f278b83.mockapi.io/api/students?${paramVal}`
        )
        // console.log(userData);
        setUsers(userData.data)
        setLoading(false) //vid 46 1:03:00
        }  

   let handleDelete = async (id) => {
    // eslint-disable-next-line no-restricted-globals
     let ask = confirm("do you ant to delete?")
     if(ask){
        // await axios.delete(`https://66dfea882fb67ac16f278b83.mockapi.io/api/students/${id}`) // userid
        await axios.delete(`/api/students/${id}`) // explained that vid 46 41:00
     };
     await axios.post(`https://66dfea882fb67ac16f278b83.mockapi.io/api/students`,{
        name:"aji",
        age:20
     },{
        headers : {
            "Auth" : "Taken",
            "from" : ""
        }    // vid 46 20:00
     })
     fetchData()
   }
    
//     //  ON DESTROY
//     useEffect(()=>{
//         return ()=>{ console.log("On Destrot")}
//     },[]);

//     const [val,setVal] = useState(0);
//     //  ON UPDATE
//     useEffect(()=>{
// //    this will execute only when val is changed
//     },[val])
  
    // console.log("Hello")
 


    return (
<><div className="container-fluid">
        {/* <button onClick={()=>setVal(val + 1)}>Click</button>    {val} */}

                    <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                    <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                    For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>
                    </p>
                        <Link to="/utilities/create" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                        <i className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
                     {
                        // loading ? <h1>Loading please wait...</h1>  :   //vid 46 1:03:04 ithu loading mention panna
                        loading ? <Lottie options={defaultOptions} height={400}
                        width={400}></Lottie>  :
                        <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row">
                                    <div className="col-sm-12 col-md-6"><div className="dataTables_length" id="dataTable_length">
                                        <label>Show <select name="dataTable_length" aria-controls="dataTable" 
                                        className="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option>
                                        <option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label>
                                        </div></div><div className="col-sm-12 col-md-6"><div id="dataTable_filter" className="dataTables_filter">
                                            <label>Search:<input type="search" className="form-control form-control-sm" placeholder="" 
                                            aria-controls="dataTable"/></label></div></div></div><div className="row"><div className="col-sm-12">
                                                <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing="0" role="grid" 
                                                aria-describedby="dataTable_info" style={{width:"100%"}}>
                                    <thead>
                                        <tr role="row"><th className="sorting sorting_asc" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" 
                                        aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{width:"60px"}}>Name</th>
                                        <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" 
                                        aria-label="Position: activate to sort column ascending" style={{width: "30px"}}>Position</th>
                                        <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" 
                                        aria-label="Office: activate to sort column ascending" style={{width: '49px'}}>Office</th><th className="sorting"
                                         tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Age: activate to sort column ascending" 
                                         style={{width: "31px"}}>Age</th>
                                        <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1"
                                         aria-label="Start date: activate to sort column ascending" style={{width:"68px"}}>Start date</th>
                                        <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" 
                                        aria-label="Salary: activate to sort column ascending" style={{width:"67px"}}>Salary</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>   
                                 {
                                    users.map((user)=>{
                                       return(
                                        <tr key={user.id} className="odd">
                                        <td className="sorting_1">{user.name}</td>
                                        <td>{user.position}</td>
                                        <td>{user.office}</td>
                                        <td>{user.age}</td>
                                        <td>{user.startdate}</td>
                                        <td>${user.salary}</td>
                                        <td>
                                            <Link to={`/utilities/view/${user.id}`} className="btn btn-sm btn-warning mr-2">View</Link>
                                            <Link to={`/utilities/view/edit/${user.id}`} className="btn btn-sm btn-info mr-2">Edit</Link>
                                            <button onClick={()=> handleDelete(user.id)} className="btn btn-sm btn-danger mr-2">Delete</button>
                                        </td>
                                    </tr>
                                       )
                                    })
                                 }
                              </tbody>
                                </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="dataTable" data-dt-idx="1" tabIndex="0" className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="2" tabIndex="0" className="page-link">2</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="3" tabIndex="0" className="page-link">3</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="4" tabIndex="0" className="page-link">4</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="5" tabIndex="0" className="page-link">5</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="6" tabIndex="0" className="page-link">6</a></li><li className="paginate_button page-item next" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx="7" tabIndex="0" className="page-link">Next</a></li></ul></div></div></div></div>
                            </div>
                        </div>
                    </div>
                     }

                  

                </div>
                </>

    )
}
export default User;
