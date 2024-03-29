import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '10px 0 !important',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },

  poster: {
    borderRadius: 20,
    boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
    width: '80%',

    [theme.breakpoints.down('lg')]: {
      margin: '0 auto',
      width: '50%',
      marginBottom: 30,
    },

    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      width: '100%',
      height: 350,
      marginBottom: 30,
    },

  },

  links: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',

    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem 1rem',
    },
  },

  genresContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: '10px 0 !important',
  },

  genreImage: {
    filter: theme.palette.mode === 'dark' && 'invert(1)',
    marginRight: 10,
  },

  castImage: {
    width: '100%',
    maxWidth: '7em',
    height: '8em',
    objectFit: 'cover',
    borderRadius: 10,
  },

  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  video: {
    width: '50%',
    height: '50%',

    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: '90%',
    },
  },
}));
