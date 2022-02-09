//1chi dars
// import Par from "./components/Par"

// function App(){
//   return(<div>
//     <h1>Salom men H1 man</h1>
//     <Par />
//   </div>)
// }

// export default App

// export const Link = ()=>{
//   return(
//     <a href="#">Google</a>
//   )
// }

// export const MySpan = ()=>{
//   return(
//     <span>Bu bir span</span>
//   )
// }


//2chi dars
// import Card from "./components/Card";

// const list = [
//   {
//     id: 1,
//     title: 'Kun va tun',
//   },
//   {
//     id: 2,
//     title: "O'tgan kunlar",
//   },
//   {
//     id: 3,
//     title: "Ikki eshik orasi",
//   },
//   {
//     id: 4,
//     title: "Sariq devni minib",
//   },
// ];

// function App() {
//   const a = "";
//   const handleChange=(event)=>{
//     console.log(event.target.value);
//     a = event.target.value;
//   };

//   const handleClick = ()=> console.log("bosildim");

//   return (
//     <div className=" bg-teal-200">
//       <h1>Salom men H1 man</h1>
//       {list.map((kitob, index) => {
//         return <Card key={kitob.id} book={kitob} />
//       })}
//       <div>
//         <input type="text" style={{padding: "6px" }} onChange={handleChange} />
//         <button onClick={handleClick}>Click me</button>
//       </div>
//       <p>{""}</p>
//     </div>
//   );
// }

// export default App;


//3chi dars
// import { useState } from "react";

// function App(){
//   const [sanoq, setSanoq] = useState(0);
//   const [rang, setRang] = useState("red");
//   const [isVisble, setIsVisible] = useState(true);

//   const kamaytirish = () => {
//     setSanoq(sanoq -1);
//   };

//   const kopaytirish = () => {
//     setSanoq(sanoq +1);
//   };

//   const onGreen = () => {
//     setRang("green");
//   };

//   const visibility = () =>{
//     setIsVisible(!isVisble);
//   };

//   return(
//   <>
//   <button onClick={kamaytirish}>-</button>
//   <span>{sanoq}</span>
//   <button onClick={kopaytirish}>+</button>
//   <p style={{ color: rang}}>Bu bir paragraf</p>
//   <button onClick={onGreen}>Yashil</button>
//   {isVisble && <h1>Korinivoman</h1>}
//   <button onClick={visibility}>bekitish/korsatish</button>
//   </>
//   );
// }

// export default App;

//uyga vazifa
// import { useState } from "react";

// function App(){
//   const [sanoq, setSanoq] = useState(0);
//   const [city, setCity] = useState("Toshkent");
//   const [color, setColor] = useState("blue");

//   const kopaytirish = () => {
//     setSanoq(sanoq +1);
//   };

// const changeCity = ()=> {
//       setCity(city === "Toshkent" ? "Samarqand" : "Toshkent");
//   };
  
//   const changeColor = (color) => {
//     setColor(color);
//   };

//   return(
//   <>
//   <h1>Siz <span>{sanoq}</span> martta bosdingiz!</h1>
//   <button onClick={kopaytirish}>+</button>

//   <p> {city} </p>
//   <button onClick={changeCity}>
//   {city === "Toshkent" ? "Samarqand" : "Toshkent"}
//   </button>

//   <div className={`w-32 h-32 bg-${color}-500`}>1</div>
//   <button onClick={() => changeColor("green")}>green</button>
//   <button onClick={() => changeColor("yellow")}>yellow</button>
//   <button onClick={() => changeColor("red")}>red</button>
//   </>
//   );
// }

// export default App;

//4chi dars single page application
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;