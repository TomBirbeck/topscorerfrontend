import './card.css'

export default function PlayerCard({ players }){
    

    return (
        <div id = 'card-container'>
        {players.map((player) => { return <div key={player.id} className = 'player-card'>
                <p className='card-season'>Season: {player.season}/{player.season + 1}</p>
            <img className = 'card-image' src = {player.img} alt = {player.firstname} />
            <div className='card-info'>
                <p>Name: {player.firstname} {player.surname}</p>
                <p>D.O.B: {player.dob}</p>
                <p>Nationality: {player.nationality}</p>
                <p>Club: {player.club}</p>
                <p>Appearances: {player.appearances}</p>
                <p>Goals: {player.goals}</p>
                <p>G.P.A: {Number(player.gpa).toFixed(2)}</p>
                </div>
        </div>})
        }
        </div>
       
    )
}