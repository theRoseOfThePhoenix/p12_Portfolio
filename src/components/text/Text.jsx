/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

function Text({ title, content }) {
  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((item, index) => (
        <li className="projet_paragraphe" key={index}>
          {item}
        </li>
      ));
    }
    return <p className="projet_paragraphe">{content}</p>;
  };
  return (
    <div>
      <h3 className="projet_sou-titre">{title}</h3>
      {renderContent()}
    </div>
  );
}

Text.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default Text;
