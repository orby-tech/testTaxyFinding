import React from 'react';
import  { connect } from 'react-redux';

interface Props {
    findedCars:any,
}
interface State {
    cars: any
}
const sortByDistance = (a:any, b:any) => {
    return (a.distance - b.distance)
}


class PREListOfCars extends  React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            cars: []
        }
   
      }
    componentDidUpdate(prevProps:any){
        if (prevProps.findedCars !== this.props.findedCars &&  this.props.findedCars){
            let AllFindedCars: string = this.props.findedCars

            let sortedList: Array<any> = JSON.parse(AllFindedCars).sort(sortByDistance)

            this.setState({cars: sortedList})
        } else if (prevProps.findedCars !== this.props.findedCars){
            this.setState({cars: []})
        }
    }
    render() {
        return (   
            <div className="listOfCars">
                {this.state.cars.map( function (global : any) { return (
                <div className="listOfCars__element">
                    <h4>{global.car_mark} {global.car_model}</h4>
                    {global.car_color}          
                    <p className="listOfCars__line"> {global.distance} </p>
                    
                </div>)}
                )}

            </div>
        )
    }

}
const mapStateToProps = (state: any) => {
    return {
        findedCars: state.findedCars
    };
  }
  
const ListOfCars = connect(mapStateToProps)(PREListOfCars);
export default ListOfCars