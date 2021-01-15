import React from 'react';
import withLoader from '../HOC/withLoader';

import Card from '../Moleculas/Card'

const CursosGrid = ({cursos}) => {
    return ( 
        <div className="ed-grid m-grid-4">
            {
                cursos.map( s => <Card desc={s.desc} title={s.title} professor={s.professor} price={s.price} image={s.image} />)
            }
        </div>
    );
}
 
export default withLoader("cursos", CursosGrid)