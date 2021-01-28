
//que es el state? 
// en que estructura o tipo de componete se usa un state? == class
// state= {} this.setState
// componentDidMount, componentDidUpdate ...


// class Demo extends Component{render(){return(<di/>)}}

// para una funcion o const que se utiliza useSate

/// state => useState
// ciclos de vida ==> useEffect

import {useState,useEffect} from 'react';
const otro = 0;


const data = ["Pizza","Alitas","Papas","Hotdog","Tacos","quesadillas","OtrosTacos"]

function App(){
     //acumulor , elModificador
 const [numb,setNumb] = useState(otro)
 useEffect(()=>{
   setTimeout(()=>{
     setNumb(20)
   },3000)

   //getNumber().then(r=>setNumb(r)).catch
 },[])

 const [search,setSearch] = useState('')
 const [foot,setFoot] = useState(data)

 const handleChange = (e) => {
   const {name,value} = e.target

   let newArr = data.filter((item,key)=> item.toLocaleLowerCase().includes(value.toLocaleLowerCase()) )
   setFoot(newArr)
   setSearch(value)
 }

  return(
    <div>
      <h1>Este es un contador {numb}</h1>
      <button onClick={()=>{
        let num2 = numb + 1
        setNumb(num2)
        }}>
        +
      </button>
      <button onClick={()=>{
        let num2 = numb - 1
        setNumb(num2)
        }}>
        -
      </button>


      {/* buscador */}
      <input value={search} onChange={handleChange}/>
      <div style={{display:"flex",flexDirection:"column"}}>
        {foot.map((item,key)=><span key={key}>{item}</span>)}
      </div>
    </div>
  )
}

 export default App;