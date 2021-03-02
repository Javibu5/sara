import React from 'react';
import { UserDto } from '@sara/contracts';
import { useStyles } from '../theme';
import Grid from '@material-ui/core/Grid';
import GreetingsUser from '../greetings-user/greetings-user';
import Navbar from '../navbar/navbar';
import { Session } from 'next-auth';

/* eslint-disable-next-line */
export interface UIcheckModuleProps {
  userDto: UserDto;
  working: boolean;
  open: boolean;
  onOpenSidebar: (event: React.MouseEvent) => void;
  session: Session;
}

export function UIcheckModule(props: UIcheckModuleProps) {
  const classes = useStyles();
  return (
    <div>
      <Grid item xs={12} key={props.userDto.id} direction="column" spacing={2}>
        <Grid container spacing={2}>
          <Navbar
            open={props.open}
            onOpenSidebar={props.onOpenSidebar}
            session={props.session}
          ></Navbar>
        </Grid>

        <Grid container justify="center" spacing={2}>
          <GreetingsUser
            username={props.userDto.username}
            working={props.working}
          ></GreetingsUser>
        </Grid>
      </Grid>
    </div>
  );
}

export default UIcheckModule;
