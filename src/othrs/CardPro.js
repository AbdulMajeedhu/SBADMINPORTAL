export function CardPro(props) {
    return (
        <div className='col-lg-4'>
            <div class="card" style={{ width: '18rem' }}/>
                <img src={`https://picsum.photos/200/150?random=${Math.floor(Math.random()*100)}`}
                 class="card-img-top" 
                 alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.data.name}</h5>
                    <h5 class="card-title"> {props.data.price}</h5>
                    <p class="card-text">Some quick example text to build on the
                         card title and make up the bulk of the 
                         card's content.</p>
                    <button 
                    disabled={props.cardItem.some(obj => obj.id===props.data.id)}
                    onClick={()=>props.addPurchus(props.data.id)}
                     class="btn btn-primary">Add Purchus</button>
                </div>
            </div>
        
    )
};
export default CardPro;

// export function ListPro(props) {
//     return (
//         <li class="list-group-item d-flex justify-content-between align-items-start">
//             <div class="ms-2 me-auto">
//                 <div class="fw-bold">{props.data.name}</div>
//                 {props.data.price}
//             </div>
//             <span onClick={() => props.listRemove(props.data.id)}
//                 class="badge text-bg-primary rounded-pill">X</span>
//         </li>
//     )}
//  ListPro;

// function App() {
//     const products = [
//         {
//             id: 1,
//             name: 'OnePlus',
//             price: 40000,
//         },

//         {
//             id: 2,
//             name: 'MI',
//             price: 15000,
//         },
//         {
//             id: 3,
//             name: 'Samsung',
//             price: 35000,
//         },
//         {
//             id: 4,
//             name: 'Iphone',
//             price: 80000,
//         },
//         {
//             id: 5,
//             name: 'Nokia',
//             price: 12000,
//         },
//         {
//             id: 6,
//             name: 'BlueBerry',
//             price: 30000,
//         },
//     ]
//     const [cardItem, setCardItem] = useState([]);
//     const [total, setTotal] = useState(0)
//     let addPurchus = (id) => {
//         const productIndex = products.findIndex(obj => obj.id === id);
//         const product = products[productIndex];
//         product.incard = true;
//         setCardItem([...cardItem, product]);
//         setTotal(total + product.price)

//     };
//     let listRemove = (id) => {
//         const cardItemIndex = cardItem.findIndex(obj => obj.id === id)
//         setTotal(total - cardItem[cardItemIndex].price)
//         cardItem.splice(cardItemIndex, 1)
//         setCardItem([...cardItem])
//     }
//     return (
//         <div className='contain'>
//             <div className="row">
//                 <div className="col-lg-8">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <h2>PRODUCTS</h2>
//                         </div>
//                         <div className="row">
//                             {
//                                 products.map((product) => {
//                                     return (
//                                         <CardPro cardItem={cardItem}
//                                             data={product} addPurchus={addPurchus} />

//                                     )
//                                 })
//                             }
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-4">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <h2>BUY LIST</h2>
//                         </div>
//                     </div>
//                     <div className='row'>
//                         <div className='col-lg-12'>
//                             <ol class="list-group list-group-numbered">
//                                 {
//                                     cardItem.map((item) => {
//                                         return <ListPro data={item} listRemove={listRemove} />
//                                     })
//                                 }
//                             </ol>
//                             <div className='col-lg-12'>
//                                 <h2>Total:{total}</h2>
//                             </div>
//                         </div>
//                     </div>              
//                 </div>
//             </div>
//         </div>
//     )
// };
//  App