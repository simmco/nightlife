import React, {Component} from 'react';


import Bar from './Bar';


class BarList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api: props
    }
  }
  render () {
    const bars = this.props.getBar;
    var renderBars = () => {
        if(bars.length === 0) {
          return (
            <p></p>
          );
        }
        else if (bars.message) {
          return (
            <p>Loading...</p>
          )
        }
        return bars.map((bar) => {
          return (
            <div  key={bar._id} >
                <Bar  {...bar}  addUser={this.props.addUser} />
            </div>
          );
        });
    }
    return (
      <div  style={styles.barList}>
        {renderBars()}
      </div>
    );
  }
}

export default BarList;


let styles = {
  barList: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
  }
}
