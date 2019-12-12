import React from 'react'
import './componentsStyle.css'

const Person = ({persons, deletePerson}) => {

    //Simple if condition
/*     const personList = persons.map(person => {
        if (person.age > 20){
            return (
            <div className="person" key={person.id}>
                <div>Name: {person.name}</div>
                <div>Age: {person.age}</div>
                <div>Pet: {person.pet}</div>
            </div>
            )
        } else {
            return null;
        }
    }) */

    //Different approach to do the same condition
    const personList = persons.map(person => {
        return person.age > 10 ? (
            <div className="person" key={person.id}>
                <div>Name: {person.name}</div>
                <div>Age: {person.age}</div>
                <div>Pet: {person.pet}</div>
                <button onClick={() => {deletePerson(person.id)}}>Delete Person</button>
            </div>
        ) : null;
    })

    return(
        <div className="person-list">
            { personList }
        {
        /*{ instead of declaring personList outside the return function, can be implemented inside, works the same
                persons.map(person => {
                    return person.age > 20 ? (
                        <div className="person" key={person.id}>
                            <div>Name: {person.name}</div>
                            <div>Age: {person.age}</div>
                            <div>Pet: {person.pet}</div>
                        </div>
                    ) : null;
                })
            } */}

        </div>
    )
}

export default Person;