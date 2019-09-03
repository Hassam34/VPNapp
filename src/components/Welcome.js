import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { background } from '../../constants/Image'
import { Fonts } from '../utilts/Fonts';


import { CardSection, Header, Button, Spinner } from './common';


const BackgroundImages = [
    {
        title: 'Secured, Forever',
        img: background.welcome
    },
    {
        title: 'Secured, Forever',
        img: background.encrypted
    },
    {
        title: 'Secured, Forever',
        img: background.security
    },
]


class Welcome extends Component {

    renderImage(){
        return(
            <ScrollView style={{flex:0.8, width:250}}
            horizontal 
            contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}} 
            pagingEnabled
            scrollEnabled
            decelerationRate={16}
            showsHorizontalScrollIndicator={false}>
                {BackgroundImages.map((item,index) =>(
                       <View key={`img-${index}`}>
                       <Image source={item.img}
                           resizeMode='center'
                           style={{ marginTop: 10, width: 250, height: 240 ,alignSelf:'center'}} />
                       </View>
                ))}
               
           </ScrollView>
        )
    }

    renderDots(){
        return(
            <View style={{flexDirection:'row',marginTop:20}}>
                <View style={{backgroundColor:'gray', height:10,width:10, borderRadius:50,marginRight:8}}></View>
                <View style={{backgroundColor:'#D1D1D1', height:10,width:10, borderRadius:50,marginRight:8}}></View>
                <View style={{backgroundColor:'#D1D1D1', height:10,width:10, borderRadius:50,marginRight:8}}></View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                {/* <ImageBackground source={require('../../assets/images/vpn_background3.jpg')} style={{width: '100%', height: '100%'}} > */}
                <View style={styles.maincontainer}>
                    <Text style={{flex:0.2,marginTop:70, fontSize: 30, fontFamily:Fonts.BurlingameProRegular }}>
                        VPN Shield
                    </Text>
                   {this.renderImage()}
                </View>
                <View style={styles.bottomButton}>
                    <View style={{ marginBottom: 10 }} >
                        <Text style={{ fontSize: 20,fontFamily:Fonts.BurlingameProSemiBold }}>
                            Secured, Forever
                    </Text>
                    </View>
                    <View style={{ alignItems: 'center', marginBottom: 50 }}>
                        <Text style={{ fontSize: 11, alignItems: "center",fontFamily:Fonts.BurlingameProRegular }}>
                            Unblock any blocked website and stay secure with VPN Shield.
                    </Text>
                        <Text style={{ alignItems: 'center', fontSize: 11 ,fontFamily:Fonts.BurlingameProRegular}}>
                            Easy use with onse-click activation. Unlimited bandwidth!
                    </Text>
                    {this.renderDots()}
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('VPN')} >
                        <View style={{ borderRadius: 20, width: 160, height: 40, justifyContent: 'center', backgroundColor: '#E51C24', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, color: 'white', fontFamily:Fonts.BurlingameProSemiBold }}>Get Started</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* </ImageBackground> */}

            </View>
        );
    }
}
const styles = StyleSheet.create({
    maincontainer: {
        flex:2,
        alignItems: 'center',
        //sjustifyContent: 'center',
        //height:10,
       // backgroundColor:'yellow',
        // marginBottom:300
    },
    bottomButton: {
      //backgroundColor:'yellow',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30,
        alignItems: 'center'
    }
})
export default Welcome;