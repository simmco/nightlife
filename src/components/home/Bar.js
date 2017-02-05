import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class Bar extends Component{
  constructor(props) {
    super(props);

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(e){
    if (localStorage.getItem('token') !== null) {
        this.props.addUser(this.props.location, this.props._id);
    } else {
      browserHistory.push(`/signin`);
    }

  }
  render() {
    return (
      <Card style={styles.cardWrapper}>
        <CardMedia
          // overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />
        >
          <img src={this.props.img} />
        </CardMedia>
        <CardTitle title={this.props.name} />
        <CardText>
          {this.props.snippet}
        </CardText>
        <CardActions >
          <FlatButton  onClick={this.buttonClicked} label={this.props.visitors + ' People are going'} />
        </CardActions>
      </Card>

    );
  }

}

export default Bar;

let styles = {
  cardWrapper: {
    width: '280px',
    height: '520px',
    textAlign: 'center',
    margin: '5px 10px'
  }
}
