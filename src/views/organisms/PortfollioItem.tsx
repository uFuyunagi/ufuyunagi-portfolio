import React from 'react';
import { Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import YouTube, { Options } from 'react-youtube';

export interface PortfollioItemProps {
  title: string,
  videoId: string,
  keywords: string[]
}

const youtubePlayerOpts: Options = {
  height: '240',
  width: '345',
  playerVars: {
    autoplay: 0,
  },
};

const PortfollioItem = (props: PortfollioItemProps) => {
  
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardContent>
        <YouTube videoId={props.videoId} opts={youtubePlayerOpts}/>
        <Typography variant="h5" component="div">{props.title}</Typography>
        {props.keywords.map((keyword) => (
          <Chip label={keyword} variant="outlined" />
      ))}
      </CardContent>
    </Card>
  );
}

export default PortfollioItem;