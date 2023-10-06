import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../ContextApi/AuthContextProvider"

export const GetmensProducts = (orderby,query)=>{
         

    if(orderby===""){
      return axios({
        method:"get",
        url:`https://mock-server-json-x067.onrender.com/mensProducts`,
        
          params:{
            q:query
          }
        
       
      })
    }
      return axios({
        method:"get",
        url:`https://mock-server-json-x067.onrender.com/mensProducts`,
        params:{
          q:query,
          _sort:"price",
          _order:orderby
        }
      })
}

export const GetWomensProducts = (orderby,query)=>{
  if(orderby===""){
    return axios({
      method:"get",
      url:`https://mock-server-json-x067.onrender.com/womensProducts`,
      params:{
        q:query
      }
    
    })
  }
  return axios({
    method:"get",
    url:`https://mock-server-json-x067.onrender.com/womensProducts`,
    params:{
      _sort:"price",
      _order:orderby
    }
  })
}

export const GetKidsProducts = (orderby,query)=>{
  if(orderby===""){
    return axios({
      method:"get",
      url:`https://mock-server-json-x067.onrender.com/kidsProducts`,
      params:{
        q:query
      }
    })
  }
  return axios({
    method:"get",
    url:`https://mock-server-json-x067.onrender.com/kidsProducts`,
    params:{
      _sort:"price",
      _order:orderby
    }
  
  })
}

export const Cartdata = (data)=>{
  // console.log(data)
  return axios({
    method:"post",
    url:`https://mock-server-json-x067.onrender.com/cart`,
    data:data
  })
}
export const Cartdataget = ()=>{
 
  return axios({
    method:"get",
    url:`https://mock-server-json-x067.onrender.com/cart`,
    
  })
}

export const CartDelete = (id)=>{
  return axios({
    method:"delete",
    url:`https://mock-server-json-x067.onrender.com/cart/${id}`,
    
  })
}

export const getdataforproddetails = (id)=>{
  return axios({
      method:"get",
      url:`https://mock-server-json-x067.onrender.com/mensProducts/${id}`
  })
}
export const getdataforproddetails1 = (id)=>{
  return axios({
      method:"get",
      url:`https://mock-server-json-x067.onrender.com/womensProducts/${id}`
  })
}
export const getdataforproddetails2 = (id)=>{
  return axios({
      method:"get",
      url:`https://mock-server-json-x067.onrender.com/kidsProducts/${id}`
  })
}

export const DeletecartItem = ()=>{
  // const {arr} = useContext(AuthContext)
  // for(let i=0; i<arr.length; i++){
  //   let id = arr[i]
  //   console.log(id)
  //   CartDelete(id)
  // }
 
}



export const userLoginPost= (obj)=>{
  const{email,password,name,age} = obj

  return axios({
      method:"post",
      url:"https://mock-server-json-x067.onrender.com/users",
      data:{
          name,
          age,
          email,
          password,
      }
  })
}

export const userLoginGet = (obj)=>{
  const{email,password} = obj
  return axios({
      method:"get",
      url:"https://mock-server-json-x067.onrender.com/users",
      params:{
          _email:email,
          _password:password
      }
  
  })
}




//--------------------------------------------------Admin Req----------------------------------------------

export const HandleGEtOrder = ()=>{
  return axios({
    method:"get",
    url:`https://mock-server-json-x067.onrender.com/cart`
  })
}