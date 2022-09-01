import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import NodeInfoInput from './NodeInfoInput';

const NodeInfo = (props) => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
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
            <Box sx={{ height: '100%', bgcolor: 'background.paper' }}>
                <NodeInfoInput selected={props.selected[value]}
                    changeNodeData={props.changeNodeData}
                    position={value} />
            </Box>
        </div>
    )
    
}

export default NodeInfo;

/*


const printTest = () => {
    let text = "";
    if(props.selected[value] !== undefined){
        Object.entries(props.selected[value]).forEach(([att, val]) => {
            text += `${att} -> ${val} `;
        })
    } 
    return text;
}

const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
    setValue(newValue);
};

return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>
  );
}

<div classNameName="Node-info">
            {props.selected.map((node, value) => {
                return(
                    <div key={`${node.val}-${value}`}>
                        <button classNameName="btn btn-dark" 
                            type="button" data-toggle="collapse" 
                            data-target={`#${value}collapse`} aria-expanded="false" 
                            aria-controls={`${value}collapse`}>
                            {node.val}
                            </button>
                        <div classNameName="collapse multi-collapse" id={`${value}collapse`}>
                            <div classNameName="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                            </div>
                    </div>
                );
            })}
        </div>

*/