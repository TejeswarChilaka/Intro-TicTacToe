// import logo from './logo.svg';
import "./App.css";

function MyButton() {
  return (
    <>
      <button>MyButton</button>
    </>
  );
}


function AboutPage() {
  let y = "Vue";
  return (
    <>
   
      <h1>Hello React</h1>
      <p>Starting with Components...</p>
      {y}
    </>
  );
}

const user = {
  name :"Tejeswar Reddy",
  role :"Software",
  imageUrl : "assets/wallpaper-946.jpg",
  imageSize :90,
};

function MyImg(){
  return(
    <>
    <h2>My image</h2>
    <img
    className="avatar"
    src={user.imageUrl}
    alt = {'photo of'+user.name}
    style={{
      width: user.imageSize,
      height: user.imageSize
    }}/>
    
    
    </>
  )
  
};

function App() {
  let x = "Angular";
  return (
    <>
    {x}
   <MyImg></MyImg>
      <AboutPage />
      <p>Hello Button!!</p>
      <MyButton />
    </>
  );
}


export default App;
