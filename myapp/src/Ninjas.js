import React from 'react'

const Ninjas = (props) => {
    const { ninjas, deleteNinja } = props;
    const ninjasList = ninjas.map(ninja => {
        return ninja.age > 25 ? (
            <div className="Ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button onClick={() => { deleteNinja(ninja.id) }}>Delete Ninja</button>
            </div>
        ) : null;
    });
    return (
        <div className="ninja-list">
            {ninjasList}
        </div>
    );
}

export default Ninjas;