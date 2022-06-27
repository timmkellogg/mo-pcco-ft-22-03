import { useState } from 'react'

function useProvideAuth() {
    const [user, setUser] = useState()

    const signin = (cb) => {
        setUser('tim')
        cb()
    }

    const signout = (cb) => {
        setUser(null)
        cb()
    }

    return {
        user,
        signin,
        signout
    }
}

export default useProvideAuth