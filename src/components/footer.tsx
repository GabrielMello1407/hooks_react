import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importando os ícones do React Icons
import './styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://github.com/GabrielMello1407"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub size={24} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielmellomoraes/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>
        </div>

        <div className="developer-info">
          <p>
            Desenvolvido por{' '}
            <span className="developer-name">Gabriel Mello</span>
            <br />
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
