import React, { Component, useState } from 'react';
import { YMaps, Map } from 'react-yandex-maps';

import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { connect } from 'react-redux';

interface Props { }
interface State { }

class PREMap extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

    }

    render() {
        return (

            <>
                <YMaps>
                    <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
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