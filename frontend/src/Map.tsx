import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { connect } from 'react-redux';
import { setArea, findCars, setAltArea } from './redux/actions';
import  ServiceAPI  from  './ServiceAPI';

const  service  =  new ServiceAPI();
interface Props {
    findedCars:any,
    dispatch: any,
    area: any,
    altArea: any
 }
interface State { 
    clickedArea: Array<any> | undefined,
    carsCoordinates: Array<any>    
}

const createCarsList = ( resp : any[] ) => {
    let list : any[]= []
    for (let i:number=0 ; i < resp.length; i++ ) {
        list.push([resp[i].lat, resp[i].lon])
    }
    console.log(list)
    return list
}


const defaultState ={ center: [56.839439, 53.218803], zoom: 11 }


class PREMap extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.clickEvent = this.clickEvent.bind(this)
        this.state = {
            clickedArea: undefined,
            carsCoordinates: []
        }
    }
    componentDidUpdate(prevProps:any){
        if (prevProps.findedCars !== this.props.findedCars && this.props.findedCars){
            let AllFindedCars: string = this.props.findedCars

            let sortedList: Array<any> = JSON.parse(AllFindedCars)
            this.setState({carsCoordinates: createCarsList(sortedList)})
        } else if (prevProps.findedCars !== this.props.findedCars){
            this.setState({carsCoordinates: []})
        }
        if (prevProps.area !== this.props.area 
            && this.props.area
            && this.props.area.addresses){
            let temp = this.props.area.addresses
            console.log(temp[0].lon, temp[0])
            this.setState({clickedArea: [temp[0].lat, temp[0].lon]})
        } else if (prevProps.area !== this.props.area ){
            console.log("sdf")
            this.setState({clickedArea: undefined})
        }
    }
    clickEvent (e:any) {
        let coords: number[] = e.get('coords');
        let targetCoords : number[] = [56.839439, 53.218803];
        if(Math.abs(coords[0] - targetCoords[0]) <= 0.001
            && Math.abs(coords[1] - targetCoords[1]) <= 0.001){
            let raw = {
                source_time:20130101010101,
                addresses:[
                    {
                    addres: "Пушкинская, 144",
                    lat: coords[0],
                    lon: coords[1]
                    }
                ]
            }
            console.log(raw)
            service.findCars(raw).then( (result) => {
                this.props.dispatch(findCars(result))
                this.props.dispatch(setArea(raw))
                this.props.dispatch(setAltArea(null))
            })
        } else {
            this.props.dispatch(setAltArea(coords))
            this.props.dispatch(setArea(null))
            this.props.dispatch(findCars(null))
        }
        
    }
    placemarkClick(){
        if (this.state.clickedArea){
            return(
                <Placemark geometry={this.state.clickedArea}  options={ {iconColor: '#FFFF00'}} />
            ) 
        } else if(this.props.altArea) {
            return (
                <Placemark geometry={this.props.altArea}  options={ {iconColor: '#FF0000'}} />  
            )
        }
    }
    render() {
        return (

            <>
                <YMaps>
                    <Map className="map__map" onClick={(e: any) => this.clickEvent(e)}
                        defaultState={defaultState}>
                    {this.state.carsCoordinates.map(coordinate =>  <Placemark geometry={coordinate}/>)}
                    {this.placemarkClick()}
                  
                    </Map>
                </YMaps>
            </>
        )
    }

}
const mapStateToProps = (state: any) => {
    return {
        findedCars: state.findedCars,
        area: state.area,
        altArea: state.altArea
    };
}

const YandexMap = connect(mapStateToProps)(PREMap);
export default YandexMap