import React from 'react';
import { BottomCornerDesign } from '../../icons/BottomCornerDesign';
import { Link, Typography } from '@mui/material';
import { AaShortLogo } from '../../icons/AaShortLogo';

export const AvailableTrainings = ({ title, listOfTrainings }) => {
  const mainTitle = title || 'Trainings';

  return (
    <div className="slide-page">
      <div className="content-slide">
        <AaShortLogo className="logo" />
        <h1>{mainTitle}</h1>
        {listOfTrainings.length > 0 ? (
          <ul>
            {listOfTrainings.map(({ title, url }) => (
              <li key={title}>
                <Link underline="none" rel="noopener" href={url}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Typography variant="h4" color="#655e5f">
            This training is de-activated or it has no content - 1
          </Typography>
        )}
        <BottomCornerDesign className="bottom-corner-design" />
      </div>
    </div>
  );
};
