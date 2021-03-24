import Button from '@material-ui/core/Button';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import axios from 'axios';
import { useSession } from 'next-auth/client';
import React, { useEffect, useState } from 'react';
import { mutate } from 'swr';

import { useStyles } from '../theme';

/* eslint-disable-next-line */
export interface CheckButtonsGroupProps {
  working: boolean;
}

export function CheckButtonsGroup(props: CheckButtonsGroupProps) {
  const classes = useStyles();
  const [session, loading] = useSession();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={'daf'}
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
        onClick={'sad'}
        size={props.working ? 'large' : 'small'}
        endIcon={<ExitToAppOutlinedIcon />}
      >
        Salida
      </Button>
    </div>
  );
}

export default CheckButtonsGroup;
