import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators'



class Main extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            cityName: ''
        };
    }

    getWeatherMessage(){
        const { error, isLoading, temp, cityName} = this.props;
        if (isLoading) return '...Loading';
        if (error) return 'Vui long thu lai';
        if (!cityName) return 'Nhap ten thanh pho cua ban!';
        return `${cityName} hien tai la: ${temp} oC.`;
    }

    getTempByCityName(){
        const {cityName} = this.state;
        // this.props.startFetchData();
        // getTemp(cityName)
        // .then(temp => this.props.fetchSuccess(cityName, temp))
        // .catch(() => this.props.fetchError());
        this.props.fetchDataThunk(cityName);
    }
    render(){
        return (
            <View style = {styles.comtainer}> 
                <Text style = {styles.message}>{this.getWeatherMessage()}</Text>
                <TextInput
                    style = {styles.textInput}
                    value = {this.state.cityName}
                    onChangeText={text => this.setState({ cityName: text})}
                />
                <TouchableOpacity
                    style = {styles.button}
                    onPress={this.getTempByCityName.bind(this)}
                >
                    <Text style = {styles.buttonText}>Lay nhiet do</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    comtainer: {
        backgroundColor: 'lightblue', 
        flex: 1, 
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        color: 'white',
        fontSize: 20,
    },
    button: {
        backgroundColor: 'grey',
        padding: 10,
        margin: 50
    },
    buttonText: {
        color: 'white',
    },
    textInput: {
        height: 40,
        width: 300,
        backgroundColor: 'yellow',
        margin: 10,
        paddingHorizontal: 10,
        color: 'blue'
    },   
});

function mapStateToProps(state){
    return {
        cityName: state.cityName, 
        temp: state.temp, 
        error: state.error, 
        isLoading: state.isLoading
    };
}

export default connect (mapStateToProps, actionCreators)(Main);

