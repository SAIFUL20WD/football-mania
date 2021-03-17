import React from 'react';


const Team = (props) => {
    const team = props.teamInfo;
    const budget = team.reduce( (total, player) => total + player.salary, 0);
    return (
        <div className="pt-5 mt-3">
            <h3>Team Details</h3>
            <h5>Team Member: {team.length}</h5>
            <ol>
                {
                    team.map(player => <li key={player.id}>{player.name}</li>)
                }
            </ol>
            <h5>Budget: €{budget.toFixed(2)}M</h5>
        </div>
    );
};

export default Team;