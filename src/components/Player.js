import React from 'react';

const Player = () => {
    return (
        <div className="player">
            <audio controls>
                <source src="starfall.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default Player;
