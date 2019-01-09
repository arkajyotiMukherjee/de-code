import React from 'react';

function ColorBlock(props) {
    return (
      <div className="color-block-wrapper">
        { props.name.map((color) =>
          <div className={`color-variant-block bg-${ color.name }`} key={ color.name }>
            <div class="color-details">
              <div className="">{color.name}</div>
              <div>{color.hax}</div>
            </div>
          </div>
        )
      }
      </div>
)}

export default ColorBlock;
