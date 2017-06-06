import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor(props){
    super();
    this.handlerJamie = this.handlerJamie.bind(this)
  }

   handlerJamie(event){
     this.props.onReceiveCoordinates([event.screenX, event.screenY])
   }

  render(){
    return(
      <button onClick={this.handlerJamie}>Button</button>
    )
  }
}
