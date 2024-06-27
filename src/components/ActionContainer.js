import React from 'react'
import { useState, useEffect } from 'react';
import '../styles/ActionContainer.css';

// icons imports
import { TbDeer } from "react-icons/tb";
import { FaCow } from "react-icons/fa6";
import { FaFilm } from "react-icons/fa6";

import { useInView } from 'react-intersection-observer';

const iconSize = 100;

const icons = [
    { name: <TbDeer size={iconSize} />, label: 'Moose Habitat', link: 'https://geg.uoguelph.ca/sites/default/files/GEOG4480-W23_Group02.pdf', text: 'I worked in a small team and a Masters Candidate to build a model measuring moose habitat suitability in Ontario\'s Missinaibi Forest using multi-criteria analysis and ArcGIS.' },
    { name: <FaCow size={iconSize} />, label: 'Precision Livestock', link: 'https://github.com/ga-holmes/cows_drinking', text: 'I explored AI and computer vision applications in precision livestock agriculture with the Collaborative Systems Lab and designed software to support a then-ongoing research project monitoring drinking habits in dairy cows.' },
    { name: <FaFilm size={iconSize} />, label: 'Independent Films', link: 'https://www.youtube.com/watch?v=6oY2tPwBhj0', text: 'I create indepenent films and music with friends and collaborate on a variety of creative projects.' },
    // Add more icons as needed
];

const ActionContainer = ({ columns, spacing }) => {
    const [cols, setCols] = useState('');

    useEffect(() => {
        // override automatic columns with set columns if they are set
        if (columns !== '') {
            setCols(columns);
        } else {
            // maximum columns is 4, otherwise set to number of icons
            if (icons.length > 4) {
                setCols('1fr 1fr 1fr 1fr');
            } else {
                setCols("1fr ".repeat(icons.length));
            }
        }
        console.log(cols);
    }, [cols, columns, icons]);

    return (
        <div className="actionWrapper" style={{ gridTemplateColumns: cols, gridGap: spacing }}>
            {icons.map((icon, index) => (
                <ActionItem key={index} icon={icon} index={index} />
            ))}
        </div>
    );
};

// seperate component for each item so that we can pass the index of the icon into it from the list.map
// this is for the mobile layout where the slide animation is triggered when the icon comes into view rather than when hovered over
const ActionItem = ({ icon, index }) => {

    // trigger animation when in view for mobile
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.7, // Trigger when 10% of the element is in view
    });

    const [delay, setDelay] = useState('0s');
    
    useEffect(() => {
        // only set delay for mobile device
        const isMobile = window.matchMedia("max-device-width: 1024px").matches;
        if (isMobile) {
            setDelay(`${index * 0.3}s`); // Delay each item by 0.2s times its index for mobile
        }
    }, [index]);

    return (
        <div ref={ref} className={`actionItem ${inView ? 'animate' : ''}`} style={{ transitionDelay: delay }} title={icon.label}>
            <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <span className='actionLink'>
                    <p className='actionLinkText'>L E A R N M O R E</p>
                </span>
            </a>
            <span className="actionIcon">{icon.name}</span>
            <div className="backgroundSlide">
                <p className="textFade">{icon.text}</p>
            </div>
        </div>
    );
};

ActionContainer.defaultProps = {

    spacing: '1em',
    columns: '',
    count: 2,
    elements: []

}
export default ActionContainer