import React from 'react';
import './App.css';
import { LayoutCustom } from './Layouts/LayoutCustom'
import { Forms } from './Form/Forms';
import { FooterNow } from './Layouts/FooterFor';
import Card_box from './Layouts/Card_box';

const masiniList = [
  {
    color:"Black",
    model:"maybach",
    nrDoors:4,
    country:"USA",
    year:2015,
    photo:"https://www.major-auto.ru/images/models/mercedes/maybach%202022/29450/29450_medium.jpg"

  },
  {
    color:"Grey",
    model:"GLE",
    nrDoors:4,
    country:"France",
    year:2018,
    photo:"https://www.wrapstyle.com/content/img_cache/1920x/1596097631-Mercedes-GLE-Grey-Matt-4-.jpg"

  },
  {
    color:"Red",
    model:"amg",
    nrDoors:4,
    country:"USA",
    year:2018,
    photo:"https://previews.123rf.com/images/artzzz/artzzz1806/artzzz180600070/104800627-moscow-russia-march-2-2018-dark-red-supercar-mercedes-benz-amg-gt-in-the-city-street-.jpg"

  },



]


function App() {
  return (
      <>
        <LayoutCustom></LayoutCustom>
        <p className='text_1'>Data from interface</p>
        <Card_box
            Masina={masiniList}
        />
        <FooterNow></FooterNow>
      </>
  );
}

export default App;