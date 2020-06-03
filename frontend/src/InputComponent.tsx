import React, { Component, useState }  from 'react';

import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import  { connect } from 'react-redux';

interface Props {}
interface State {}

class PREInputComponent extends  React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
   
      }

    render() {
        return (
            
            <>
                <FormControl 
                 className="inputGroup__input"
                 placeholder="Откуда"
                 aria-describedby="basic-addon2"/>
                <Button variant="outline-primary" > Find </Button>
            </>
        )
    }

}
const mapStateToProps = (state: any) => {
    return state;
  }
  
  const InputComponent = connect(mapStateToProps)(PREInputComponent);
export default InputComponent