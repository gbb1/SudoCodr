import { onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import auth from '../firebase';


// export interface IAuthRouteProps {};

// const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
//   const { children } = props;
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     AuthCheck();
//     return () => AuthCheck();
//   }, [auth])

//   const AuthCheck = onAuthStateChanged(auth, (user) => {
//     if (user) {
//       setLoading(false);
//     } else {
//       console.log('unauthorized');
//       navigate('/login');
//     }
//   });

//   if (loading) return <div></div>

//   return (
//     <>{children}</>
//   )
// }

// export default AuthRoute;