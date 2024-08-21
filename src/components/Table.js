import React from 'react'

export default function Table({users, deleteUser, updateUser, handleUpdatedName}){
    return ( <table className="myTable">
        <caption>Our Party</caption>
        <thead>
            <tr className="tableHeader">
                <th>Player Name</th>
                <th>Theme Song</th>
                <th>Spirit Animal</th>
                <th>Un-exist Player</th>
                <th>Change PlayerName</th>
            </tr>
        </thead>
        <tbody>
            {users.map ((user,index )=> (
                <tr className="tableBodyRow" key={index}>
                    <td id='td1'> {user.name}</td>
                    <td id='td2'> {user.jobTitle}</td>
                    <td id='td3'> {user.companyName}</td>
                    <td id='td4'>
                        <button id="deleteButton" onClick={() => deleteUser(user.id)}>(┛ಠ_ಠ)┛彡┻━┻</button>
                    </td>
                    <td id='td5'>
                        <input onChange={(e) => handleUpdatedName(e.target.value)} placeholder ="Enter New Name"></input>
                        <button id="changeButton" onClick={(e)=> updateUser(user)}>( ・⌓・｀)</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}