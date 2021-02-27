import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const product=[
    {name:'Photoshop' , price:20.99},
    {name:'Premiere Pro' , price:10.99},
    {name:'Premiere Rush' , price:9.99},   
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
      <ul>
        {product.map(element=><li>{element.name}</li>)}
      </ul>
      {product.map(pd=><Products product={pd}></Products>)}

        {/* <Products name={product[0].name} price={product[0].price}></Products>
        <Products name={product[1].name} price={product[1].price}></Products>
        <Products name={product[2].name} price={product[2].price}></Products> */}
      
      
      </header>
    </div>
  );
}

function Products(props){
  const styles={
    border:'1px solid grey',
    borderRadius:'0.5em',
    backgroundColor:'lightgrey',
    height:'200px',
    width:'200px',
    margin:'20px'
  }
  return(
    <div style={{display:'inline'}}>
      <div style={styles}>
        <h5>{props.product.name}</h5>
        <h4>{props.product.price}</h4>
        <button>Buy Now</button>
      </div>
    </div>
  )
}

function Counter(){
  const [count, setCount]=useState(10); 
  return(
    <div>
    <h2>Counter: {count}</h2>
    <button onMouseMove={()=> setCount(count+1)}>Increase</button>
    <button onClick={()=> setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [user, setUser]=useState([]);
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data));
    },[])

  return(
    <div>
    <h2>Here are the users </h2>
    {/* {console.log(user)} */}
    <ul>
      {user.map(element=><li>{element.name}</li>)}
    </ul>
    </div>
  )
  
}

export default App;
