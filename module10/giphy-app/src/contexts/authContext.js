import { createContext, useContext } from 'react'

import useProvideAuth from '../hooks/useProvideAuth'

const AuthContext = createContext(null)

function AuthProvider({ children }) {
    const auth = useProvideAuth();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext)
}

export { AuthProvider, useAuth }