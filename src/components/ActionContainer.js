import React from 'react'
import '../styles/ActionContainer.css';

// icons imports
import { TbDeer } from "react-icons/tb";
import { FaCow } from "react-icons/fa6";
import { FaFilm } from "react-icons/fa6";

const iconSize = 100;

const icons = [
    { name: <TbDeer size={iconSize} />, label: 'Moose Habitat', link: 'https://geg.uoguelph.ca/sites/default/files/GEOG4480-W23_Group02.pdf', text: 'I worked in a small team and a Masters Candidate to build a model measuring moose habitat suitability in Ontario\'s Missinaibi Forest using multi-criteria analysis and ArcGIS.' },
    { name: <FaCow size={iconSize} />, label: 'Precision Livestock', link: 'https://github.com/ga-holmes/cows_drinking', text: 'I explored AI and computer vision applications in precision livestock agriculture with the Collaborative Systems Lab and designed software to support a then-ongoing research project monitoring drinking habits in dairy cows.' },
    { name: <FaFilm size={iconSize} />, label: 'Independent Films', link: 'https://www.youtube.com/watch?v=6oY2tPwBhj0', text: 'I create indepenent films and music with friends and collaborate on a variety of creative projects.' },
    // Add more icons as needed
];

const ActionContainer = ({ columns, spacing }) => {
    return (
        <div className="actionWrapper" style={{ gridTemplateColumns: columns, gridGap: spacing }}>

            {icons.map((icon, index) => (
                <div key={index} className="actionItem" title={icon.label}>
                    <a href={icon.link}><span className='actionLink'></span></a>
                    <span className="actionIcon">{icon.name}</span>
                    <div className="backgroundSlide">
                        <p className="textFade">{icon.text}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

ActionContainer.defaultProps = {

    spacing: '1em',
    columns: '1fr',
    count: 2,
    elements: []

}
export default ActionContainer