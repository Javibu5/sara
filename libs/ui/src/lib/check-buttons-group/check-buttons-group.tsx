import Button from '@material-ui/core/Button';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import clsx from 'clsx';
import React from 'react';

import { useStyles } from '../theme';

/* eslint-disable-next-line */
export interface CheckButtonsGroupProps {
  onCheckInHandler: any,
  onCheckOuthandler: any,
  working: boolean
}


export function CheckButtonsGroup(props: CheckButtonsGroupProps) {

  const classes = useStyles();

  return (
    <div>

      <Button variant="contained" color="primary" onClick={props.onCheckInHandler} size={props.working ? "small" : "large"}
        endIcon={<ExitToAppOutlinedIcon />}
      >
        Entrada
      </Button>
      <br />
      <br />
      <Button variant="contained" color="secondary" onClick={props.onCheckOuthandler} size={props.working ? "large" : "small"} 
        endIcon={<ExitToAppOutlinedIcon/>}
      >
        Salida
        
      </Button>
    </div>
  );
}

export default CheckButtonsGroup;
