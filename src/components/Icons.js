import React from 'react'
import '../styles/Icons.css'

const Icons = ({ linksList, style }) => {

    return (
        <div className="container" style={style} >

            {React.Children.toArray(
                linksList.map(
                    (link) => (
                        link.icon === '' ? 
                            <a key={link.key} href={link.linkTo} className="noIcon" target='_blank' rel='noreferrer'>{link.text}</a>
                        :
                            <a key={link.key} href={link.linkTo} style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer'> <img className="icon" src={link.icon} alt='' /> </a>
                    )
                )
            )}

        </div>
    )
}

Icons.defaultProps = {

    linksList: []

}

export default Icons