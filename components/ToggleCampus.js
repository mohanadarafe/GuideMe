import React from 'react';
import { Switch } from 'react-native';
import { styles } from '../screens/Map'

<<<<<<< HEAD
/**
 * Toggle Switch between Campus
 * Prop1: val | value of the switch
 * Prop2: onChange | change value of switch
 * <ToggleCampus val={this.state.switchValue} onChange={this.toggleSwitch}/>
 */
export default class ToggleCampus extends React.Component {
    render () {
        return (
            <Switch
                style={styles.switch}
                value={this.props.val}
                onValueChange = {(val) => this.props.onChange(val)}
                trackColor={{true: "green", false: "red"}}
            ></Switch>
        );
    }
=======

function ToggleCampus (props) {
    return (
        <Switch
            style={styles.switch}
            value={props.val}
            onValueChange={(val) => props.onChange(val)}
            trackColor={{ true: "green", false: "red" }}
        ></Switch>
    );
>>>>>>> a2f585f4e900a93b5be5584f849f0b0adc578e55
}

export { ToggleCampus };