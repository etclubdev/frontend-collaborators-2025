import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Faqs.css';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import { Heading } from '../Typography/Typography';

export const Faqs = ({ faqs }) => {
  return (
    <div className="faqs-section">
      <div className='faqs-header'>
        <Heading className="faqs-title" level={1}>NHỮNG CÂU HỎI THƯỜNG GẶP</Heading>
        <p className="faqs-desc">Dưới đây là tổng hợp một số câu hỏi thường gặp nhất trong đợt Tìm kiếm CTV của ET Club. Hy vọng các thông tin sẽ có thể hỗ trợ bạn trong quá trình ứng tuyển.</p>
      </div>
      <div className="questions-container">
        {
          faqs?.map(item => {
            return (
              <Question key={item.id} item={item} />
            )
          })
        }
      </div>
    </div>
  )
}

const Question = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const questionRef = useRef(null);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      id={item.id}
      className="question-container"
    >
      <div className={`question ${isOpen ? 'active' : ''}`} onClick={toggleAnswer} ref={questionRef}>
        <Heading level={3} className="question-content">{item.question}</Heading>
        {isOpen
          ? <RemoveCircleRoundedIcon sx={{ color: '#787777ff' }} />
          : <AddCircleRoundedIcon sx={{ color: '#787777ff' }} />}
      </div>
      <CSSTransition
        in={isOpen}
        timeout={400}
        classNames="answer"
        unmountOnExit
      >
        <div className="answer">
          <p dangerouslySetInnerHTML={{ __html: item.answer }} />
        </div>
      </CSSTransition>
    </div>
  );
};
