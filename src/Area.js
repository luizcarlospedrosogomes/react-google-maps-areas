import React from 'react';
import { useSelector} from 'react-redux'

import { selectors } from './redux/selectors'

const Area= () =>{
    
    const areas = useSelector(selectors.getAreas)
    console.log(areas)

    return(
        <div>
            AREA 
            <table>
                <thead>
                    <tr>
                        <th>Ponto</th>
                        <th>Nome</th>
                        <th>Cultura</th>
                        <th>Pontos</th>
                    </tr>
                </thead>
                <tbody>
                    {areas.map((a, i) =>(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{a[0].local.name}</td>
                            <td>{a[0].local.culture}</td>
                            <td>{a[0].points.length}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}
export default Area;