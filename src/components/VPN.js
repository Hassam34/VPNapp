import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import { CardSection, Header, Button, Spinner } from './common';
import { icons } from '../../constants/Image';
import { Servers } from '../../constants/Server';
import { Fonts } from '../utilts/Fonts';

class VPN extends Component {
    state = {
        connect: false,
        server: null,
        show: false,
        automatic: {
            name: "Automatic",
            icon: icons.automatic
        }
    }

    renderServer() {
        const { server, automatic } = this.state
        const connection = server || automatic
        return (
            <View style={styles.viewStyle}>

                <Image source={connection.icon} style={{ marginRight: 10 }} />
                <Text style={styles.textStyle}>{connection.name}</Text>
                <Image source={icons.dropdown} style={{ marginLeft: 10 }} />


            </View>
        )
    }

    handleServer(){
            this.setState({connect:false, show:true})
    }

    renderAllServers() {
        const { show, server, automatic } = this.state
        const connection = server || automatic
        return (
            <Modal style={{backgroundColor:'red',justifyContent:'flex-end',marginTop:10,}} visible={show} transparent animationType='fade'>
                <View>
                    <View style={{backgroundColor:'white',alignSelf:'center'}}>
                        <Text style={{fontSize:20, fontFamily:Fonts.BurlingameProSemiBold}}>Pick Your Server</Text>
                    </View>
                </View>
            </Modal>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText='VPN Shield' />
                <View style={styles.maincontainer}>

                    <View style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        marginTop: 20,
                        borderRadius: 20,
                        width: 160,
                        height: 30,
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 18, fontFamily: Fonts.BurlingameProSemiBold }}>{this.state.connect ? 'Connected' : 'Disconected'}</Text>
                        <View style={{ backgroundColor: this.state.connect ? '#16F32F' : 'gray', marginLeft: 10, height: 10, width: 10, borderRadius: 50, marginRight: 8 }}></View>
                    </View>

                    <Image source={this.state.connect ? icons.online : icons.offline} style={{ width: 170, height: 170 }} />
                    <TouchableOpacity onPress={() => (this.setState({ connect: !this.state.connect }))} >
                        <View style={{
                            marginBottom: 150,
                            marginTop: 20,
                            borderRadius: 5,
                            width: 160,
                            height: 40,
                            justifyContent: 'center',
                            backgroundColor: '#007aff',
                            alignItems: 'center'
                        }}>
                            <Text style={{ fontSize: 18, color: 'white', fontFamily: Fonts.BurlingameProSemiBold }}>{this.state.connect ? 'Disconect' : 'Connect Now'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=> (this.setState({show:true}) )    }>
                    {this.renderServer()}
                </TouchableOpacity>
                        {/* {this.renderAllServers()} */}
            </View>
        );
    }
}
export default VPN;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    viewStyle: {

        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.9,
        elevation: 2,
        position: 'relative',
        // borderBottomWidth:3,
        // borderColor:'11111',
        // borderWidth:2,

    },
    textStyle: {
        fontFamily: Fonts.BurlingameProRegular,
        fontSize: 20
    }
})