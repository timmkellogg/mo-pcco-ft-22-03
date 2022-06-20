import { useNavigate } from 'react-router-dom'

function LoginPage() {
    const navigate = useNavigate();

    const goSomewhere = () => {
        navigate('/')
    }

    return (
        <div>
            Login Page
            <button onClick={goSomewhere}>test me</button>
        </div>
    )
}

export default LoginPage