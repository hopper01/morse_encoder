import React, {Component} from 'react';
import Form from '../form/Form'
import Display from '../display/Display'
import Utils from '../utils/Utils'
import './App.css';

class App extends Component {
      constructor() {
        super();
        this.state = {
          message : '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (event){
        this.setState({message: event.target.value});
    }
  render(){
    const  morse = {
    'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
    'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
    'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
    'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
    'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
    'y': '-.--',  'z': '--..',  ' ': '/',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----', 
            // misc:
        '.': '.-.-.-', ',': '--..--', '?': '..--..',  
        '/': '-..-.',  '(': '-.--.',  ')': '-.--.-',  '&': '.-...',
        ':': '---...', ';': '-.-.-.', '=': '-...-',   '+': '.-.-.',
        '-': '-....-', '-': '..--.-', 
        '!': '-.-.--', '@': '.--.-.',
}
  let  value = this.state.message.toLowerCase();
	let output = ''
	var morseOutput = []
	for(var i in value){
		if(morse[value[i]]){
			output += morse[value[i]]
			morseOutput.push(morse[value[i]])
		}
	}
    const items =[];
    const circle = <div className='circle'></div>
    const dash = <div className="dash"></div>
    const whitespace = <div className="whitespace"></div>
    for (var it=0 ; it<output.length; it++){
      if (output[it] === '.'){
        items.push(circle);
      }else if (output[it] === '-'){
        items.push(dash);
      }else if (output[it] === '/'){
        items.push(whitespace);
      }
    }
    console.log(items)
   
  // HTML
    return (
      <div className="App">
      <div >
          <header className="App-header"><span><i class="fas fa-code"></i></span> Morse Encoder
          </header>
          <Form
          message = {this.state.message}
          handleChange = {this.handleChange}
          />
          <Display
          message = {this.state.message}
          morseCode = {morseOutput}
          items = {items}
          />
          <Utils 
          message = {this.state.message}
          morseCode = {output}
          />
        </div>
      </div>
    );
  }
}

export default App;
