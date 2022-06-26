import { useState } from 'react';

const UserContextProvider = ({ children }) => {




    return (
        <UserContext.Provider value={{

        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider