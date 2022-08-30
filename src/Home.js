import React,{useEffect,useState}from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GamePreview from './GamePreview';
import './App.css';
import 'bootswatch/dist/lux/bootstrap.min.css';

function Home() {
        AOS.init({
                duration: 900,
                offset: 0,
                once: true
            });
        const [relevanceList,
                setRelevanceList] = useState([]);
        const [showTop10,
                setShowTop10] = useState(!1);
        const [newList,
                setNewList] = useState([]);
        const [showNewList,
                setShowNewList] = useState(!1);
        const [randoms,
                setRandoms] = useState([]);
        const [showRandoms,
                setShowRandoms] = useState(!1);

        const [range,
                setRange] = useState(0)
                const handleClick = (btn, functionToCall) => {
                        btn.blur()
                        functionToCall === 'loadTop10' ? loadTop10() : functionToCall === 'loadRandoms' ? loadRandoms() : functionToCall === 'loadNewList' ? loadNewList() : console.log('algo salio mal')
                }

        const noContent = () => {
                return <div id='noContent' data-aos='fade'><h1 className='decapitalize'>No Content Selected</h1><br /><h2 className='decapitalize'>Press the Buttons<br />on your Left</h2></div>
        }
        useEffect(() => {
                loadRandoms(); setShowRandoms(!1)},
                 // eslint-disable-next-line react-hooks/exhaustive-deps
                [])
                const loadTop10 = () => {
                        loadRandoms(); if (relevanceList.length !== 10) {
                                const axios = require("axios"); const options = {

                                        method: 'GET',
                                        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                                        params: {
                                                'sort-by': 'popularity'
                                        }

                                        ,
                                        headers: {
                                                'X-RapidAPI-Key': '4f72e61099msha197e03e146b929p1788c1jsn22bd029875a4', 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                                        }
                                }

                                axios.request(options).then(function (response) {
                                        setRelevanceList(response.data.slice(0, 10))

                                }).catch(function (error) {
                                        console.error(error)
                                })
                        }

                        setShowNewList(!1); setShowRandoms(!1); setShowTop10(!0)
                }

        const loadNewList = () => {
                if (newList.length !== 10) {
                        const axios = require("axios");

                        const options = {

                                method: 'GET',
                                url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                                params: {
                                        'sort-by': 'release-date'
                                }

                                ,
                                headers: {
                                        'X-RapidAPI-Key': '4f72e61099msha197e03e146b929p1788c1jsn22bd029875a4', 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                                }
                        }

                        axios.request(options).then(function (response) {
                                setNewList(response.data.slice(0, 10))

                        }).catch(function (error) {
                                console.error(error)
                        })
                }

                setShowTop10(!1); setShowRandoms(!1); setShowNewList(!0)
        }

        const loadRandoms = () => {
                const axios = require("axios");

                const options = {

                        method: 'GET',
                        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                        headers: {
                                'X-RapidAPI-Key': '4f72e61099msha197e03e146b929p1788c1jsn22bd029875a4', 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                        }
                }

                        ;

                axios.request(options).then(function (response) {
                        setRange(Math.floor(Math.random() * ((response.data.length - 10) + 1))); setRandoms(response.data.slice(range, range + 10))

                }).catch(function (error) {
                        console.error(error)
                });
                setShowNewList(!1) 
                setShowTop10(!1) 
                setShowRandoms(!0)
        }

        return (<React.Fragment>
                <div className="buttons" data-aos='fade-right'> <button className='btn btn-outline-light' id='btn-top-10' onClick={
                (e) => handleClick(e.target, 'loadTop10')}
        >Top Games</button> <button className='btn btn-outline-light' id='btn-top-10' onClick={
                (e) => handleClick(e.target, 'loadNewList')
        }

        >Recent Games</button> <button className='btn btn-outline-light' id='btn-top-10' onClick={
                (e) => handleClick(e.target, 'loadRandoms')
        }

        >Random Games</button> </div> <div className='content' > {
                !showTop10 && !showNewList && !showRandoms && noContent()
        }

                        {
                                showTop10 && relevanceList.map((game, index) => {
                                        return <GamePreview key={
                                                index
                                        }

                                                game={
                                                        game
                                                }

                                        ></GamePreview>
                                })
                        }

                        {
                                showNewList && newList.map((game, index) => {
                                        return <GamePreview key={
                                                index
                                        }

                                                game={
                                                        game
                                                }

                                        ></GamePreview>
                                })
                        }

                        {
                                showRandoms && randoms.map((game, index) => {
                                        return <GamePreview key={
                                                index
                                        }

                                                game={
                                                        game
                                                }

                                        ></GamePreview>
                                })
                        }

                </div> </React.Fragment>)
}

export default Home