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
import AssignmentIcon from '@material-ui/icons/Assignment';
import CompareIcon from '@material-ui/icons/Compare';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Rep2 from '../reportes_/reporte2_/Reporte2';
import FaceIcon from '@material-ui/icons/Face';
import Rep4 from '../reportes_/reporte4_/Reporte4';

import Rep6 from '../reportes_/reporte6_/Reporte6';
import Rep7 from '../reportes_/reporte7_/Reporte7';

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

          <Tab label="Datos Recopilados" icon={<AssignmentIcon />} {...a11yProps(0)} />
          <Tab label="Departamentos mas Infectados" icon={<LandscapeIcon />} {...a11yProps(1)} />
          <Tab label="Infectados por State y Infectedtype " icon={<ContactMailIcon />} {...a11yProps(2)} />
          <Tab label="Ultimos 5 casos" icon={<CompareIcon />} {...a11yProps(3)} />
          <Tab label="Infectados por Rango de edad" icon={<FaceIcon />} {...a11yProps(4)} />
          <Tab label="Monitor" icon={<MonitorIcon />} {...a11yProps(5)} />
          
          <Flip >
          <p className="offset-1 p-4" style={{fontSize: 25}}>{mensaje}</p>
          </Flip >

        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Reportes/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Rep2/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Rep4/>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Rep6/>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <Rep7/>
      </TabPanel>

      <TabPanel value={value} index={5}>
        <Monitor/>
      </TabPanel>

    </div>
  );
}