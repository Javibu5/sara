import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuIcon from '@material-ui/icons/Menu';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { useStyles } from '../theme';

export interface SidebarProps {
  open: boolean;
  onCloseSidebar: (event: React.MouseEvent) => void;
}

export function Sidebar({ open, onCloseSidebar }: SidebarProps) {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={onCloseSidebar}>
          <MenuIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <Link href="/check">
          <ListItem button>
            <ListItemIcon>
              <QueryBuilderIcon />
            </ListItemIcon>
            <ListItemText primary="Ticajes" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

export default Sidebar;
