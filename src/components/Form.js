import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { addWord, toggleIsAdding } from '../redux/actionCreators';


class Form extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            en: '',
            vn: ''
        };
        this.onAdd = this.onAdd.bind (this);
    }

    onAdd(){
        const {en, vn} = this.state;
        this.props.addWord(en, vn);
        this.props.toggleIsAdding();
    }
    render(){
        return (
            <View style={styles.comtainer}>
                <TextInput 
                    style={styles.textInput}
                    value={this.state.en}
                    onChangeText={text => this.setState({ en: text})}
                    placeholder='English word'
                />
                <TextInput 
                    style={styles.textInput}
                    value={this.state.vn}
                    onChangeText={text => this.setState({ vn: text})}
                    placeholder='Meaning'
                />
                <TouchableOpacity onPress={this.onAdd}>
                    <Text>Add</Text>
                </TouchableOpacity>
                
            </View>

        )
    }
}

function mapStateToProps (state){
    return { myFilterStatus: state.filterStatus }
}

export default connect (null, {toggleIsAdding, addWord})(Form);

const styles = StyleSheet.create({
    comtainer: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: 300,
        backgroundColor: '#E4F6D4',
        margin: 10,
        paddingHorizontal: 10
    },   
});
