import React from 'react';
import { StyleSheet, Image} from 'react-native';

export class Hero extends React.Component {

    render(){
        return(
            <Image
                style = {Styles.heroImage}
                source = {require('./img/pexels.jpg')}

            />
        );
    }

}

const Styles = StyleSheet.create({
    heroImage:{
        width: undefined,
        height: undefined,
        flex: 8,
    }
})
