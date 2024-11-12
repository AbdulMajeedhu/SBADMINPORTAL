 function Shop(props){
    return(
        <div className='col-lg-4'>
        <div className="card" style={{ width: '18rem' }} />
        <img 
        // src={`https://picsum.photos/id/1/200/150?random=${Math.floor(Math.random()*100)}`} 
        src={`https://picsum.photos/200/150?random=${Math.floor(Math.random()*100)}`} 
         className="card-img-top"
          alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <h6 className="card-price">{props.data.price}</h6>
          <p className="card-text">Some quick example text to build on the 
          card title and make up the bulk of the card's content.
          </p>

          <button
           disabled={props.cardItem.some(obj => obj.id===props.data.id)} 
           onClick={() => props.handleAddCard(props.data.id)}
            className="btn btn-primary">Add Card</button>
        </div>
      </div> 
    )
};
export default Shop;

// export function CardItem(props){
//   return(
//       <li class="list-group-item d-flex justify-content-between align-items-start">
//       <div class="ms-2 me-auto">
//         <div class="fw-bold">{props.data.title}</div>
//         {props.data.price}
//       </div>
//       <span  onClick={()=>props.handleRemoveCard(props.data.id)}
//        class="badge text-bg-primary rounded-pill">X</span>
//     </li>
//   )
// };
//  CardItem;

 
// function App() {
//   const products =[
//     {
//       id: 1,
//       title: 'Samsung',
//       price: 30000,
//       // inCard: false
//     },
//     {
//       id: 2,
//       title: 'iphone',
//       price: 70000
//     },
//     {
//       id: 3,
//       title: 'one Plus',
//       price: 50000
//     },
//     {
//       id: 4,
//       title: 'Nokia',
//       price: 40000
//     },
//     {
//       id: 5,
//       title: 'BlueBerry',
//       price: 20000
//     },
//     {
//       id: 6,
//       title: 'Realme',
//       price: 18000
//     },
//   ]
//   const [cardItem, setCardItem] = useState([]);
//   const [total,setTotal]=useState("");
//   let handleAddCard = (id) => {
//    // alert(id)
//    const productIndex = products.findIndex(obj =>obj.id === id)
//    const product = products[productIndex]
//    product.inCard = true;
//    setCardItem([...cardItem,product])
//    setTotal(total + product.price )
//   };
//   let handleRemoveCard = (id)=>{
//     // alert(id)
//     const cardItemIndex = cardItem.findIndex(obj=>obj.id === id)
//     setTotal(total-cardItem[cardItemIndex].price)
//      cardItem.splice(cardItemIndex,1)
//      setCardItem([...cardItem])
//   }
//   return (
//     <div className='contain'>
//       <div className='row'>
//         <div className='col-lg-8'>
//           <div className='row'>
//             <div className='col-lg-12'>
//               <h3>Products</h3>
//             </div>
          
//           <div className='row'>
//             {           products.map((product) => {
//                 return (
//                   <Shop cardItem={cardItem} data={product}
//                    handleAddCard={handleAddCard}></Shop>
//                 )
//               })
//             }
//           </div>
//         </div>
//         </div>
//         <div className='col-lg-4'>
//           <div className='row'>
//             <div className='col-lg-12'>
//               <h3>Card</h3>
//             </div>
//           </div>
//           <div className='row'>
//             <div className='col-lg-12'>
//               <ol class="list-group list-group-numbered">
//                 {
//                   cardItem.map((item) => {
//                     return <CardItem data={item} handleRemoveCard={handleRemoveCard}></CardItem>
//                   })
//                 }
//               </ol>
//               <div className='col-lg-12'>
//                 <h1>Total :{total}</h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// };