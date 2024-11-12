function ProCard(props){
    return <div className="card" style={{ width: '18rem '}}>
    <img src="https://picsum.photos/100/80" className="card-img-top" alt="..." ></img>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
};
export default ProCard;

/* <div className="col-lg-3">
   <p>ennadah epti life poittu irukku. Ethathu job iruntha soltra . </p>
   </div>
   <div className="col-lg-3">
   <p>ennadah epti life poittu irukku. Ethathu job iruntha soltra . </p>
   </div><div className="col-lg-3">
   <p>ennadah epti life poittu irukku. Ethathu job iruntha soltra . </p>
   </div> */ 

   // function App() {
    //   return (
    //     <div className="container">
    //       <div className="row">
    //         <Card title="one plus"></Card>
    //         <Card title="samssung"></Card>
    //         <Card title="nokia"></Card>
    //       </div>
    //     </div>
    //   )
    // }

    // function App() {
    //   let products  = [
    //     {
    //       title : 'samsung'
    //     },
    //     {
    //       title:'one plus'
    //     },
    //     {
    //       title:'nokia'
    //     },
    //     {
    //       title:'iphone'
    //     },
    //     {
    //       title:'blue berry'
    //     },
    //     {
    //       title:'realme'
    //     }
    //   ]
    //   return (
    //     <div className="container">
    //       <div className="row">
    //        {
    //         products.map((products)=>{
    //               return <Card title={products.title}></Card> 
    //               // intha contion la = "product" use panna athu oru string
    //         })
    //        }
    //       </div>
    //     </div>
    //   )
    // }



    /* /* section.pricing {
  background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF);
} */
/* 
.pricing .card {
  border: none;
  border-radius: 1rem;
  transition: all 0.2s;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.pricing hr {
  margin: 1.5rem 0;
}

.pricing .card-title {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  letter-spacing: .1rem;
  font-weight: bold;
}

.pricing .card-price {
  font-size: 3rem;
  margin: 0;
}

.pricing .card-price .period {
  font-size: 0.8rem;
}

.pricing ul li {
  margin-bottom: 1rem;
}

.pricing .text-muted {
  opacity: 0.7;
}

.pricing .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  opacity: 0.7;
  transition: all 0.2s;
} */

/* Hover Effects on Card */

/* @media (min-width: 992px) {
  .pricing .card:hover {
    margin-top: -.25rem;
    margin-bottom: .25rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
  }

  .pricing .card:hover .btn {
    opacity: 1;
  }
} */


/* .mark-done{
  text-decoration: line-through;
} */
 /* .outerBox{
   display: grid;
   grid:center ;
   align-items: center;
 /* } */
/* element.style{
.card-header:first-child {
    border-radius: calc(.35rem - 1px) calc(.35rem - 1px) 0 0;
}
.pb-3, .py-3 {
    padding-bottom: 1rem !important;
       
}
.pt-3, .py-3 {
    padding-top: 1rem !important;
}
.align-items-center {
    align-items: center !important;
}
.justify-content-between {
    justify-content: space-between !important;
}
.flex-row {
    flex-direction: row !important;
}
.d-flex {
    display: flex !important;
}
.card-header {
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: #f8f9fc;
    border-bottom: 1px solid #e3e6f0;
}
*, ::after, ::before {
    box-sizing: border-box;
}
user agent stylesheet
div {
    display: block;
    unicode-bidi: isolate;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #e3e6f0;
    border-radius: .35rem;
}
body {
    margin: 0;
    font-family: Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #858796;
    text-align: left;
    background-color: #fff;
}
:root {
    --blue: #4e73df;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #e74a3b;
    --orange: #fd7e14;
    --yellow: #f6c23e;
    --green: #1cc88a;
    --teal: #20c9a6;
    --cyan: #36b9cc;
    --white: #fff;
    --gray: #858796;
    --gray-dark: #5a5c69;
    --primary: #4e73df;
    --secondary: #858796;
    --success: #1cc88a;
    --info: #36b9cc;
    --warning: #f6c23e;
    --danger: #e74a3b;
    --light: #f8f9fc;
    --dark: #5a5c69;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
}
*, ::after, ::before {
    box-sizing: border-box;
}
*, ::after, ::before {
    box-sizing: border-box;
}} */ 