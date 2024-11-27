import React from 'react'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Nav = ({ linksList, style }) => {

    return (
        <div className="container" style={style} >

            {React.Children.toArray(
                linksList.map(
                    (link) => (
                        link.icon === '' ? 
                            link.linkTo.includes("#") ? <HashLink to={link.linkTo} className="noIcon">{link.text}</HashLink> : <Link to={link.linkTo} className="noIcon">{link.text}</Link>
                        :
                            <a className="hasIcon" key={link.key} href={link.linkTo} target='_blank' rel='noreferrer'> <img className="icon" src={link.icon} alt='' /> </a>
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