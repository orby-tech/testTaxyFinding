import React, { Component, useState }  from 'react';

import Button from 'react-bootstrap/Button';

import  { connect } from 'react-redux';

import  { findCars } from './redux/actions'

import  ServiceAPI  from  './ServiceAPI';

const  service  =  new ServiceAPI();



interface Props {
    findedCars:any,
    dispatch: any
}
interface State {
    find: string
}

class PREInputComponent extends  React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.findAdress =this.findAdress.bind(this)
        this.state = {
            find: ""
        }
      }
    findAdress(event: React.ChangeEvent<HTMLInputElement>){
        this.setState({find: event.target.value})
    }
    findCars () {
        let tempArr: string[] = this.state.find.toLowerCase().split(/[.,\/#!$%\^&\*;:{}=\-_`~()]/)
        console.log(this.state.find.toLowerCase().split(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/))
        if (this.state.find.toLowerCase().indexOf("пушкинская") !== -1 
            && this.state.find.toLowerCase().indexOf("144") !== -1){
            
            let raw = {
                source_time:20130101010101,
                addresses:[
                    {
                    addres:"Пушкинская, 144",
                    lat:56.839439,
                    lon:53.218803
                    }
                ]
            }
            service.findCars(raw).then( (result) => {
                this.props.dispatch(findCars(result))
            })
        } else {
            alert(" Вероятно вы искали:  Пушкинская, 144?")
        }
    }
    render() {
        return (
            
            <>
                <input 
                 className="form-control inputGroup__input"
                 onChange={this.findAdress}
                 value={this.state.find}
                 aria-describedby="basic-addon2"/>
                <Button onClick={() => this.findCars()} > Найти машины </Button>
            </>
        )
    }

}
const mapStateToProps = (state: any) => {
    return {
        findedCars: state.findedCars
    };
  }
  
  const InputComponent = connect(mapStateToProps)(PREInputComponent);
export default InputComponent