import { Button, Typography } from '@mui/material';
import React from 'react';

import useStyles from './styles';

function Pagination({
  page,
  setPage,
  totalPages,
}) {
  const classes = useStyles();
  const handlePagination = (type) => {
    if (type === 'next' && page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    } else if (type === 'prev' && page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
        onClick={() => handlePagination('prev')}
        disabled={page <= 1}
      >
        Prev
      </Button>

      <Typography
        variant="h4"
        className={classes.pageNumber}
      >
        {page}
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
        onClick={() => handlePagination('next')}
        disabled={page >= totalPages}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
