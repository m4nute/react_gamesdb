import React,{useState,useEffect}from 'react';import 'bootswatch/dist/lux/bootstrap.min.css';import './Filters.css';import{Dropdown,DropdownItem,DropdownMenu,DropdownToggle}from 'reactstrap';import Swal from 'sweetalert2';
function Filters(props){const[genreDropdown,setGenreDropdown]=useState(!1);const[platformDropdown,setPlatformDropdown]=useState(!1);const[generalDropdown,setGeneralDropdown]=useState(!1);const[genres]=useState([]);const[platforms]=useState([]);const[generalList,setGeneralList]=useState([]);const[clickedGenre,setClickedGenre]=useState('');const[clickedPlatform,setClickedPlatform]=useState('');const[clickedGeneral,setClickedGeneral]=useState('');const[titleFilter,setTitleFilter]=useState('');const handleItemClick=(text,btn)=>{if(btn==='genre'){setClickedGenre(text)}else if(btn==='platform'){setClickedPlatform(text)}else if(btn==='general'){setClickedGeneral(text)}}
    const handleRestoreClick=()=>{setTitleFilter('');setClickedGeneral('');setClickedGenre('');setClickedPlatform('');const axios=require("axios");const options={method:'GET',url:'https://free-to-play-games-database.p.rapidapi.com/api/games',headers:{'X-RapidAPI-Key':'4f72e61099msha197e03e146b929p1788c1jsn22bd029875a4','X-RapidAPI-Host':'free-to-play-games-database.p.rapidapi.com'}};axios.request(options).then(function (response){props.carryData(response.data)}).catch(function (error){console.error(error)})}
    const handleFilterClick=()=>{var finalPlatform
        (clickedPlatform === 'Web Browser') ? finalPlatform = 'browser' : (clickedPlatform === 'PC (Windows)') ? finalPlatform = 'pc' : finalPlatform='all';const axios=require("axios");
        const options={method:'GET',url:'https://free-to-play-games-database.p.rapidapi.com/api/games',params:{platform:`${finalPlatform}`,'sort-by':`${clickedGeneral.toLowerCase()}`},headers:{'X-RapidAPI-Key':'4f72e61099msha197e03e146b929p1788c1jsn22bd029875a4','X-RapidAPI-Host':'free-to-play-games-database.p.rapidapi.com'}};
        axios.request(options).then(response=>{if(clickedGenre!==''){var filtData=response.data.filter(function(game){return game.genre===clickedGenre})}else{filtData=response.data}
        if(titleFilter!==''){filtData=filtData.filter((game)=>{return game.title.toLowerCase().includes(titleFilter.toLowerCase())})}
        if(filtData.length===0){setTitleFilter('')
        return Swal.fire('Try Again','No Results Found','question')}else{props.carryData(filtData)}}).catch(function(error){console.error(error)})}
    const toggleGenreDropdown=()=>{setGenreDropdown(!genreDropdown)}
    const togglePlatformDropdown=()=>{setPlatformDropdown(!platformDropdown)}
    const toggleGeneralDropdown=()=>{setGeneralDropdown(!generalDropdown)}
    useEffect(()=>{handleFilterClick()
        const generalList=['Release-date','Popularity','Alphabetical','Relevance'];setGeneralList(generalList);const axios=require("axios");const options={method:'GET',url:'https://free-to-play-games-database.p.rapidapi.com/api/games',headers:{'X-RapidAPI-Key':'4f72e61099msha197e03e146b929p1788c1jsn22bd029875a4','X-RapidAPI-Host':'free-to-play-games-database.p.rapidapi.com'}};axios.request(options).then(function(response){response.data.map((game)=>{!genres.includes(game.genre)&&genres.push(game.genre)
        return!platforms.includes(game.platform)&&platforms.push(game.platform)});generalList.sort()
        platforms.map((platform,index)=>{return platform.includes(',')&&platforms.splice(index,1)})
        platforms.sort()
        genres.sort()
        genres.shift()}).catch(function(error){console.error(error)})}
        // eslint-disable-next-line react-hooks/exhaustive-deps
        ,[])
    return (
    <div className='filters-content'>
        <h1 className='decapitalize search'>Search for Any Game</h1><h2 className='decapitalize search'>With this filters</h2><div className='filter-dropdowns'><div className="filter-genre">
        <Dropdown size='md' isOpen={genreDropdown}toggle={toggleGenreDropdown}><DropdownToggle caret>{clickedGenre===''?'Genre':clickedGenre}</DropdownToggle><DropdownMenu className='menu'>{genres.map((genre)=>{
                                    return <DropdownItem onClick={(e) => handleItemClick(e.target.innerText, 'genre')} key={'_' + Math.random().toString(36).substr(2, 9)}>{genre}</DropdownItem>
                                })}
                    </DropdownMenu></Dropdown></div><div className="filter-platform"><Dropdown size='md' isOpen={platformDropdown}toggle={togglePlatformDropdown}><DropdownToggle caret>{clickedPlatform===''?'Platform':clickedPlatform}</DropdownToggle><DropdownMenu className='menu'>{platforms.map((platform)=>{
                                    return <DropdownItem onClick={(e) => handleItemClick(e.target.innerText, 'platform')} key={'_' + Math.random().toString(36).substr(2, 9)}>{platform}</DropdownItem>
                                })}</DropdownMenu></Dropdown></div>
            <div className="filter-general"><Dropdown size='md' isOpen={generalDropdown}toggle={toggleGeneralDropdown}><DropdownToggle caret>{clickedGeneral===''?'Sort':clickedGeneral}</DropdownToggle><DropdownMenu className='menu'>{generalList.map((general)=>{
                                    return <DropdownItem onClick={(e) => handleItemClick(e.target.innerText, 'general')} key={'_' + Math.random().toString(36).substr(2, 9)}>{general}</DropdownItem>
                                })}</DropdownMenu></Dropdown></div><div className='filter-buttons'>
                <input type="text" className="form-control" placeholder="Title Filter" value={titleFilter} id="inputDefault" onChange={(e) => setTitleFilter(e.target.value)}/>
                <button className='btn btn-dark' onClick={handleRestoreClick}>Restore</button>
                <button className='btn btn-warning' onClick={handleFilterClick}>Filter</button>
                </div></div></div>
)}
export default Filters