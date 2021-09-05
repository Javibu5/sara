import {
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { CheckDto } from '@sara/contracts/check';
import { useStyles } from '../../theme';

/* eslint-disable-next-line */
export interface LastChecksProps {
  date: Date;
  checks: CheckDto[];
  working: boolean;
}

interface PrintCheckProps {
  id: string;
  inAt: Date;
  outAt: Date;
}

const PrintCheck: React.FunctionComponent<PrintCheckProps> = ({
  id,
  inAt,
  outAt,
}) => {
  return (
    <ListItem key={id}>
      Entrada:{' '}
      {inAt
        ? `${new Date(inAt).getHours()}:${new Date(inAt).getMinutes()}`
        : 'pendiente'}
      &nbsp;|&nbsp;Salida:{' '}
      {outAt
        ? `${new Date(outAt).getHours()}:${new Date(outAt).getMinutes()}`
        : 'pendiente'}
    </ListItem>
  );
};

export function LastChecks(props: LastChecksProps) {
  const classes = useStyles();

  console.debug('props', props);

  return (
    <Grid container>
      <Card style={{ width: '100%' }}>
        <CardContent>
          <Typography component="h2">{props.date.toLocaleString()}</Typography>

          {props.working && (
            <Alert variant="outlined" severity="warning">
              Tienes una ticaje abierto
            </Alert>
          )}

          <Divider className={classes.divider} />

          <List className={classes.listRoot}>
            {!props.checks && <ListItem>No hay ticajes</ListItem>}
            {props.checks &&
              props.checks.map((check: CheckDto) => (
                <PrintCheck
                  id={check._id}
                  inAt={check.inAt}
                  outAt={check.outAt}
                />
              ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default LastChecks;
