import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Template function for structuring HTML.
 * 
 * @param {string} title - The page title.
 * @param {React.ReactNode} children - HTML that makes up the body.  
 * @returns {React.ReactNode} - The HTML structure.
 */
export default function Template({ title, children }) {
  return (
    <div className="page-wrapper">
      <Header />
       <main>
          <h2 className="title">{title}</h2>
          <div className="children">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

Template.propTypes = {
  title: PropTypes.string.isRequired,
};

