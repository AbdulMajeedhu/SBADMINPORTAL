import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function Book() {
    // let books = [
    //     { id: 1,name: "Person 1", position: 20,office: "Chennai", age: 20,  startdate: '12/01/22', salary: 3000 },
           
    //     { id: 2,     name: "Person 2",   position: 30,office: "mumbai", age: 34, startdate: '12/05/22', salary: 5000},
           
    //     {  id: 3,  name: "Person 3", position: 20, office: "madurai", age: 28,startdate: '19/06/22', salary: 4500 },
    // ]
      const [books,setBooks] = useState()
      
      useEffect(()=>{
          let fetchData = async()=>{
            let bookData = await axios.get("https://66dfea882fb67ac16f278b83.mockapi.io/api/users")
            console.log(bookData);
            setBooks(bookData.data)  
        }
        fetchData()
      },[])
    return (
        <><div className="container-fluid">


            <h1 className="h3 mb-2 text-gray-800">book Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank" 
                href="https://datatables.net">official DataTables documentation</a>.</p>
            <Link to="/PageUser" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-download fa-sm text-white-50"></i> Create User</Link>

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
                                    aria-controls="dataTable" /></label></div></div></div><div className="row"><div className="col-sm-12">
                            <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing="0" role="grid" 
                            aria-describedby="dataTable_info" style={{ width: "100%" }}>
                            <thead>
                                <tr role="row"><th className="sorting sorting_asc" tabIndex="0" aria-controls="dataTable" rowSpan="1" 
                                colSpan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" 
                                style={{ width: "57px" }}>Name</th><th className="sorting" tabIndex="0" 
                                aria-controls="dataTable" rowSpan="1" colSpan="1" 
                                aria-label="Position: activate to sort column ascending" 
                                style={{ width: "61px" }}>Position</th><th className="sorting" tabIndex="0" 
                                aria-controls="dataTable" rowSpan="1" colSpan="1" 
                                aria-label="Office: activate to sort column ascending" style={{ width: '49px' }}>Office</th>
                                <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" 
                                aria-label="Age: activate to sort column ascending" style={{ width: "31px" }}>Age</th>
                                <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1"
                                 aria-label="Start date: activate to sort column ascending" 
                                 style={{ width: "68px" }}>Start date</th><th className="sorting" tabIndex="0" 
                                 aria-controls="dataTable" rowSpan="1" colSpan="1" 
                                 aria-label="Salary: activate to sort column ascending" style={{ width: "67px" }}>Salary</th>
                                 </tr>
                            </thead>
                           
                            <tbody>
                                {
                                    books.map((book) => {
                                        return (
                                            <tr className="odd">
                                                <td className="sorting_1">{book.name}</td>
                                                <td>{book.position}</td>
                                                <td>{book.office}</td>
                                                <td>{book.age}</td>
                                                <td>{book.startdate}</td>
                                                <td>${book.salary}</td>
                                                <td>
                                                    <Link to={`/Page/view/${book.id}`} className="btn btn-sm btn-warning mr-2"  >View</Link>
                                                    <Link to="/Page/view/1" className="btn btn-sm btn-info mr-2" >Edit</Link>
                                                    <Link to="/Page/view/1" className="btn btn-sm btn-danger mr-2" >Delete</Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><ul className="pagination"><li className="paginate_Link book-item previous disabled" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx="0" tabIndex="0" className="book-link">Previous</a></li><li className="paginate_Link book-item active"><a href="#" aria-controls="dataTable" data-dt-idx="1" tabIndex="0" className="book-link">1</a></li><li className="paginate_Link book-item "><a href="#" aria-controls="dataTable" data-dt-idx="2" tabIndex="0" className="book-link">2</a></li><li className="paginate_Link book-item "><a href="#" aria-controls="dataTable" data-dt-idx="3" tabIndex="0" className="book-link">3</a></li><li className="paginate_Link book-item "><a href="#" aria-controls="dataTable" data-dt-idx="4" tabIndex="0" className="book-link">4</a></li><li className="paginate_Link book-item "><a href="#" aria-controls="dataTable" data-dt-idx="5" tabIndex="0" className="book-link">5</a></li><li className="paginate_Link book-item "><a href="#" aria-controls="dataTable" data-dt-idx="6" tabIndex="0" className="book-link">6</a></li><li className="paginate_Link book-item next" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx="7" tabIndex="0" className="book-link">Next</a></li></ul></div></div></div></div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}
export default Book