import React, {Component} from 'react';
import {render} from 'react-dom';

export default class GridRow extends Component {
    render() {
      const{cssClass,data} = this.props;
    return (
      <div className={cssClass == "list" ? 'list-group-item' : 'grid-group-item'}>
        <img className="image" src={data.img} alt=""/>
        <div className="list-group-item-heading">
          <h4>{data.title}</h4>
        </div>
      </div>
    );
  }
}
