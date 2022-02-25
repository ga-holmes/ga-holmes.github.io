import React from 'react'
import iconStyle from '/styles/Icons.module.css'

const Icons = ({ linksList }) => {
    let imageWidth = '100%';
    let imageHeight = '100%';

    return (
        <div className={iconStyle.container}>

            {React.Children.toArray(
                linksList.map(
                    (link) => (
                        link.icon === '' ? 
                            <a key={link.key} href={link.linkTo} className={iconStyle.noIcon} target='_blank' rel='noreferrer'>{link.text}</a>
                        :
                            <a key={link.key} href={link.linkTo} style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer'> <img className={iconStyle.icon} src={link.icon} alt='' /> </a>
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