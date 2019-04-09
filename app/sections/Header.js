import React from 'react';
import {StyleSheet, Text} from 'react-native';

export class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {isLoggedin: false};
    }

    toggleUser = ()=>{
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn };
        });
    }

    render(){
         let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;

         return(
             <Text onPress={this.toggleUser}>{display}</Text>
         );
    }


}
