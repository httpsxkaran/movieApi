import React, { createContext } from 'react'
export const userData = createContext(); 
function UserContext({children}) {
  const store = {
    name : "Karan", age: 21, course: "BCA"
  }
    return (
    <userData.Provider value={store}>
        {children}
    </userData.Provider>
  )
}

export default UserContext