import React  from 'react';

import Button from 'react-bootstrap/Button';

import  { connect } from 'react-redux';
import  { findCars, setArea, setAltArea } from './redux/actions'

import  ServiceAPI  from  './ServiceAPI';

const  service  =  new ServiceAPI();

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

interface Props {
    findedCars:any,
    dispatch: any,
    area: any
}
interface State {
    find: string
}

class PREInputComponent extends  React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.findCars =this.findCars.bind(this)
        this.state = {
            find: ""
        }
      }
    componentDidUpdate(prevProps:any){
        if (prevProps.area !== this.props.area && this.props.area && this.props.area.addresses){
            let temp = this.props.area.addresses
            console.log(temp[0].lon, temp[0])
            this.setState({find: temp[0].addres})
        } else if (prevProps.area !== this.props.area){
            this.setState({find: ""})
        }
    }
    getTaxy(){
        service.order(raw).then ((result ) => {
            if (result && result) {
                alert("your order's id" + result)
                this.props.dispatch(findCars(null))
                this.props.dispatch(setArea(null))
                this.props.dispatch(setAltArea(null))
            }
        })
    }
    findCars (event: React.ChangeEvent<HTMLInputElement>) {
        let value: string = event.target.value
        this.setState({find: value})

        if (value.toLowerCase().indexOf("пушкинская") !== -1 
            && value.toLowerCase().indexOf("144") !== -1){
            

            service.findCars(raw).then( (result) => {
                this.props.dispatch(findCars(result))
                this.props.dispatch(setArea(raw))
                this.props.dispatch(setAltArea(null))
            })
        } else {
            this.props.dispatch(findCars(""))
            this.props.dispatch(setArea(""))
        }
    }
    render() {
        return (
            
            <div className="inputGroup">
                <input 
                 className="form-control inputGroup__input"
                 onChange={this.findCars}
                 value={this.state.find}
                 aria-describedby="basic-addon2"/>
                <Button className="inputGroup__button" onClick={() => this.getTaxy()} > Заказать </Button>
            </div>
        )
    }

}
const mapStateToProps = (state: any) => {
    return {
        findedCars: state.findedCars,
        area: state.area
    };
  }
  
  const InputComponent = connect(mapStateToProps)(PREInputComponent);
export default InputComponent