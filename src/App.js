import { useState } from "react";
import { data } from "./data.js";
import'./App.css';

function App() {
const [gift, setGift] = useState(data);
const removeGift =(id)=> {
  let newGift= gift.filter(gift => gift.id  !== id)
  setGift(newGift)
}
return(
  <div>
    <div className="container">
    <h1>List of {gift.length} gifts</h1>
  </div>
  {gift.map((element => {
    const {id,gifty,image} = element;

    return(<div key={id}>
      <div className="container">
     <h2>{id} - {gifty}</h2>
      </div>

      <div className="container">
       <img src={image} width="300px" height="400px"/>
      </div>

      <div className="container">
        <button onClick={() => removeGift(id)}>Remove</button>
      </div>


      </div>
    )
  }))}
  <div className="container">
    <button onClick={() => setGift([])}>delete all</button>
  </div>
  </div>
)




}

export default App;