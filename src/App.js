import React, {Component} from 'react';
import './App.css';
import Card from './components/Card';
import TextView from './components/TextView';

class App extends Component {

  state={
    contacts:[
      {
        img:"https://librenoticias.com/wp-content/uploads/2020/08/default-user-image.png",
        name:"Gala",
        phone:"0987654321"
      },
      {
        img:"https://librenoticias.com/wp-content/uploads/2020/08/default-user-image.png",
        name:"Gonzalo",
        phone:"6789054321"
      },
      {
        img:"https://librenoticias.com/wp-content/uploads/2020/08/default-user-image.png",
        name:"Alejandra",
        phone:"1238524796"
      },
      {
        img:"https://librenoticias.com/wp-content/uploads/2020/08/default-user-image.png",
        name:"Daniela",
        phone:"0951738642"
      },
    ],
    title:"",
    loader:true,
  }

  recivedData = (texto)=>{
    this.setState({title:texto})
  }
  
  //este es el bueno!!
  componentDidMount(){
    console.log("me ejecuto despues de que existe algo")
    setTimeout(()=>{
      this.setState({loader:false})
    },5000)
  }
  componentWillUnmount(){
    console.log("antes de que muera")
  }
  //eeste ya no se usa
  // componentWillMount(){
  //   console.log("me ejecuto antes de que exista algo")
  // }
  render(){
    // console.log("esto es el this",this)
    // console.log("esto es el this.state",this.state)
    // console.log("esto es el this.state.contacts",this.state.contacts)
    return (
      this.state.loader ?
      <div className="App"> 
        <h1>Estoy Cargando ...</h1>
      </div> 
      :
      <div className="App">
        {/* Aquie va nuestro code  */}
        <h1>{this.state.title === "" ? "Aun no hay Tititlo" : this.state.title }</h1>
        <TextView recivedData={this.recivedData}/>
        {/*estan son las cards */}
        <Card 
        img={"https://avatars3.githubusercontent.com/u/29002976?s=460&u=162a3266866c089404e113c204e8af61c08195a1&v=4"} 
        name="Dylan" 
        phone="12-3456-7890" />
        {/* esto es un listado de contactos */}
        <div>
          {
            this.state.contacts.map((contact,index)=>(
              // <Card 
              //   key={index}
              //   img={contact.img}
              //   name={contact.name}
              //   phone={contact.phone}
              // />
              <Card 
                key={index}
                {...contact}
              />
            ))
          }
        </div>

      </div>
    );
  }
}

export default App;
