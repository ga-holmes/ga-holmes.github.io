import React from 'react';
import '../styles/FormatContainer.css';

const FormatContainer = ({ columns,spacing,elements }) => {
  return (
    <div className="wrapper" style={{ gridTemplateColumns: columns, gridGap: spacing}}>
        
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