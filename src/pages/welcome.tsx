import React from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';


import adaptive from '../../assets/adaptive-icon.png';
import colors from '../styles/colors';

export function Welcome(){
  return(
    <SafeAreaView>

      <Image source = {adaptive} style = {styles.image}/> 

      <Text style = {styles.title}> 
        Dados em tempo real!
      </Text>

      <TouchableOpacity style = {styles.button}>
        <Text>
          
           </Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize:32,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:16,
    marginBottom: 10,
    height: 56,
    width: 56,
    color: colors.green

  },

  image:{
    width:292,
    height:284,
    backgroundColor: colors.background
  }
})
