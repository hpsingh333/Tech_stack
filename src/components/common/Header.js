import React, {Component} from 'react';
import { Text, View, StyleSheet} from 'react-native';

const Header= (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    viewStyle:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F8F8F8',
        height:60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'
    },
    textStyle:{
        fontSize:20
    }
})

export {Header};