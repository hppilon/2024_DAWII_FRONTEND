import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
export default function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/Aula">DAW II</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Lojas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/cadastro-lojas">
                Cadastro
              </NavDropdown.Item>
              <NavDropdown.Item href="/listagem-lojas">
                Listagem
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Produtos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/cadastro-produtos">
                Cadastro
              </NavDropdown.Item>
              <NavDropdown.Item href="/listagem">Listagem</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Usuário" id="basic-nav-dropdown">
              <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
