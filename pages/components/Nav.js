import React from 'react';
import navStyles from '/styles/Nav.module.css';
import Link from 'next/link'

const Nav = ({ linksList }) => {
  return (
    <div className={navStyles.nav}>

        {
        React.Children.toArray(
          linksList.map(
            (link) => (
                <Link key={link.key} href={link.linkTo}>{link.text}</Link>
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