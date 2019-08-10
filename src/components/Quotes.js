import React from 'react';

const quotes = [
    {dlrQuote: "Rise and shine! Wake up and smell the rock star!"},
    {dlrQuote: "If I eat a 3 musketeers bar, drink a RedBull, and a small can of Schlitz malt liquor and wait 4 minutes, I know there's a 22 minute window that there's nothing in the state park that I can't climb like I'm spiderman! Better living through chemistry!"},
    {dlrQuote: "Roth, first thing in the morning. A bottomless cup of attitude and the 2nd one is free!"},
  ];
  
  class Quotes extends React.Component {
    
      constructor(props) {
      super(props);
      this.state = {
        dlrQuote: ''
      }
        
      this.newQuote = this.newQuote.bind(this);
      
    }
    
    newQuote() {
      let number = (Math.floor(Math.random() * quotes.length));
      
      let quote = quotes[number].dlrQuote;
      
      this.setState({dlrQuote: quote})
      
    }
    
    componentDidMount(){
      this.newQuote();
    }
    
    render() {
      return (
        <div id="quote-box" className="center-div">
          <Text quote={this.state.dlrQuote} />
          <Buttons handleNewQuote={this.newQuote} quote={this.state.dlrQuote} />
        </div>
      )
    }
  }
  
  class Text extends React.Component {
    render() {
      return (
        <div>
        <h1>"{this.props.quote}"</h1>
        </div>
      )
    }
  }
  
  class Buttons extends React.Component {
    render() {
      return (
        <div>
          <button type="button" id="new-quote" onClick={this.props.handleNewQuote}>Have another!</button>          
        </div>
      )
    }
  }
  
export default Quotes;