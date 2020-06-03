import React, { Component, useState }  from 'react';
import  { connect } from 'react-redux';

interface Props {}
interface State {}

class PREFindedCar extends  React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
   
      }

    render() {
        return (
            
            <>
                <div> Подходящий экипаж </div>
                <div> Hundai </div>
            </>
        )
    }

}
const mapStateToProps = (state: any) => {
    return state;
  }
  
  const FindedCar = connect(mapStateToProps)(PREFindedCar);
export default FindedCar