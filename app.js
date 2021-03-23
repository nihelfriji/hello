import { StatusBar } from 'expo-status-bar';
import React from 'react';
import StyledButton from "./components/StyledButton";
 import {StyleSheet, View,Text,ImageBackground} from 'react-native'; 
 

 export default function App (){
   return( 
    <View style={styles.container}>
     <View style={ styles.carcontainer}>
     <ImageBackground
        source={require('./assets/Pictures/Car1.jpeg')}
        style={styles.images}
/>
     

        

    
    <View style={styles.titles}>

    
       
        <Text style={styles.title}> UrCare </Text>
        <Text style={ styles.subtittle}> Louer Votre Voiture Mainltenant  </Text>
    </View>
    <View style={styles.buttonsContainer}>
    <StyledButton type="primary"
          content={"inscription"}
          onPress={() => {
            console.warn("chargement..");
          }}/>
          <StyledButton
          type="secondary"
          content={"nos voitures"}
          onPress={() => {
            console.warn("chargement..");
          }}
        />
        



    </View>

    
    </View>

       
       <StatusBar style="auto" />
       </View>
     
   );
 };
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

 

    carcontainer:{
        width:'100%',
        height:'100%',
        
        
      },
    titles:{
      marginTop:'30%',
      width:'100%',
      alignItems:'center',
    
    },
    tittle:{
      fontSize:30,
      fontWeight:'300',
    
    },
    subtittle:{
      fontSize:16,
      color:'#d2691e',
    
      
    },
    images:{
      width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute',
    },
    buttonsContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%',
    }    
});
