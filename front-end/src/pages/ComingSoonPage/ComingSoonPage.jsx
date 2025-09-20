import "./ComingSoonPage.css";
import { Footer } from "../../components/Footer";
import { timeManagementImg } from '../../assets/images/coming-soon';
import { Heading } from '../../components/Typography';

export const ComingSoonPage = () => {
  return (
    <div className="coming-soon-page">
      <div className="coming-soon-section">
        <img src={timeManagementImg} alt="" />
        <Heading className="title" level={1}>COMING SOON...</Heading>
      </div>
      <Footer />
    </div>
  )
}
