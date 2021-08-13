import React, { useState } from 'react'

let UserContext = React.createContext();

export default UserContext;

export function UserProvider({children}) {
    const [state, setState] = useState("hello");

    return <UserContext.Provider value={{state,setState}}>
        {children}
    </UserContext.Provider>
}