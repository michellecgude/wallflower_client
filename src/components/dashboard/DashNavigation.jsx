// REACT IMPORTS
import React from "react";
import { Link as RLink } from "react-router-dom";

// MATERIAL UI IMPORTS
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import Brightness1RoundedIcon from "@material-ui/icons/Brightness1Rounded";
import CategoryRoundedIcon from "@material-ui/icons/CategoryRounded";
import LocalFloristRoundedIcon from "@material-ui/icons/LocalFloristRounded";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";

export const DashboardNavigation = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeRoundedIcon />
      </ListItemIcon>
      <Link to="/dashboard" component={RLink}>
        <ListItemText primary="Home" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Brightness1RoundedIcon />
      </ListItemIcon>
      <Link to="/dashboard/moods" component={RLink}>
        <ListItemText primary="Mood Tracker" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CategoryRoundedIcon />
      </ListItemIcon>
      <Link to="/dashboard/habits" component={RLink}>
        <ListItemText primary="Habit Tracker" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalFloristRoundedIcon />
      </ListItemIcon>
      <Link to="/dashboard/meditations" component={RLink}>
        <ListItemText primary="Meditations" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WbSunnyRoundedIcon />
      </ListItemIcon>
      <Link to="/dashboard/upliftingcontent" component={RLink}>
        <ListItemText primary="Uplifting Content" />
      </Link>
    </ListItem>
  </div>
);
