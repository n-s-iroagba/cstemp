import React from "react";

function First(){
    return <h1 className="msg">CSTEMP INNOVATION...</h1>;
}

function Second(){
    return <h1 className="msg">INNOVATION THAT INSPIRES...</h1>;
}


class Msg extends React.Component{
    constructor(props){
        super(props)
        this.state={msg:true};
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          2000
        );
      }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
    tick(){this.setState({msg:!this.state.msg})};
   
 
    render(){ 
        const msg=this.state.msg;
        if(msg){
            return <First/>
        }
        return <Second/>
    }
}

export default Msg;