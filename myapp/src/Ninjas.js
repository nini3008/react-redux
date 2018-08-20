import React from 'react'

const Ninjas = (props) => {
    const { ninjas } = props;
    const ninjasList = ninjas.map(ninja => {
        return (
            <div className="Ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
            </div>
        )
    })
    return (
        <div className="ninja-list">
            {ninjasList}
        </div>
    );
}

export default Ninjas;