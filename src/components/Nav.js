import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Nav = ({ linksList }) => {
  return (
    <div className="nav">

        {
        React.Children.toArray(
          linksList.map(
            (link) => (
              link.linkTo.includes("#") ? <HashLink to={link.linkTo}>{link.text}</HashLink> : <Link to={link.linkTo}>{link.text}</Link>
            )
        )
        )}

    </div>
  )
}

Nav.defaultProps = {

  linksList: []

}

export default Nav