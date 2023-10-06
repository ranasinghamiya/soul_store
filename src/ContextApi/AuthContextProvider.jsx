import { createContext, useState } from "react"

export const AuthContext = createContext()


 const AuthContextProvider = ({children})=>{
 const [query , setquery] = useState("")
 const [cartData , setcartData] = useState([])
 const [adresstotal ,setAddresstotal] = useState(0)
 const[addressGst  , setAddressGst] = useState(0)
 const [showEmpty , setshowEmpty] = useState(false)
const  [arr,setarr] = useState([])
const [isauth , setisauth] = useState(false)
const [user , setuser] = useState("")
console.log(arr.length)
const handleLogin=()=>{
    setisauth(true)
    
}
const handleLogout=()=>{
    setisauth(false)
    setuser("")
}

    return <AuthContext.Provider value={
        {
            query,setquery,
            cartData , setcartData,
            adresstotal ,setAddresstotal,
            addressGst  , setAddressGst,
            showEmpty , setshowEmpty,
            arr,setarr,
            isauth,setisauth,handleLogin,handleLogout,setuser
        }
    }>{children}</AuthContext.Provider>
}
export default AuthContextProvider