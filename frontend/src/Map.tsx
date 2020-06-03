import React, { Component, useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { connect } from 'react-redux';

interface Props { }
interface State { 
    clickedArea: Array<any> | undefined,
    carsCoordinates: Array<any>
}
const carsCoordinates = [
    [56.860581, 53.209223]
  ];



const defaultState ={ center: [56.839439, 53.218803], zoom: 14 }


class PREMap extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            clickedArea: undefined,
            carsCoordinates: []
        }
    }

    render() {
        return (

            <>
                <YMaps>
                    <Map defaultState={defaultState}>
                    {carsCoordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                    <Placemark geometry={this.state.clickedArea} />
                    </Map>
                </YMaps>
            </>
        )
    }

}
const mapStateToProps = (state: any) => {
    return state;
}

const YandexMap = connect(mapStateToProps)(PREMap);
export default YandexMap