import React from 'react';
import { Switch } from 'react-native';
import { styles } from '../screens/Map'

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
}

export { ToggleCampus };