import React from 'react';
import { BottomCornerDesign } from '../../icons/BottomCornerDesign';
import { Link, Typography } from '@mui/material';
import { AaShortLogo } from '../../icons/AaShortLogo';

export const AvailableTrainings = (props) => {
  const title = props.title || 'Training';
  return (
    <div className="slide-page">
      <div className="content-slide">
        <AaShortLogo className="logo" />
        <h1>{title}</h1>
        {props.body.length > 0 ? (
          <ul>
            {props.body.map((training) => (
              <li key={training.node?.frontmatter?.title}>
                <Link
                  target="_blank"
                  underline="none"
                  rel="noopener"
                  href={`https://${training?.node?.frontmatter?.title}--aa-trainings.netlify.app`}
                >
                  {training.node?.frontmatter?.title}
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
