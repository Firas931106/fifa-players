import React from 'react'
import Player from './Player'
import players from './players'

const columnStyle = {
    display: 'flex',
    flexDirection: 'column',  
    alignItems: 'center',      
};

const PlayersList = () => {
    return (
        <div style={columnStyle}>
            <h1 style={{textAlign: 'center',color: 'red'}}>My best Players</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {players.map((e) => <Player e={e} />)}

            </div>
        </div>
    );
};

export default PlayersList