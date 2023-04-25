import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { showAll, showMemorized, showNeedPractice } from '../redux/actionCreators';


class Filter extends React.Component {
    getTextStyle(statusName){
        const {myFilterStatus} = this.props;
        if (statusName === myFilterStatus) return {color: 'yellow', fontWeight: 'bold'};
        return styles.buttonText;
    }

    setFilterStatus(actionType){
        this.props.dispatch ({type: actionType});
    }

  render(){
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={() => this.props.showAll()}>
                <Text style = {this.getTextStyle('SHOW_ALL')}>Show All</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.showMemorized()}>
                <Text style = {this.getTextStyle('MEMORIZED')}>Memorized</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.showNeedPractice()}>
                <Text style = {this.getTextStyle('NEED_PRACTICE')}>Need Practice</Text>
            </TouchableOpacity>
        </View>

    )
  }
}

function mapStateToProps (state){
    return { myFilterStatus: state.filterStatus }
}

export default connect (mapStateToProps,{
    showAll, 
    showMemorized, 
    showNeedPractice
})(Filter);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#583C3C', 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    buttonText:{
        color: 'white',
    }   
});
