import React from 'react'

const Users = () => {
    const persons = [
        {
            id: '001',
            name: 'Dele',
            age: 12
        },
        {
            id: '002',
            name: 'Ben',
            age: 14
        },
        {
            id: '001',
            name: 'Sinzu',
            age: 20
        },
    ]
  return (
    <div>
        {persons.map((person) => {
             return (
                <div key={person.id} className='flex justify-center items-center  my-3'>
                    <h1 >{person.name}</h1>
                    <p>{person.age}</p>
                </div>

             )
             
             
                
        }
           

        )}
    </div>
  )
}

export default Users