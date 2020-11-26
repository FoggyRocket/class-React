import React, {Component} from 'react';



export default class TextView extends Component{

    state ={
        texito:""
    }

    handleChange = (e)=>{
       
        const {value,name} = e.target;
        let {texito} = this.state;

        texito= value

        this.setState({ texito})

        //this.setState({ texito:value})

        // console.log("esto es el e",e)
        // console.log("esto es el e.targert",e.target)
        // console.log("esto es el e.target.name",e.target.name)
        // console.log("esto es el e.target.value",e.target.value)
    }

    sendData = ()=>{
        this.props.recivedData(this.state.texito)
        this.setState({texito:""})
    }

    //arriba del render va el state los ciclos de vida y las funciones 
    render(){
        //const let var 
        //console.log("estos son los props",this.props)
        return(
            <div className="textViewStyle">
                <input 
                    value={this.state.texito} 
                    onChange={(value)=>this.handleChange(value)}
                    name="textito"
                    placeholder="Escribe algo paps"
                />
                <button onClick={this.sendData}>Puchame</button>
            </div>
        )
    }
}