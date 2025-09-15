import React from 'react';
import './CoreValues.css';
import { Heading } from '../Typography/Typography';

export const CoreValues = ({ coreValues }) => {
  return (
    <div className="core-values-section">
        <div className="core-values-container">
        <Heading level={1} className="title">NHỮNG GIÁ TRỊ MÀ CHÚNG TÔI THEO ĐUỔI</Heading>
        <div className="value-container">
            {
                coreValues.values.map(item => (
                    <div key={item.id} className="value">
                        <img src={require(`../../mocks` + item.image)} alt={item.id} className="value-image" />
                        <p className="value-text">{item.value}</p>
                    </div>
                ))
            }
        </div>
    </div>
    </div>
  )
}
