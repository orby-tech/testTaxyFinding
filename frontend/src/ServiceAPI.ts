import  { connect } from 'react-redux'
import React from 'react';

interface Props {
}
interface State {
}


export default  class ServiceAPI {
	findCars(raw: Object) {
        
		return new Promise ((resolve, reject) => {
            resolve ("dszf");
        })
    }
}
