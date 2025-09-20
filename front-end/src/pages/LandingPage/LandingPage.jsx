import "./LandingPage.css";
import { SeekingBanner } from "../../components/SeekingBanner";
import { Statistics } from "../../components/Statistics";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CoreValues } from "../../components/CoreValues";
import { SeekingProcess } from "../../components/SeekingProcess";
import { CollaboratorForm } from "../../components/CollaboratorForm";
import { CountDownTimerV2 } from "../../components/CountDownTimerV2";
import { Slider } from "../../components/Slider";
import { Faqs } from "../../components/Faqs";

import { useQuery } from '@tanstack/react-query';
import { getAchievement } from '../../api/achievement.service';

import { collaborators, department, faqs } from '../../assets/data';

const { form, seekingInfo, coreValues, joinUsInfo, numbersInfo, seekingProcessInfo } = collaborators;

export const LandingPage = () => {
  const { data } = useQuery({
    queryKey: ['achievements'],
    queryFn: getAchievement,
    select: (res) => res?.data?.filter((item) => item.visible) || [],
  });

  return (
    <div className="landing-page">
      {/* <Navbar /> */}
      <SeekingBanner />
      <div className="landing-page-section">
        <Statistics statistics={data}/>
        <CoreValues coreValues={coreValues}/>
        <Slider data={department} activeSlide={2}/>
        <Faqs faqs={faqs}/>
        <SeekingProcess seekingProcessInfo={seekingProcessInfo}/>
        <hr className="division-bar"/>
        <CountDownTimerV2 targetDate={seekingInfo.date} />
        <hr className="division-bar"/>
        <CollaboratorForm form={form} seekingInfo={seekingInfo}/>
      </div>
      <Footer />
    </div>
  )
}
