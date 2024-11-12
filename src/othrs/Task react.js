function TaskCard(props){
    return(
     
    
    <div class="col-lg-4">
      
    <div class="card mb-5 mb-lg-0" >
          <div class="card-body">
          
              
              <p class="card-title text-muted text-uppercase text-center">{props.value}</p>
              <span class="card-money text-center">{props.money}</span>
              <span >{props.validation}</span>  
              <li>{props.user}</li>
             <li>{props.storage}</li>
             <li>{props.publicprojects} </li>
             <li>{props.access}</li>
             <li>{props.privateprojects}</li>
             <li>{props.support}</li>
             <li>{props.subdomains}</li>
             <li>{props.tatus}</li>
         
             <div class="d-grid"> 
              <a href="/" class="btn btn-primary text-uppercase">Button</a>
           
            </div>
          </div>
        </div>
 
    </div>
)
};
export default TaskCard;

// function App(){
//   let products=[
//     {
//       value      :'FREE',
//       money      :'$0',
//       validation :'/month',
//       user       :'Single User',
//       storage    :'5GB Storage',
//       publicprojects   :'Unlimited Public Projects',
//       access     :"Community Access",
//       privateprojects:'Unlimited Private Projects',
//       support:'Dedicated Phone Support',
//       subdomains:'Free Subdomain',
//       status:'Monthly Status Reports',
//       mark:'<i class="fa-solid fa-xmark"></i>'
//     },
//     {
//       value      :'Plus',
//       money      :'$9',
//       validation :'/month',
//       user       :'5 Users',
//       storage    :'50GB Storage',
//       publicprojects   :'Unlimited Public Projects',
//       access     :"Community Access",
//       privateprojects:'Unlimited Private Projects',
//       support:'Dedicated Phone Support',
//       subdomains:'Free Subdomain',
//       status:'Monthly Status Reports',
//     },
//     {
//       value      :'Pro',
//       money      :'$49',
//       validation :'/month',
//       user       :'Unlimited Users',
//       storage    :'150GB Storage',
//       publicprojects   :'Unlimited Public Projects',
//       access     :"Community Access",
//       privateprojects:'Unlimited Private Projects',
//       support:'Dedicated Phone Support',
//       subdomains:'Unlimited Free Subdomains',
//       status:'Monthly Status Reports',
//     }
//   ]
//   return(
//     <div className="main">
//       <div className="navbar">
//          {
//           products.map((product)=>{
//               return <Task mark={product.mark} value={product.value} money={product.money} validation={product.validation} 
//               user={product.user} storage={product.storage} publicprojects={product.publicprojects} access={product.access}
//               privateprojects={product.privateprojects} support={product.support} subdomains={product.subdomains} status={product.status}></Task>
//           })
//          }
//       </div>
//     </div>
//   )
// }

/* <FontAwesomeIcon icon="fa-regular fa-check" />
<i class="fa-solid fa-xmark"></i>
<FontAwesomeIcon icon="fa-solid fa-xmark" /> */
/* <div className="card" style={{ width: '18rem '}}>
<div className="row">
  <section className="section">
  <p>{props.value}</p>
  <span>{props.money}</span>
  <span>{props.validation}</span>  
 <span>{props.user}</span>
 <h3>{props.storage}</h3>
 <h3>{props.publicprojects }</h3>
 <h3>{props.access}</h3>
 <h3>{props.privateprojects}</h3>
 <h3>{props.upport}</h3>
 <h3>{props.subdomains}</h3>
 <h3>{props.tatus}</h3>
 <button>BUTTON</button>
 </section>

</div>
</div> */

// LAST ONE
// let TaskCard=[
//   {
//     value      :'FREE',
//     money      :'$0',
//     validation :'/month',
//     user       :'Single User',
//     storage    :'5GB Storage',
//     publicprojects   :'Unlimited Public Projects',
//     access     :"Community Access",
//     privateprojects:'Unlimited Private Projects',
//     support:'Dedicated Phone Support',
//     subdomains:'Free Subdomain',
//     status:'Monthly Status Reports',
//     mark:'<i class="fa-solid fa-xmark"></i>'
//   },
//   {
//     value      :'Plus',
//     money      :'$9',
//     validation :'/month',
//     user       :'5 Users',
//     storage    :'50GB Storage',
//     publicprojects   :'Unlimited Public Projects',
//     access     :"Community Access",
//     privateprojects:'Unlimited Private Projects',
//     support:'Dedicated Phone Support',
//     subdomains:'Free Subdomain',
//     status:'Monthly Status Reports',
//   },
//   {
//     value      :'Pro',
//     money      :'$49',
//     validation :'/month',
//     user       :'Unlimited Users',
//     storage    :'150GB Storage',
//     publicprojects   :'Unlimited Public Projects',
//     access     :"Community Access",
//     privateprojects:'Unlimited Private Projects',
//     support:'Dedicated Phone Support',
//     subdomains:'Unlimited Free Subdomains',
//     status:'Monthly Status Reports',
//   },
//   // {
//   //   title:"free",
//   //   price:"$0",
//   //   features=[
//   //     {list:"unlimited user",class:""}
//   //   ]
//   // }  vid 36 29:45
// ]
// return(
//   <div className="main">
//     <div className="navbar">
//        {/* {
//         products.map((product)=>{
//             return <Task mark={product.mark} value={product.value} money={product.money} validation={product.validation} 
//             user={product.user} storage={product.storage} publicprojects={product.publicprojects} access={product.access}
//             privateprojects={product.privateprojects} support={product.support} subdomains={product.subdomains} status={product.status}></Task>
//         })
//        } */}
//       {
//         TaskCard.map((card)=>{
//           return <TaskCard data={card}></TaskCard>
//         })
//       }
//     </div>
//   </div>
// )
// }