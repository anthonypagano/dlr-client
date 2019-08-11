import React from 'react';
import { API_ORIGIN } from "../config";

  class Quotes extends React.Component {
    
      constructor(props) {
      super(props);
      this.state = {
        quote: ''
      }
        
      this.newQuote = this.newQuote.bind(this);
      
    }

    getQuotes() {
      this.setState({
          error: null,
          loading: true
      });
      fetch(`${API_ORIGIN}/quotes`)
          .then(res => {
              if (!res.ok) {
                  return Promise.reject(res.statusText);
              }
              return res.json();
          })
          .then(quote =>
              this.setState({
                quote: quote,
                loading: false
              })
          )
          .catch(err =>
              this.setState({
                  error: 'Could not load quotes',
                  loading: false
              })
          );
    }
    
    componentWillMount() {
      alert('yes');
      this.getQuotes();
    }
    
    newQuote() {
      let number = (Math.floor(Math.random() * quotes.length));
      
      let quote = quotes[number].quote;
      
      this.setState({quote: quote})
      
    }
    
    componentDidMount(){
      this.newQuote();
    }
    
    render() {
      return (
        <div id="quote-box" className="center-div">
          <Text quote={this.state.quote} />
          <Buttons handleNewQuote={this.newQuote} quote={this.state.quote} />
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