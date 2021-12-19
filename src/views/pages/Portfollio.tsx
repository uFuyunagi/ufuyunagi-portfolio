import { Grid } from '@mui/material';
import React from 'react';
import PortfollioItem, { PortfollioItemProps } from '../organisms/PortfollioItem';

const item1: PortfollioItemProps = {
  title: '動画制作',
  videoId: 'G9yimdquI6',
  keywords: ['Youtube','インタビュー']
}

const item2: PortfollioItemProps = {
  title: '歌ってみた',
  videoId: '2E8YsvlgxD8',
  keywords: ['Youtube','歌']
}

const item3: PortfollioItemProps = {
  title: '歌ってみた',
  videoId: '2E8YsvlgxD8',
  keywords: ['Youtube','歌']
}

const portfolioMovies: PortfollioItemProps[] = [
  item1,item2,item3,item1,item2, item3
]

const Portfollio:React.FunctionComponent = () => {
  return (
    <Grid container direction="column">
      <div className="Portfollio">
        {portfolioMovies.map((item) => (
            <PortfollioItem title={item.title} videoId={item.videoId} keywords={item.keywords}/>
        ))}
      </div>
    </Grid>
  );
}

export default Portfollio;
