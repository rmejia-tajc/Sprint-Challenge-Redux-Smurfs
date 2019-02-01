import React from 'react';

import Smurf from './Smurf';

const SmurfsList = props => {
    return (

        <div>
            <h3>Smurfs List</h3>

            {props.smurfs.map((smurf, index) =>{
                return <Smurf key={index} smurf={smurf} />;
            })}
        </div>
    );
};

export default SmurfsList;