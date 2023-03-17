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
}));
