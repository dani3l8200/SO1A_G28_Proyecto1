import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LandscapeIcon from '@material-ui/icons/Landscape';
import MonitorIcon from '@material-ui/icons/DesktopWindows';
import Flip  from 'react-reveal/Flip';
import Monitor from "../monitor_/Monitor";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Reportes from '../reportes_/reportes';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const mensaje = "Grupo 28";

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Monitor" icon={<MonitorIcon />} {...a11yProps(0)} />
          <Tab label="Vista de Metricas" icon={<LandscapeIcon />} {...a11yProps(1)} />
          <Flip >
          <p className="offset-8 p-4">{mensaje}</p>
          </Flip >
        
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Monitor/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Reportes/>
      </TabPanel>
    </div>
  );
}