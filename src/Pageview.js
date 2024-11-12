import { useParams, useSearchParams } from "react-router-dom";

// function Viewpage(){
  
//     // let params = useParams();
//     //console.log(params)
//     let{pageid} = useParams();
//     console.log(pageid)
//     return(
//    <div>Name : {pages[pageid-1].name} </div>
//     )
// };
// export default Viewpage;


//https://localhost:3000/portal/usr/view/1?name=aale&age=20
//protocal-domain-portal-route-parameter-query params




function Pageview() {
    let  books = [
        {
            id: 1,
            name:"Person 1",
            position:20,
            office:"Chennai",
            age:20,
            startdate :'15/01/22',
            salary:3000
        },
        {
            id: 2,
            name:"Person 2",
            position:22,
            office:"Cbe",
            age:23,
            startdate :'12/01/22',
            salary:3500
        },
        
        {
            id: 3,
            name:"Person 3",
            position:35,
            office:"Madurai",
            age:40,
            startdate :'12/08/22',
            salary:6000
        },
        
        
    ];
    // let params = useParams();
    //console.log(params)
    let{bookid} = useParams();
     console.log(bookid)
    let params = useParams();
    console.log(params);

    const [seacrchParams, setSearchParams] = useSearchParams()
    console.log(...seacrchParams)
    // let paramVal = new URLSearchParams(Object.fromEntries([...seacrchParams])).toString()

    // console.log(paramVal)
    return(
 <><div>Name : {books[bookid-1].name} </div>
    </>)
};
export default Pageview;