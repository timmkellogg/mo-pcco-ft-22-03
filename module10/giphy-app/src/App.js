import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

import HomePage from './containers/HomePage'
import LoginPage from './containers/LoginPage'
import SavedPage from './containers/SavedPage'
import SearchPage from './containers/SearchPage'
import SignUpPage from './containers/SignUpPage'
import Navi from './components/Navi'
import RequireAuth from './components/RequireAuth'

import { AuthProvider } from './contexts/authContext'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Navi />
          <h1>Giphy App</h1>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />

            <Route element={<RequireAuth />}>
              <Route path='/search' element={<SearchPage />} />
              <Route path='/saved' element={<SavedPage />} />
            </Route>

            <Route path='*' element={<div>404. Page not found.</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
