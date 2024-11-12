function PriceCard({data}) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{data.title}</h5>
                    <h6 className="card-price text-center">${data.price}<span class="period">/month</span></h6>
                         <hr></hr>
                        <ul className="fa-ul">
                            
                          {
                             data.features.map((list) => {
                                return <li className={list.hide ? '': 'text-muted'}>
                                    <span className="fa-li">
                                        <i className="fas fa-check"></i>
                                        </span>
                                        {list.name}
                                </li>
                             })
                                
                            }
                          
                            {/* <li><span class="fa-li"><i class="fas fa-check"></i></span>{data.storage  }</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>{data.publicprojects }</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>{data.access}</li>
                            <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{data.privateprojects  }</li>
                            <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{data.suppor}</li>
                            <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{data.subdomains}
                            </li>
                            <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{data.status}
                               </li> */}
                        </ul>
                        <div className="d-grid">
                            <a href="#" className="btn btn-primary text-uppercase">Button</a>
                        </div>
                </div>
            </div>
        </div>
    )
};

export default PriceCard;

function App(){

    let priceCard = [
      {
           title    :'FREE',
            price     :'0',
           features : [
                 {
                  name:'Single User',
                hide:true,
                 },
                 {
                  name:'5GB Storage',
                hide:true,
                 },
                 {
                  name:'Unlimited Public Projects',
                hide:true,
                 },
                 {
                  name:'Community Access',
                hide:true,
                 },
                 {
                  name:'Unlimited Private Projects',
                hide:false,
                 },
                 {
                  name:'Dedicated Phone Support',
                hide:false,
                 },
                 {
                  name:'Free Subdomain',
                hide:false,
                 },
                 {
                  name:'Monthly Status Reports',
                hide:false,
                 },
           ]
          },
          {
            title      :'Plus',
            price       :'9',
            features : [
              {
               name:'5 Users',
             hide:true,
              },
              {
               name:'50GB Storage',
             hide:true,
              },
              {
               name:'Unlimited Public Projects',
             hide:true,
              },
              {
               name:'Community Access',
             hide:true,
              },
              {
               name:'Unlimited Private Projects',
             hide:true
              },
              {
               name:'Dedicated Phone Support',
             hide:true
              },
              {
               name:'Free Subdomain',
             hide:false,
              },
              {
               name:'Monthly Status Reports',
               hide:false,
              },
            ]
          
          },
          {
            title     :'Pro',
            price       :'49',
            features : [
              {
               name:'Unlimited Users',
             hide:true
              },
              {
               name:'150GB Storage',
             hide:true
              },
              {
               name:'Unlimited Public Projects',
             hide:true
              },
              {
               name:'Community Access',
             hide:true
              },
              {
               name:'Unlimited Private Projects',
             hide:true
              },
              {
               name:'Dedicated Phone Support',
             hide:true
              },
              {
               name:'Unlimited Free Subdomain',
             hide:true
              },
              {
               name:'Monthly Status Reports',
             hide:true
              },
            ]
           
          },
    ]
    return(
  
      <section className="pricing py-5">
    <div className="container">
      <div className="row">
           {
            priceCard.map((card)=>{
                 return <PriceCard data={card}></PriceCard>
            })
           }
      </div>
      </div>
    
  </section>
    )
  };