import './App.css';
import Person from './PersonData';
import React, {useState} from 'react'
import Profile from './Components/Profile';
import Button from './Components/Button';



function App() {
  const People = Person.map(person => <Profile 
                                      key = {person.id} 
                                      image = {person.image} 
                                      name = {person.name} 
                                      age = {person.age} />)
  const [Users, setUsers] = useState(People)
  const [MyPerson, setMyPerson] = useState(People.length)
  const style = {
      "width" : "28rem",
      "marginTop" : 60,
      "marginLeft" : "auto",
      "marginRight" : "auto",
      "marginBottom" : 40

    }
    
  const handleClick = () => {
    setUsers()
    setMyPerson(0)
  }
  return (
    <div className="card mt-5 shadow p-3 mb-5 bg-body rounded" style = {style}>
      <div className = "container lead display-5 mb-5">
        {MyPerson} birthdays today
      </div>
      {Users}
      <Button onClick = {handleClick}/>
    </div>
  );
}

export default App;
