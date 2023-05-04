import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid className="container-header">
      <div>
        <BsGithub
          className="icon"
          onClick={() => window.open("https://github.com/pendragonarthur")}
        />
      </div>
      <div>
        <BsLinkedin
          className="icon"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/arthur-quaresma-670873214/"
            )
          }
        />
      </div>
    </Container>
  );
};

export default Header;
