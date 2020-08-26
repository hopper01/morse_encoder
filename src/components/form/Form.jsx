import React, { Component } from 'react';
import './form.css'

class Form extends Component {
    render() {
        return (
            <div className="form">
                <form action="" className="form">
                    <label htmlFor="message" className="inp-label">Your message</label> <i class="fas fa-level-down-alt"></i><br />
                    <input 
                    type="text" 
                    className="inp-area" 
                    id="message"
                    placeholder="Type here"
                    value={this.props.message}
                    onChange={this.props.handleChange}
                    />
                </form>
            </div>
        );
    }
}

export default Form;