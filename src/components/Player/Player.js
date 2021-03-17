import React from 'react';
import './Player.css';

const Player = (props) => {
    const {name, image, position, role, salary} = props.playerInfo; 
    const handleAddPlayer = props.handleAddPlayer;
    const player = props.playerInfo;
    return (
        <div className="col-lg-3 col-md-5 col-sm-10 player-card">
            <div className="player-image">
                <img src={image} alt={name} className="w-100 img-thumbnail"/>
            </div>
            <div className="player-details">
                <h4 className="pb-3">{name}</h4>
                <p>Position: {position}</p>
                <p>Role: {role}</p>
                <h5>Salary: €{salary}M</h5>
                <button onClick={() => handleAddPlayer(player)}
                    className="btn btn-primary mb-3">
                    <i className="fas fa-plus"></i> Add Player
                </button>
            </div>
        </div>
    );
};

export default Player;