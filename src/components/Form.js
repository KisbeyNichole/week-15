import React from 'react'

export default function Form({postUser, handleName, handleJobTitle, handleCompanyName}) {
  return (
    
    <form onSubmit ={(e) => postUser(e)} className="myForm">
      <h3>Post New User</h3>
      <div >
        <label className="myLabels"><text className="textLazy">Player Name</text></label>
        <label className="myLabels"><text className="textLazy">Theme Song</text></label>
        <label className="myLabels"><text className="textLazy">Spirit Animal</text></label>
      </div>
      <div>
        <input className="myFormInputs" onChange={(e) => handleName(e.target.value)} placeholder ="Enter Player Name"/>
        <input className="myFormInputs" onChange ={(e) => handleJobTitle(e.target.value) }placeholder ="Enter Your Theme Song" />
        <input className="myFormInputs" onChange ={(e) => handleCompanyName(e.target.value) }placeholder ="Enter Your Spirit Animal"/>
      </div>
      <div className="submitForm">
        <button >Submit</button>
      </div>
    </form>
  )
}
