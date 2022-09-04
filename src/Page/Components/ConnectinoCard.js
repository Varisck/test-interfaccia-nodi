import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));
  
const ConnectionCard = (props) => {

    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    }

    return(
        <Card sx={{backgroundColor: 'background.tab' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }} onClick={handleClick}>
                <CardContent>
                    {props.value}
                </CardContent>
                <ExpandMore 
                    expand={expanded}
                    aria-expanded={expanded}
                    aria-label="show more">
                <ExpandMoreIcon />
                </ExpandMore>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>X: {props.x}</Typography>
                    <Typography paragraph>Y: {props.y}</Typography>
                    <Typography paragraph>Radius: {props.radius}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    )

};

export default ConnectionCard;