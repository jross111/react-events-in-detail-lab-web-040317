import React from 'react';

export default class DelayedButton extends React.Component {
  constructor(props){
    super();
    this.handlerAndrea = this.handlerAndrea.bind(this)
  }
   handlerAndrea(event){
     event.persist()
     setTimeout(function(){
       this.props.onDelayedClick(event)
     }.bind(this), this.props.delay)
   }

  render(){
    return(
      <button onClick={this.handlerAndrea}>Button</button>
    )
  }
}

DelayedButton.propTypes = {
  delay: React.PropTypes.number,
  onDelayedClick: React.PropTypes.func
}
