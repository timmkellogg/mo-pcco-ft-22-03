import { Navbar, NavbarBrand, Collapse, NavLink, NavItem, Nav } from 'reactstrap';
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

function Navi() {
  const auth = useAuth();

  return (
    <Navbar color="light" light expand="xs">
      <NavbarBrand tag={Link} to="/">Giphy App</NavbarBrand>
      <Collapse navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/search">Search</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/saved">Saved</NavLink>
          </NavItem>
          <NavItem>
            {auth.user
              ? <NavLink onClick={auth.signout}>Logout</NavLink>
              : <NavLink tag={Link} to="/login">Login</NavLink>
            }
            
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Navi