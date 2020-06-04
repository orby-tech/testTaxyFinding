import React, { Component, useState }  from 'react';
import  { connect } from 'react-redux';

interface Props {
    findedCars:any,
}
interface State {
    car: any
}

class PREFindedCar extends  React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            car: []
        }
   
      }
    componentDidUpdate(prevProps:any){
        if (prevProps.findedCars !== this.props.findedCars){
            let tempArr = this.props.findedCars
            this.setState({car: tempArr})
        }
    }
    render() {
        return (
            
            <>
                <div> Подходящий экипаж </div>
                {this.state.car}
            </>
        )
    }

}
const mapStateToProps = (state: any) => {
    return {
        findedCars: state.findedCars
    };
  }
  
const FindedCar = connect(mapStateToProps)(PREFindedCar);
export default FindedCar