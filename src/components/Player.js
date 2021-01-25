import React from 'react';

const Player = ({ url, type }) => {
    return (
        <div className="player" style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'white' }}>{url}</h2>
            <audio controls>
                <source src={url} type={type} />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default Player;
