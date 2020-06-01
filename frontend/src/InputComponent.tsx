import React, { Component, useState }  from 'react';

import Button from 'react-bootstrap/Button';
import Input from 'react-bootstrap/InputGroup';
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
                <Input />
                <Button />
            </>
        )
    }

}
export default PREInputComponent