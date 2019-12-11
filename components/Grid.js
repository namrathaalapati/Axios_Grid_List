import React, {Component} from 'react';
import {render} from 'react-dom';
import GridRow from './GridRow';

export default class Grid extends Component {
    render() {
      debugger;
      const{cssClass,data,input} = this.props;
    return (
      <span>
          {((data!=null && input=="")?data.products.map((data, index) =>(
            <GridRow cssClass={cssClass} key={index} data={data} />
          )):"") ||
          ((data!=null && input!="")?
          (data.products.filter(data => data.title.toLowerCase().includes(input.toLowerCase())).length==0)?
          <div className="mar-t-10px item_display">There are no items to display </div>:
          (data.products.filter(data => data.title.toLowerCase().includes(input.toLowerCase())).map((data,index) =>(
            <GridRow cssClass={cssClass} key ={index}data={data} />
          ))):"")
          }
      </span>
    );
  }
}
