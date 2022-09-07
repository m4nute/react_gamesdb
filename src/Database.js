import React, { useEffect, useState } from 'react';
import GamePreview from './GamePreview';
import Filters from './Filters';
import './Filters.css';
import './Database.css'

function Database() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const axios = require("axios"); const options = {
      method: 'GET', url: 'https://free-to-play-games-database.p.rapidapi.com/api/games', headers: {
        'X-RapidAPI-Key': '4f72e61099msha197e03e146b929p1788c1jsn22bd029875a4', 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    }
    axios.request(options).then(function (response) {
      setData(response.data)
    }).catch(function (error) {
      console.error(error)
    })
  }
    , [])
  const carryData = (filteredData) => {
    setData(filteredData)
  }

  return (<div className='database-tab' >
    <div className='filters' >
      <Filters carryData={
        (data) => carryData(data)} />
    </div>
    <div className='content2' > {
      data.map((game, index) => {
        return (<GamePreview key={index} game={game} />)
      })
    }
    </div>
  </div>)
}

export default Database