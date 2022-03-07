import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin
} from "react-icons/ai";
import { Container } from './styles';


export function Footer() {

  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>Voltar ao topo</button>

        <section>
          <AiOutlineInstagram
            onClick={() => handleRedirect("https://instagram.com/rellysondouglaas")}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect("https://github.com/rellyso")}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect("https://linkedin.com/rellyson-douglas")}
          />
        </section>
      </div>


    </Container>
  );
};