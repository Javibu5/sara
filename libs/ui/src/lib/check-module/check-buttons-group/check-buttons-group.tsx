import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Grid } from '@material-ui/core';
import { useTodayChecks } from '@sara/hooks';
import { useSession } from 'next-auth/client';
import React from 'react';
import { ImEnter, ImExit } from 'react-icons/im';
import { mutate } from 'swr';
import { v4 as uuid } from 'uuid';

import { useStyles } from '../../theme';

export interface CheckButtonsGroupProps {
  working: boolean;
}

export function CheckButtonsGroup(props: CheckButtonsGroupProps) {
  const classes = useStyles();
  const [session, loadingSession] = useSession();
  const { todayChecks } = useTodayChecks();

  const handleClickCheckIn = async () => {
    await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || process.env.NX_PUBLIC_API_URL
      }/api/checks/in`,
      {
        method: 'Post',
        headers: {
          Authorization: `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: uuid() }),
      }
    );

    setTimeout(() => mutate([`/api/checks/today`, session.access_token]), 500);
  };

  const handleClickCheckOut = async () => {
    const id =
      todayChecks.length === 0 || todayChecks[0].outAt
        ? uuid()
        : todayChecks[0]._id;

    await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || process.env.NX_PUBLIC_API_URL
      }/api/checks/out`,
      {
        method: 'Post',
        headers: {
          Authorization: `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: id }),
      }
    );

    setTimeout(() => mutate([`/api/checks/today`, session.access_token]), 500);
  };

  return (
    <div>
      <Grid item spacing={2}>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button
            variant={props.working ? 'outline' : 'solid'}
            colorScheme="blue"
            onClick={handleClickCheckIn}
            size={props.working ? 'sm' : 'lg'}
            rightIcon={<ImEnter />}
          >
            Entrada
          </Button>

          <Button
            variant={props.working ? 'solid' : 'outline'}
            colorScheme="blue"
            onClick={handleClickCheckOut}
            size={props.working ? 'lg' : 'sm'}
            rightIcon={<ImExit />}
          >
            Salida
          </Button>
        </ButtonGroup>
      </Grid>
    </div>
  );
}

export default CheckButtonsGroup;
