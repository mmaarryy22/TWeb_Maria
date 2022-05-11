import React from 'react';
import { Card } from 'antd';
import Laptop from '../interfaces/extentedInterface';



export interface Laptoppuri{
    Laptopul: Laptop[];
}

const Card_box = ({Laptopul}:Laptoppuri) =>{

    return(
    <div className='grid-3'>
        {Laptopul.map((card: any) => (
            <div className="site-card-border-less-wrapper ">
            <Card title={card.nickname} bordered={false} style={{textAlign:"center", width: 300 }} >
            <img className="imagine" src={card.photo} alt="image" />
            <p> producator_procesor: {card.producator_procesor} </p>
            <p> model : {card.model} </p>
            <p> Color : {card.color} </p>
            <p> memory :  {card.memory}</p>
            <p> greutatea : {card.greutatea}</p>
            <p> garantie : {card.garantie}</p>
        </Card>
         </div>
        ))}

    </div>

    )
}

export default  Card_box;