import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthContextProvider';

const PrivateRoute = ({children}) => {
  const {isauth} = useContext(AuthContext)
  if(!isauth){
    return <Navigate to={"/login"} />
  }

  return children
}
export default PrivateRoute;