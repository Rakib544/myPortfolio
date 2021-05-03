import { Typography } from '@material-ui/core';
import React from 'react';

const NotFound = () => {
    return (
        <section style={{marginTop: '50px'}}>
            <Typography variant="h2" color="secondary" align="center">
                404
            </Typography>
            <Typography variant="h4" color="secondary" align="center">
                Page Not Found
            </Typography>
        </section>
    );
};

export default NotFound;