import * as React from 'react';
import { FC, createElement } from 'react';
import { Card, Box, Typography, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

import cartouche from './cartouche.png';
import cartoucheDark from './cartoucheDark.png';

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 52,
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
  main: (props) => ({
    overflow: 'inherit',
    padding: 16,
    background: `url(${
      theme.palette.mode === 'dark' ? cartoucheDark : cartouche
    }) no-repeat`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .icon': {
      color: theme.palette.mode === 'dark' ? 'inherit' : '#dc2440',
    },
  }),
  title: {},
}));

const CardWithIcon = (props) => {
  const { icon, title, subtitle, to, children } = props;
  const classes = useStyles(props);
  return (
    <Card className={classes.card}>
      {/*<Link to={to}>*/}
      {/*<div className={classes.main}>*/}
      {/*<Box width="3em" className="icon">*/}
      {/*{createElement(icon, { fontSize: 'large' })}*/}
      {/*</Box>*/}
      {/*<Box textAlign="right">*/}
      {/*<Typography*/}
      {/*className={classes.title}*/}
      {/*color="textSecondary"*/}
      {/*>*/}
      {/*{title}*/}
      {/*</Typography>*/}
      {/*<Typography variant="h5" component="h2">*/}
      {/*{subtitle || ' '}*/}
      {/*</Typography>*/}
      {/*</Box>*/}
      {/*</div>*/}
      {/*</Link>*/}
      {children && <Divider />}
      {children}
    </Card>
  );
};

export default CardWithIcon;
