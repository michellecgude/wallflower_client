import React from "react";
import { Link as RLink } from "react-router-dom";

import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";

export const DashboardList = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/dashboard" component={RLink}>
        <ListItemText primary="Home" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link to="/dashboard/moods" component={RLink}>
        <ListItemText primary="Mood Tracker" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to="/dashboard/habits" component={RLink}>
        <ListItemText primary="Habit Tracker" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link to="/dashboard/meditations" component={RLink}>
        <ListItemText primary="Meditations" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="/dashboard/upliftingcontent" component={RLink}>
        <ListItemText primary="Uplifting Content" />
      </Link>
    </ListItem>
  </div>
);
