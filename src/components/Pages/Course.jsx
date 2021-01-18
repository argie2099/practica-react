import React, { useState } from 'react';

const Course = props => {
    return (
        <div className="ed-grid m-grid-3">
            <h1 className="m-cols-3" >Titulo del curso</h1>
            <img className="m-cols-1" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt="portadaCurso"/>
            <p className="m-cols-2">Descripción del curso :D</p>
        </div>
    );
}
 
export default Course;