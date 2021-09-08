import { ButtonGroup, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { useTodayChecks } from '@sara/hooks';
import { useSession } from 'next-auth/client';
import React from 'react';
import { mutate } from 'swr';
import * as uuid from 'uuid';

import { useStyles } from '../../theme';
/* eslint-disable-next-line */
export interface CheckButtonsGroupProps {
  working: boolean;
}

export function CheckButtonsGroup(props: CheckButtonsGroupProps) {
  const classes = useStyles();
  const [session, loadingSession] = useSession();
  const { todayChecks } = useTodayChecks();

  const handleClickCheckIn = async () => {
    await fetch('/api/checks/in', {
      method: 'Post',
      headers: {
        Authorization: `Bearer ${session.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: uuid.v4() }),
    });

    mutate([`/api/checks/today`, session.access_token]);
  };

  const handleClickCheckOut = async () => {
    const id =
      todayChecks.length === 0 || todayChecks[0].outAt
        ? uuid.v4()
        : todayChecks[0].id;

    await fetch('/api/checks/out', {
      method: 'Post',
      headers: {
        Authorization: `Bearer ${session.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    });

    mutate([`/api/checks/today`, session.access_token]);
  };

  return (
    <div>
      <Grid item spacing={2}>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickCheckIn}
            size={props.working ? 'small' : 'large'}
            endIcon={<ExitToAppOutlinedIcon />}
          >
            Entrada
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={handleClickCheckOut}
            size={props.working ? 'large' : 'small'}
            endIcon={<ExitToAppOutlinedIcon />}
          >
            Salida
          </Button>
        </ButtonGroup>
      </Grid>
    </div>
  );
}

export default CheckButtonsGroup;
