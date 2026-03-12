

function App() {
const users=[
            {firstName: "Akshay" ,lastName: "Kumar",age: 25 } ,
            {firstName: "John" ,lastName :" Doe",age: 26},
            {firstName: "Salman" ,lastName :"Khan", age: 24 }
            ]
  
function fullName(user){
        return user. firstName + " "+user. lastName;
        }
  return (
    <div>
      <h2>person Detsils</h2>
      <ul>
        {users.map((user,index)=>(
          <li key={index}>{fullName(user)} is {user.age} years old</li>
        ))}
      </ul>
    </div>
  )
}

export default App

{/* <div>
      <h2>Person Details</h2>
      <ul>
      {users.map((user, index) => (
      <li>{fullName(user)} is {user.age}years old</li>
      </ul>
  </div> */}
