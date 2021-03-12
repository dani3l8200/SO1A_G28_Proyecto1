import "./Header.css"
import Zoom from 'react-reveal/Zoom';
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  return (
    // siempre debo solo de retornar un elemento "HTML" entre comillas porque esto  jsx 
    <div>
      <h1>
<Navbar>
<Zoom>   
  <Navbar.Brand style={{color:"white"} }> <h1>SYSTEM MONITOR</h1></Navbar.Brand>
  </Zoom>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text style={{color:"white" , fontSize:14}}>
      <Zoom>
      GRUPO 28
      </Zoom>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
      </h1>
    </div>
  )
}
export default Header;