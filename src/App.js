import "./App.css"
import {useState, useEffect} from "react"
import Table from "./components/Table"
import Form from "./components/Form"

function App () {
  const MOCK_API_URL = "https://66c100faba6f27ca9a581c47.mockapi.io/user"
  const [users, setUsers] = useState([
    {
      name: '',
      jobTitle: '',
      companyName: '',
    },
  ])

  const [newUser, setNewUser] = useState (
    {
      name: '',
      jobTitle: '',
      companyName: '',
    },
  )

  const [updatedName, setUpdatedName] = useState('')

  function handleUpdatedName(updatedNameValue){
    console.log(updatedNameValue)
    setUpdatedName(updatedNameValue)

  }
// takes information from form currently --------------------------------------------
  function handleName(nameValue) {
    console.log(nameValue)
    setNewUser({
      ...newUser,
      name: nameValue
    })

    console.log(newUser)
  }

  function handleJobTitle (jobValue){
    console.log(jobValue)
    setNewUser({
      ...newUser,
      jobTitle: jobValue
    })

    console.log(newUser)
  }

  function handleCompanyName (companyValue){
    console.log(companyValue)
    setNewUser({
      ...newUser,
      companyName: companyValue
    })

    console.log(newUser)
  }

  // get, post,delete, update section ---------------------------------------------------------
  useEffect(() => {
    fetch(MOCK_API_URL)
      .then((data) => data.json())
      .then((data) => setUsers(data))
  }, [users])

  const getUsers = () => {
    console.log("doing getUsers function")

    fetch(MOCK_API_URL)
      .then((data) => data.json())
      .then((data) => setUsers(data))
  };

  const postUser = (e) => {
    e.preventDefault()
    console.log ('doing postUser...')

    fetch(MOCK_API_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newUser)
    }).then(() => getUsers())
  }

  const deleteUser = (id) => {
    console.log('deleting user...')
    console.log(id)
    fetch(`${MOCK_API_URL}/${id}`, {
      method: 'DELETE',

    }).then(() => getUsers())
  }

  const updateUser = (user) => {
    console.log('updating user...')
    let updatedUser = user
    updatedUser.name = updatedName
    console.log(updatedUser)
    fetch(`${MOCK_API_URL}/${user.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedUser)
    }).then(() => getUsers())
  }

// bottom of form -----------------------------------------------------------------

  return (
    <div className = "App">
      <Form 
      postUser={postUser}
      handleName={handleName} 
      handleJobTitle={handleJobTitle} 
      handleCompanyName={handleCompanyName}/>
      <Table 
      handleUpdatedName={handleUpdatedName}
      updateUser={updateUser} 
      deleteUser={deleteUser} 
      users={users}/>
    </div>
  )
}

export default App
