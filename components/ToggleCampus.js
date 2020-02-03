import React from 'react';
import { Switch, StyleSheet } from 'react-native';

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
                onValueChange={(val) => this.props.onChange(val)}
            ></Switch>
        );
    }
}

const styles = StyleSheet.create({
    switch: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})

export { ToggleCampus };