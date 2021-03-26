import Button from '@material-ui/core/Button';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { getOptions,useCheckInHandler, useCheckOutHandler  } from '@sara/hooks';
import { useSession } from 'next-auth/client';
import React from 'react';
import useFetch from 'use-http';

import { useStyles } from '../theme';
/* eslint-disable-next-line */
export interface CheckButtonsGroupProps {
  working: boolean;
}

export function CheckButtonsGroup(props: CheckButtonsGroupProps) {
  const classes = useStyles();
  const [session, loadingSession] = useSession();
  const { request, loading, error } = useFetch('/api/checks');

  const handleClickCheckIn = () => {
    request.post('/in', getOptions(session.accessToken));
  };

  const handleClickCheckOut = () => {
    request.post('/out');
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickCheckIn}
        size={props.working ? 'small' : 'large'}
        endIcon={<ExitToAppOutlinedIcon />}
      >
        Entrada
      </Button>
      <br />
      <br />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClickCheckOut}
        size={props.working ? 'large' : 'small'}
        endIcon={<ExitToAppOutlinedIcon />}
      >
        Salida
      </Button>
    </div>
  );
}

export default CheckButtonsGroup;
