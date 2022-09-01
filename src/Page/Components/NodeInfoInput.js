import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const NodeInfoInput = (props) => {

    const print = () => {
        if (props.selected !== undefined) {
            return (
                <div className='textFieldDiv'>
                    <TextField fullWidth
                        color='secondary'
                        onChange={props.changeNodeData('x', props.position)}
                        margin="normal" label="X position" value={props.selected.x} />
                    <TextField fullWidth
                        color='secondary'
                        onChange={props.changeNodeData('y', props.position)}
                        margin="normal" label="Y position" value={props.selected.y} />
                    <TextField fullWidth
                        color='secondary'
                        onChange={props.changeNodeData('val', props.position)}
                        margin="normal" label="Value" value={props.selected.val} />
                    <TextField fullWidth
                        color='secondary'
                        onChange={props.changeNodeData('radius', props.position)}
                        margin="normal" label="Radius" value={props.selected.radius} />
                </div>
            );
        } else {
            return (<div />);
        }
    }

    return (
        print()
    )

};

export default NodeInfoInput;