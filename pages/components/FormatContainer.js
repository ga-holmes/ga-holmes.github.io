import React from 'react';
import fContainerStyle from '/styles/FormatContainer.module.css';

const FormatContainer = ({ columns,spacing,elements }) => {
  return (
    <div className={fContainerStyle.wrapper} style={{ gridTemplateColumns: columns, gridGap: spacing }}>
        
      {
        React.Children.toArray(
          elements.map(
            (element) => (
                <div key={element.key}>{element}</div>
            )
        )
      )}
      
    </div>
  )
}

FormatContainer.defaultProps = {

    spacing: '1em',
    columns: '2fr 1fr',
    count: 2,
    elements: []

}

export default FormatContainer