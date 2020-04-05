import React from 'react'
import { Redirect, Route } from "react-router";



const PrivateRoute = ({ component: Component, ...props }) => {
    return (
        <Route
            {...props}
            render={innerProps =>
                localStorage.getItem("token") ? (
                <Component {...innerProps} />
                ) : (
                <Redirect
                    to={{pathname: "/" }}
                />
                )
            }
         />
    )
}

export default PrivateRoute





// const PrivateRoute = ({ component: Component, ...props }) => {
//   return (
//     <Route
//       {...props}
//       render={innerProps =>
//         localStorage.getItem("Token") ? (
//           <Component {...innerProps} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );