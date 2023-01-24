import React from 'react';
import Paper from '@mui/material/Paper';
import { Helmet } from 'react-helmet';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';
import { NavigationButtons } from '../NavigationButtons/NavigationButtons';
import { SlidePage } from '../SlidePage/SlidePage';
import { Homepage } from '../Homepage/Homepage';

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { AvailableTrainings } from '../AvailableTrainings/AvailableTrainings';
deckDeckGoHighlightElement();

const TrainingPage = (props) => {
  const {
    body,
    prevSlug,
    nextSlug,
    title,
    currentPageIndex,
    numOfPages,
    type,
    data = {},
    mode = 'live'
  } = props.pageContext;

  const { navigatePrevious, navigateNext, canGoPrevious, canGoNext } = useKeyboardNavigation(prevSlug, nextSlug);

  const renderSlide = () => {
    if (type === 'content') {
      return <SlidePage body={body} />;
    } else if (type === 'homepage') {
      return <Homepage {...data} />;
    } else if (type === 'availableTrainings') {
      return <AvailableTrainings {...data} title={title} />;
    } else {
      return <SlidePage body={body} />;
    }
  };

  const shouldDisplayNavigationBar = () => {
    if (type === 'availableTrainings' || mode !== 'live') {
      return false;
    }

    return true;
  };

  return (
    <>
      <Helmet title={title} />
      {shouldDisplayNavigationBar() ? (
        <Paper elevation={4} className="navigation-buttons-container">
          <NavigationButtons
            navigatePrevious={navigatePrevious}
            navigateNext={navigateNext}
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
            currentPage={currentPageIndex}
            totalPages={numOfPages}
          />
        </Paper>
      ) : null}

      {renderSlide()}
    </>
  );
};

export default TrainingPage;
