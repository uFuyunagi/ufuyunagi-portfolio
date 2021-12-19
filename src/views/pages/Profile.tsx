import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const Profile:React.FunctionComponent = () => {
  return (
    <Grid container direction="column">
      <div className="Profile">
        <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5" component="div">Profile</Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5" component="div">Profile</Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5" component="div">Profile</Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5" component="div">Profile</Typography>
        </CardContent>
      </Card>
      </div>
    </Grid>
  );
}

export default Profile;
