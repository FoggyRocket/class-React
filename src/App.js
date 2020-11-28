import React, {Component} from 'react';
import './App.css';
import Card from './components/Card';
import { createCelebrity, getCelebrity } from './services/celibrityServices';


class App extends Component {

  state={
    celebrities:[],
    data:{}
  }


  //este es el bueno!!
  componentDidMount(){

    getCelebrity().then(response=>{
      console.log("queee es el response",response)
      this.setState({celebrities: response.data.celebrities })
    }).catch(error=>{
      console.log("queee es el error",error)

    })
  }
  componentWillUnmount(){
    console.log("antes de que muera")
  }
  //eeste ya no se usa
  // componentWillMount(){
  //   console.log("me ejecuto antes de que exista algo")
  // }


  handleChange=(event)=>{
    const {value,name} = event.target;
    let {data} = this.state;

    data[name] = value;

    this.setState({data})

  }
  onSend=()=>{
    let {celebrities,data} = this.state
    console.log("que trae la dara",this.state.data)

    createCelebrity(this.state.data).then(response=>{

      celebrities = [...celebrities,data]
      this.setState({celebrities,data:{}})
      console.log("creoo algo",response)
     
    }).catch(error=>{
      console.log("no pude crearlo",error)

    })
  }
  render(){
    // console.log("esto es el this",this)
    // console.log("esto es el this.state",this.state)
    // console.log("esto es el this.state.contacts",this.state.contacts)
    return (

       <div className="App"> 
        <div style={{
          display:"flex",
          flexDirection:'column',

        }}>
          <input placeholder="Nombre" onChange={(e)=>this.handleChange(e)} name="name"/>
          <input placeholder="Ocupacion" onChange={(e)=>this.handleChange(e)} name="occupation"/>
          <input placeholder="Frase" onChange={(e)=>this.handleChange(e)} name="catchPhrase"/>
          <button onClick={this.onSend} >Enviar</button>
        </div>

        {
            this.state.celebrities.map((item,index)=>
              <Card key={index}  {...item} />
            )

        }
      </div> 
    );
  }
}

export default App;
