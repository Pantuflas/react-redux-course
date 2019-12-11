import React from 'react'


const Person = ({persons}) => {
    const personList = persons.map(person => {
        return (

            <div className="person" key={person.id}>
                <div>Name: {person.name}</div>
                <div>Age: {person.age}</div>
                <div>Pet: {person.pet}</div>
            </div>
        )
    })

    return(
        <div className="person-list">
            { personList }
        </div>
    )
}

export default Person;