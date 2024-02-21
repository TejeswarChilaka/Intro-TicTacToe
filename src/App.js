// import logo from './logo.svg';
import image from './image.jpg';
import "./App.css";
import { useState } from 'react';



function AboutPage() {
  return (
    <>
      <h1>Hello React</h1>
      <p>Starting with Components...</p>
    </>
  );
}

const user = {
  name :"Tejeswar Reddy",
  role :"Software",
  imageUrl : "assets/wallpaper-946.jpg",
  imageSize :90,
};


const user1 = {
  name :"Shiva",
  role :"Destroyer",
  imageUrl : image ,
  imageSize :90,
};

function MyImg(){
  return(
    <>
    <h2>My images</h2>
    <img
    className="avatar"
    src={user.imageUrl}
    alt = {'photo of'+user.name}
    style={{
      width: user.imageSize,
      height: user.imageSize
    }}/>
    <img
    src={user1.imageUrl}
    alt = {'photo of'+user1.name}
    style={{
      width: user1.imageSize,
      height: user1.imageSize
    }}/>
    </>
  ) 
};



function condition(){  
  let xy;
  let y = false;
  if (y){
    xy = <MyButton />;
  }else{
    xy = <MyImg></MyImg>;
  }
  return(
    <>
    {xy}
    </>
  )
}
function uList(){
  const products = [
    {title : "phone",id : 1},
    {title : "mobile",id : 2},
    {title : "laptop",id : 3},
    {title : "mouse",id : 4},
  ]
   
  const listItems = products.map(product =>
    <li key ={product.id}>
      {product.id},
       {product.title}
    </li>
    )
    return (
      <ul>{listItems}</ul>
    )
}


function MyButton({count,onClick}) {
  
  return (
    <>
      <button onClick = {onClick}>MyButton {count} times</button>
    </>
  );
}

function MyCustomButton(){
  const [count,setCount] = useState(0);
  function handleClick(){
     setCount(count+1)
  }
  return(
    <>
    <MyButton count = {10} onClick ={handleClick}/>
    <MyButton count = {20} onClick ={handleClick}/>
    </>
  )
  
}



function App() {
  
  return (<>
    <MyCustomButton/>
   </>
  )
}

export default App;
