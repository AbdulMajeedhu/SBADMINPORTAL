// vid 47 51:00
import { children, createContext, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({children}) => {
    let [user,setUser] = useState({name:"person 1",age:20,position:"Developer"}); //1:01:45
    let [product,setProduct] = useState({name:"maju",age:20,position:"Developer"});
    
    return (
        <UserContext.Provider value={{ user , setUser,product,setProduct}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContext;
//provider yaaruna data provide pantravanga

// 1:00:33
// context its a wrapper. 
//used to share data one component to another component
//context use panni oru component la irunthu innoru component kku data va transfer pannikkalam
//and ore data va context la write panni ella compont kkum data va anuppalam `