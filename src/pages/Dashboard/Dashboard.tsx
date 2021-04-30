import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames';
import { Typography, Box, Grid, Button, IconButton, Collapse, Slide } from '@material-ui/core';
import { TransitionGroup } from 'react-transition-group';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { makeStyles } from '@material-ui/core/styles';

import MediaCard from '../../components/Card';

const useStyles = makeStyles(theme => ({
  header: {
    padding: 20,
    color: 'white',
  },
  root: {
    flexGrow: 1,
  },
  content: {
    paddingTop: 20,
  },
  actionButtons: {
    textAlign: 'center',
    paddingTop: 50,
  },
  roundedButton: {
    borderRadius: 50,
  },
  icons: {
    margin: 'auto',
    textAlign: 'center',
  },
  iconButton: {
    border: 'Solid',
    borderRadius: '50%',
    borderColor: '#f50057',
  },
  cards: {
    display: 'inline-flex',
  },
  mobile: {
    margin: 0,
    padding: 0,
  },
}));

const cardOptions = [
  {
    key: 0,
    title: 'Mobile apps',
    imageUrl: '/images/iPhone.jpg',
    subTitle:
      'We develop amazing iOS and Android apps, every app we work on is visual stunning, easy to use and can be utility by a broad range of audiences.',
  },
  {
    key: 1,
    title: 'Cutting EDGE',
    imageUrl: '/images/camera.jpg',
    subTitle:
      'We develop amazing iOS and Android apps, every app we work on is visual stunning, easy to use and can be utility by a broad range of audiences.',
  },
  {
    key: 2,
    title: 'Web Development',
    imageUrl: '/images/computer.jpg',
    subTitle:
      'We develop amazing iOS and Android apps, every app we work on is visual stunning, easy to use and can be utility by a broad range of audiences.',
  },
];

interface IProps {
  children: any;
}

const Mobile = ({ children }: IProps) => {
  const isMobile = useMediaQuery({ maxWidth: 882 });
  return isMobile ? children : null;
};

const Default = ({ children }: IProps) => {
  const isNotMobile = useMediaQuery({ minWidth: 883 });
  return isNotMobile ? children : null;
};

const Dashboard = () => {
  const classes = useStyles();
  const [cards, setCards] = useState(cardOptions);
  const [moveCard, setMoveCard] = useState(false);
  const [currentCard, setCurrentCard] = useState(1);

  const handleMoveCards = (dir: string) => () => {
    setMoveCard(true);
    if (dir === 'left') {
      setCards(cards.concat(cards.splice(0, 1)));
      setCurrentCard((currentCard + 1) % 3);
    } else {
      setCards(cards.concat(cards.splice(0, 2)));
    }
  };

  const headerView = () => {
    return (
      <Box className={classes.header}>
        <Typography gutterBottom variant="h3" component="h3" align="center">
          What We Do
        </Typography>
        <Typography variant="h5" component="p" align="center">
          We develop successful apps for our clients who range from startup <br /> entrepreneurs to Fortune 500s.
        </Typography>
      </Box>
    );
  };

  const contentView = () => {
    return (
      <>
        <Mobile>
          <Box className={classes.content}>
            <Grid container className={classes.root} spacing={2}>
              <Grid className={classes.icons} item xs={2}>
                <IconButton
                  className={classes.iconButton}
                  color="secondary"
                  size="medium"
                  onClick={handleMoveCards('left')}
                >
                  <KeyboardBackspaceIcon />
                </IconButton>
              </Grid>
              <Grid item xs={8}>
                <Grid container justify="center" spacing={2}>
                  <TransitionGroup>
                    <Slide direction="right">
                      <TransitionGroup className={cx(classes.cards, classes.mobile)} component="ul">
                        <Collapse component="li">
                          <MediaCard
                            isActive={true}
                            cardTitle={cards[currentCard].title}
                            imageUrl={cards[currentCard].imageUrl}
                            subTitle={cards[currentCard].subTitle}
                          ></MediaCard>
                        </Collapse>
                      </TransitionGroup>
                    </Slide>
                  </TransitionGroup>
                </Grid>
              </Grid>
              <Grid className={classes.icons} item xs={2}>
                <IconButton
                  className={classes.iconButton}
                  color="secondary"
                  size="medium"
                  onClick={handleMoveCards('right')}
                >
                  <ArrowRightAltIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Mobile>
        <Default>
          <Box className={classes.content}>
            <Grid container className={classes.root} spacing={2}>
              <Grid className={classes.icons} item xs={2}>
                <IconButton
                  className={classes.iconButton}
                  color="secondary"
                  size="medium"
                  onClick={handleMoveCards('left')}
                >
                  <KeyboardBackspaceIcon />
                </IconButton>
              </Grid>
              <Grid item xs={8}>
                <Grid container justify="center" spacing={0}>
                  <TransitionGroup>
                    <Slide direction="right">
                      <TransitionGroup className={classes.cards} component="ul">
                        {cards.map((card, index) => (
                          <Collapse component="li">
                            <MediaCard
                              isActive={index === 1 ? true : false}
                              cardTitle={card.title}
                              imageUrl={card.imageUrl}
                              subTitle={card.subTitle}
                            ></MediaCard>
                          </Collapse>
                        ))}
                      </TransitionGroup>
                    </Slide>
                  </TransitionGroup>
                </Grid>
              </Grid>
              <Grid className={classes.icons} item xs={2}>
                <IconButton
                  className={classes.iconButton}
                  color="secondary"
                  size="medium"
                  onClick={handleMoveCards('right')}
                >
                  <ArrowRightAltIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Default>
      </>
    );
  };

  const footerView = () => {
    return (
      <Button className={classes.roundedButton} size="large" variant="contained" color="secondary">
        View all projects
      </Button>
    );
  };

  return (
    <>
      {headerView()}
      {contentView()}
      <Box className={classes.actionButtons}>{footerView()}</Box>
    </>
  );
};

export default Dashboard;
