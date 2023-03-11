import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movie: {
    padding: 10,
  },

  title: {
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    width: 230,
    marginTop: 10,
    marginBottom: 0,
    textAlign: 'center',
  },

  link: {
    alignItems: 'center',
    fontWeight: 'bolder',
    textDecoration: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    '&:hover': {
      cursor: 'pointer',

    },
  },

  image: {
    borderRadius: 20,
    height: 300,
    marginBottom: '10px',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
}));
