import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const NodeInfo = (props) => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const printTest = () => {
        let text = "";
        if(props.selected[value] !== undefined){
            Object.entries(props.selected[value]).forEach(([att, val]) => {
                text += `${att} -> ${val} `;
            })
        } 
        return text;
    }

    return (
        <div>
            <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {props.selected.map((sel, index) => {
                        return(
                            <Tab label={`${sel.val}`} key={`${index}-tab`} />
                        )
                    })}
                </Tabs>
            </Box>
            <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
                <p style={{backgroundColor: 'black', color: 'white'}}>
                    {printTest()}
                </p>
            </Box>
        </div>
    )

}

export default NodeInfo;

/*

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