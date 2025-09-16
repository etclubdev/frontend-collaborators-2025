import React from 'react';
import './Typography.css';

const Heading = ({ level, children, className }) => {
  const Tag = `h${level}`;
  return <Tag className={`${Tag} ${className}`}>{children}</Tag>
}

const Paragraph = ({ children, className }) => (
  <p className={"p " + className}>{children}</p>
);

export { Heading, Paragraph };