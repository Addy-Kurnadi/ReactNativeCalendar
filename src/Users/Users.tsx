
import { Component } from "react"
import * as React from "react"
import { Text, View, ScrollView, StyleSheet, Button } from "react-native"
import { styles } from './Users.style'
import { array } from 'prop-types';

export class Users extends Component
{

    render(){
        return (
            // <ScrollView horizontal contentContainerStyle={{flexGrow: 1}}>
            //     <View style={styles.alightViewWithPadings}>
            //         <View style={[styles.backgroundMidle, styles.colorBlue1]}>
            //             <Text style={styles.textAlightCenter}>{this.props.children}</Text>
            //         </View>
            //         <View style={[styles.backgroundMidle, styles.colorBlue2]}>
            //             <Text style={styles.textAlightCenter}>Adam</Text>
            //         </View>
            //         <View style={[styles.backgroundMidle, styles.colorBlue3]}>
            //             <Text style={styles.textAlightCenter}>Bruno</Text>
            //         </View>   
            //     </View>
            // </ScrollView>


            <ScrollView horizontal contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.alightViewWithPadings}>
                    {this.props.children.map((name,index) => {
                        return  <View style={[styles.backgroundMidle, styles.colorBlue1]}> 
                                    <Text style={styles.textAlightCenter}>{name}</Text>      
                                </View>
                    })}
                </View>
            </ScrollView>

        )
    }
}
 
