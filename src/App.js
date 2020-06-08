import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const hobbys = ['gaming', 'playing', 'suiming', 'reading'];
  const products =[
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustator', price: '$60.99',},
    {name: 'PDF reader', price: '$30.99'},
    {name: 'New item', price: '$ Free'}
  ]
  
  
 
  return (
    <div className="App">
      <header className="App-header">
        <h2 style = {{color: 'red'}}>Hello Eveyone.</h2>
        <Users></Users>
        <Counter></Counter>
        <ol>
          {
            hobbys.map(hobby => <li>{hobby}</li>)
          }
        </ol>
        {
          products.map(pd => <Product product= {pd}></Product>)
        }
        {/* <Product product = {products[0]}></Product> */}
        {/* <Product name = {products[2].name} prise = {products[2].prise}></Product> */}

        <Persion name="Star" hobby={hobbys[0]}></Persion>
        <Persion name="Sun" hobby={hobbys[1]}></Persion>
        <Persion name="Moon" hobby={hobbys[2]}></Persion>
      </header>
    </div>
  );
}

function Counter(props){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
 
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      <br/>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUser] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
  
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '6px solid gold',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    hight: '200px',
    width: '200px',
    float: 'left',
    margin: '6px',
    paddingBottom: '10px'
  }
  const {name, price} = props.product;
  console.log(props);
  return (
    <div style = {productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy now</button>
    </div>
  )
}

function Persion(props){
  const persionStyle = {
    border: '5px solid yellow',
    padding: '3px',
    margin: '10px'
  }
  return (
    <div style = {persionStyle}>
      <h2>Name: {props.name}</h2>
      <p>Hobby: {props.hobby}</p>
    </div>
  )
}


export default App;
