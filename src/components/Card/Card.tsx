import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 350,
    minHeight: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    height: 300,
  },
  subTitle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  roundedButton: {
    borderRadius: 50,
  },
  actionButton: {
    justifyContent: 'center',
    padding: 20,
  },
  activeClass: {
    transform: 'scale(1.1)',
  },
}));

interface IProps {
  cardTitle: string;
  imageUrl: string;
  subTitle: string;
  isActive: any;
}

const MediaCard = ({ cardTitle, imageUrl, subTitle, isActive }: IProps) => {
  const classes = useStyles();

  return (
    <Card className={cx(classes.root, isActive && classes.activeClass)}>
      <CardMedia className={classes.media} image={imageUrl} title="iPhone" />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h4" align="center">
          {cardTitle}
        </Typography>
        <Typography className={classes.subTitle} variant="body2" color="textSecondary" component="p" align="center">
          {subTitle}
        </Typography>
      </CardContent>
      {isActive && (
        <CardActions className={classes.actionButton}>
          <Button className={classes.roundedButton} size="large" variant="contained" color="secondary">
            Read more >
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

MediaCard.propTypes = {
  cardTitle: PropTypes.string,
  imageUrl: PropTypes.string,
  subTitle: PropTypes.string,
};

export default MediaCard;
