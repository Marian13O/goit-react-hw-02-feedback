import PropTypes from 'prop-types';
import style from './Section.module.css';
import React from 'react';

function Section({ title, children }) {
  return (
    <>
      <section className={style.feedback}>
        <h2 className={style.feedbacktitle}> {title}</h2>
        {children}
      </section>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
