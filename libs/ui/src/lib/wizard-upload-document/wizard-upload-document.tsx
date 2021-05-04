import { Button, Dialog, Grid, TextField, Typography } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import React from 'react';

import { useStyles } from '../theme';

export type Props = {
  open: boolean;
  onClose: () => void;
};

export const UploadDocumentWizard: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  const { open, onClose } = props;

  const [sport, setSport] = React.useState<string | null>('');
  const [competition, setCompetition] = React.useState<string | null>('');

  const handleCreateCompetition = () => {
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  const handleSport = (newSport: string) => {
    setSport(newSport);
  };

  const handleCompetition = (newCompetition: string) => {
    setCompetition(newCompetition);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Grid container className={classes.container}>
        <Typography className={classes.containerItem} color="textSecondary">
          Document
        </Typography>
        <Grid container item className={classes.containerItem}>
          <TextField
            fullWidth
            id="standard-size-small"
            placeholder="Nombre documento generado"
            size="small"
          />
          <Button
            className={classes.containerItem}
            color="primary"
            variant="contained"
            onClick={handleCreateCompetition}
          >
            Subir archivo
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};