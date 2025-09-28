import './Footer.css';
import { horizontalLogo } from '../../assets/images/logos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareYoutube, faSquareLinkedin, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { footerLinks } from '../../constants';

export const Footer = () => {
  const getSocialIcon = (id) => {
    switch (id) {
      case 'facebook-group':
      case 'facebook':
        return faSquareFacebook;
      case 'linkedin':
        return faSquareLinkedin;
      case 'youtube':
        return faSquareYoutube;
      default:
        return null;
    }
  };

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-aboutET">
          <img className='footer-aboutET-logo' src={horizontalLogo} alt="Logo CLB Công Nghệ Kinh Tế" />
          <div className="footer-aboutET-title" style={{ fontFamily: "Eurostile" }}>CLB Công Nghệ Kinh Tế</div>
          <div className="footer-aboutET-desc">
            Trực thuộc Liên Chi hội Sinh viên khoa Công nghệ thông tin kinh doanh, Đại học Kinh tế TP. Hồ Chí Minh
          </div>
        </div>

        {footerLinks?.map((section) => (
          <div key={section.title} className="footer-item">
            <div className="footer-item-title">{section.title}</div>
            {section.links?.map((link) => link.external ? (
              <div key={link.id} className="footer-social">
                <div className="footer-social-icon">
                  <FontAwesomeIcon icon={getSocialIcon(link.id)} />
                </div>
                <a className="footer-social-link" href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
              </div>
            ) : (
              <a
                key={link.id}
                href={link.url} target="_blank" rel="noopener noreferrer"
                className={`footer-item-content ${link.id === 'ctv' ? 'ctv' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}

      </div>
      <div className="footer-bottom">
        <div className="footer-division-bar"></div>
        <p>Developed by Technical Department | ET Club</p>
      </div>
    </div>
  );
};

export default Footer;
