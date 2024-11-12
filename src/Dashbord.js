import React from "react";
import Card from "./Cardsb";

function Dashboard(){
    const cards=[
        {
            title:'Earnng Daily',
            amount: 3000,
            theme:"primary"
        },
        {
            title:'Earnng Weekly',
            amount: 12000,
            theme:"success"
        },
        {
            title:'Earnng Monthly',
            amount: 39000,
            theme:"info"
        },
        {
            title:'Earnng Yearly',
            amount: 69000,
            theme:"warning"
        },
    ]
    return(
        <>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div className='row'>
                       { cards.map((card) => {
                         return <Card data={card} />
                        })
                    }
                    </div>
        </>
    )
}

export default Dashboard;

{/* <></> -> fragement */}