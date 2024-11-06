import React from "react";

class comp1 extends React.Component{
    constructor(props){
        super()
        this.state={age:20};
        this.handleUpdate=this.handleUpdate.bind(this);
    }

handleUpdate(){
    this.setState({age:this.state.age+5})
}

    render(){
        return<div>
                <h1>Name:{this.props.name}</h1>
                <h1>State:{this.state.age}</h1>
                <button onClick={this.handleUpdate}>Update</button>
                </div>
    }
}
export default comp1;