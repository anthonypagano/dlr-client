import React from 'react';
import { API_ORIGIN } from "../config";

export class Quotes extends React.Component {
    
      constructor(props) {
      super(props);
      this.state = {
        dlrQuotes: []
      }

      this.getRandomQuote = this.getRandomQuote.bind(this);
    }

    getData() {
      fetch(`${API_ORIGIN}/quote`)
        .then(results => {
          return results.json();
        })
        .then(quotes => {
          this.setState({
            dlrQuotes: quotes.map((i) => i )
        });
        })
        .catch(err =>
            this.setState({
                error: 'Could not load quotes'
            })
        );      
    }
    getRandomQuote() {
      let number = (Math.floor(Math.random() * 3));
//      let number = Math.random();
            console.log(number);
            let dlrSays = dlrQuotes[number].quote;
      console.log(dlrSays);
    }

    componentDidMount(){
        this.getData();
        this.getRandomQuote();
      }

    
    render() {
      const quoteList = this.state.dlrQuotes.map((quoteList, key) =>
      <li key={quoteList.id}>{quoteList.quote}</li>);
      
      return (
        <div id="quote-box">
          <ul>
            {quoteList}
          </ul>        
        </div>
      )
    }
  }
  
export default Quotes;