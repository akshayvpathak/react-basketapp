import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Loading() {
  return (
    <div>
      <Skeleton variant="rect" width={550} height={500} />
    </div>
  );
}