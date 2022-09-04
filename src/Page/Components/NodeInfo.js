import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import NodeInfoInput from './NodeInfoInput';

const NodeInfo = (props) => {

    const [value, setValue] = React.useState(0);

    const [connWithSel, SetConWithSel] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getConnections = () => {
        const connSel = [];
        props.connections.forEach((conn) => {
            if(conn[0] === props.selected[value]){
                connSel.push(conn[1]);
            }else if(conn[1] === props.selected[value]){
                connSel.push(conn[0]);
            }
        });
        SetConWithSel(connSel);
    }
    
    useEffect(() => {
        getConnections();
    }, [value, props.connections]);

    useEffect(() => {
        if(props.selected.length === 1){
            getConnections();
        }
    }, [props.selected.length])

    return (
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <Box sx={{ height: '12%', bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    >
                    {props.selected.map((sel, index) => {
                        return(
                            <Tab label={`${sel.val}`} key={`${index}-tab`} color="secondary"/>
                        )
                    })}
                </Tabs>
            </Box>
            <Box sx={{ height: '100%', bgcolor: 'background.paper', overflowY: 'auto' }}>
                <NodeInfoInput selected={props.selected[value]}
                    changeNodeData={props.changeNodeData}
                    position={value} 
                    connections={connWithSel}
                    />
            </Box>
        </div>
    )
    
}

export default NodeInfo;
