function Productinsb({data}){
    return(
        <div className="card" style={{width: "15rem"}}>
        <img src={`https://picsum.photos/200/300?random${Math.floor(Math.random()*100)}`} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <h5 className="card-title">{data.price}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary"> Add Buy</a>
        </div>
      </div>
    )
};
export default Productinsb;