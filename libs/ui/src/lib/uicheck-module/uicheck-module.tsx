import Grid from '@material-ui/core/Grid';
import { CheckDto, UserDto } from '@sara/contracts';
import { Session } from 'next-auth';
import React from 'react';

import CheckButtonsGroup from '../check-buttons-group/check-buttons-group';
import GreetingsUser from '../greetings-user/greetings-user';
import LastChecks from '../last-checks/last-checks';
import Navbar from '../navbar/navbar';
import { useStyles } from '../theme';

/* eslint-disable-next-line */
export interface UIcheckModuleProps {
  userDto: UserDto;
  working: boolean;
  date: Date;
  checks: CheckDto[];
  /* eslint-disable-next-line */
  onCheckInHandler: any;
  /* eslint-disable-next-line */
  onCheckOuthandler: any;
}

export function UIcheckModule(props: UIcheckModuleProps) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2} key={props.userDto.id} direction="column">
        <Grid item xs={12} justify="center" style={{ margin: 'auto' }}>
          <GreetingsUser
            username={props.userDto.username}
            working={props.working}
          ></GreetingsUser>
        </Grid>
        <Grid item xs={12} justify="center" style={{ margin: 'auto' }}>
          <CheckButtonsGroup
            onCheckInHandler={props.onCheckInHandler}
            onCheckOuthandler={props.onCheckOuthandler}
            working={props.working}
          />
        </Grid>
        <Grid item xs={12} justify="center" style={{ margin: 'auto' }}>
          <LastChecks
            checks={props.checks}
            date={new Date()}
            working={props.working}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default UIcheckModule;
