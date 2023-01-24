import React from 'react';
import { BottomCornerDesign } from '../../icons/BottomCornerDesign';
import { AaShortLogo } from '../../icons/AaShortLogo';

export const AvailableTrainings = ({ title, listOfTrainings }) => {
  const mainTitle = title || 'Trainings';

  return (
    <div className="available-trainings">
      <AaShortLogo className="logo" />

      <div className="content-slide">
        <h1>{mainTitle}</h1>
        {listOfTrainings.length > 0 ? (
          <ul>
            {listOfTrainings.map(({ title, url }) => (
              <li key={title}>
                <a rel="noopener" href={url}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <h4>There are no trainings available</h4>
        )}
      </div>

      <BottomCornerDesign className="bottom-corner-design" />
    </div>
  );
};
