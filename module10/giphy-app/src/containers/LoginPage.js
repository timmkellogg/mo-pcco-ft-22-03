import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

function LoginPage() {
    const auth = useAuth();
    const navigate = useNavigate();

    const login = () => {
        auth.signin(() => {
            navigate('/saved')
        })
    }

    return (
        <div>
            <h4>Login</h4>
            <form onSubmit={login}>
                <input placeholder='username' />
                <input placeholder='password' type='password' />
                <button>login</button>
            </form>
        </div>
    )
}

export default LoginPage