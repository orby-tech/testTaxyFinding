import React  from 'react';
import  { connect } from 'react-redux';

interface Props {
    findedCars:any,
}
interface State {
    car: any
}
const sortByDistance = (a:any, b:any) => {
    return (a.distance - b.distance)
}


class PREFindedCar extends  React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            car: []
        }
   
      }
    componentDidUpdate(prevProps:any){
        if (prevProps.findedCars !== this.props.findedCars  &&  this.props.findedCars){
            let AllFindedCars: string = this.props.findedCars

            let sortedList: Array<any> = JSON.parse(AllFindedCars).sort(sortByDistance)

            this.setState({car: sortedList[0]})
        } else if (prevProps.findedCars !== this.props.findedCars){
            this.setState({car: []})
        }
    }
    render() {
        return (
            
            <div className="findedCar">
                <h3> Подходящий экипаж </h3>
                <div>
                    <h2>{this.state.car.car_mark} {this.state.car.car_model}</h2>
                    
                    <p>{this.state.car.car_color}</p>
                    
                    <p className="findedCar__number">{this.state.car.car_number}</p>

                </div>
            </div>
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