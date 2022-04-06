import React from 'react';
import { Card } from 'antd';
import Mercedes from '../interface/extentedInterface';



export interface MasiniM{
    Masina: Mercedes[];
}



const Card_box = ({Masina}:MasiniM) =>{

    return(
    <div className='grid-3'>
        {Masina.map((card: any) => (
            <div className="site-card-border-less-wrapper ">
            <Card title={card.nickname} bordered={false} style={{textAlign:"center", width: 300 }} >
            <img className="imagine" src={card.photo} alt="image" />
            <p> Color : {card.color} </p>
            <p> Model :  {card.model}</p>
            <p> Nr Doors : {card.nrDoors}</p>
            <p> Country : {card.country}</p>
            <p> Year : {card.year}</p>
        </Card>
         </div>
        ))}

    </div>

    )
}

export default  Card_box;