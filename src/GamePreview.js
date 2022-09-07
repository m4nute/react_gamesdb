import React from 'react'
import './GamePreview.css'
function GamePreview(props) {
    const handleClick = () => { window.open(props.game.game_url, "_blank") }

    return (<div className='game'>
        <div className="column1">
            <div>
                <button className='btn btn-primary' id='titles' onClick={(e) => handleClick() && e.target.blur()}>{props.game.title}</button>
                <h6 id='developer'>{props.game.developer}</h6>
            </div>
            <div id='genre-release'>
                <div><h6>{props.game.genre}</h6><h6>{props.game.platform}</h6></div>
                <div id='release'>{props.game.release_date.split('-')[0]}</div>
            </div>
        </div>
        <div className="column2">
            <img src={props.game.thumbnail} alt={props.game.title} />
        </div>
    </div>)
}
export default GamePreview