import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Loading = (props) => {
    const { isLoading } = useSelector(state => state.LoadingReducer);

console.log('is',isLoading);
    return (
        <Fragment>
            {isLoading ?  <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99 }}>
                <div className='sizexxl'>
                    Loading
                </div>
            </div> : ''
            }
        </Fragment>

    );
}

export default Loading;
