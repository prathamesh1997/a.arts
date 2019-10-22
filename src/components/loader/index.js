import React from 'react';
import Loading from '../../static/images/loader.png';

export function Loader(props){

    return(
        <React.Fragment>
            <div className="loaderWrapper loading-theme-light">
                <img src={Loading} alt="loader" className="loaderImge"/>
            </div>
        </React.Fragment>
    );
}