import React from 'react';

class CardTrip extends React.Component {

    render() {
        const trip = this.props.trip
        return <div>
            <div>
                <p>{trip.name}</p>
                <p>{trip.planet}</p>
                <p>Duração: {trip.durationInDays} dias</p>
                <button onClick = {() => this.props.details(trip.id)}>Ver Detalhes</button>
            </div>
        </div>
                }
}

export default CardTrip