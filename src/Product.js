import { Link } from "react-router-dom"
import Productinsb from "./Productinsb"

function Product(){
    const cards=[
        {
            title:"Red Ranger",
            price:"1000 USD",
        },
        {
            title:"Blue Ranger",
            price:"800 USD",
        },
        {
            title:"Orange Ranger",
            price:"500 USD",
        },
        {
            title:"White Ranger",
            price:"1200 USD",
        },
        {
            title:"Woulf",
            price:"2000 Usd",
        },
        {
            title:"Black Tunder",
            price:"5500 USD",
        },
    ]
    return(
       <><div>Product</div>
       <Link to="/"><button>Bake to home page</button></Link>
        {
            cards.map((card)=>{
             return(
                <Productinsb data={card} />
             )
            })
        }
        </>
    )
}
export default Product