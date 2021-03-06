import React from 'react';

class InputField extends React.Component {
    render(){
        return (
            <div className="loginForm">
              
              <input 
                className='input'
                type={this.props.type}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={ (e) => this.props.onChange(e.target.value) }

              ></input>

            </div>
          );
    }
  
}

export default InputField;