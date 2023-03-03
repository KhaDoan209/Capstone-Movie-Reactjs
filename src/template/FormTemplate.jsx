/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Route } from 'react-router-dom'
import movie from '../assets/img/1.png'
import movie1 from '../assets/img/2.png'
export const FormTemplate = (props) => {
    return <Route exact path={props.path} render={(propsRoute) => {
        return <>
            <div className="form">
                <header className='headerform '>
                    <div className="container content">
                        <div className="title ">
                        </div>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="col-6 image">
                            <img className="img-fluid" src={movie1} alt="" />
                        </div>
                        <div className="col-6">
                            <props.component {...propsRoute} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    }} />
}
