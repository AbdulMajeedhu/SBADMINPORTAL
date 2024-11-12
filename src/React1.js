// function React1(){
//     return(
//         <div>
//             <h1>Hello World</h1>
//             { 1* 2 * 3}
//         </div>
//     );
// }

function React1(props){
    return(
        <div>
            <h1>Hello From {props.name} {props.place}</h1>
            { 1* 2 * 3}
        </div>
    );
}

export default React1