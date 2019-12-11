import React, {Component} from 'react';
import {render} from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {GetProductDetails} from '../actions/productAction';
import Grid from './Grid'

 class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      inputText:'',
      layout:'',
      displayText:''
    }
  }
  componentDidMount(){
    this.props.GetProductDetails();
  }
  handleChange(e){
    debugger;
    clearTimeout(this.timeOut);
    var data = e.target.value;
    this.setState({displayText:data});
    this.timeOut = setTimeout(() =>{this.updateState(data)}, 200);

  }
  updateState(value){
    debugger;
    this.setState({inputText:value});
  }
  changeUI(e){
    this.setState({layout:e.target.id});
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row mar-t-10px">
            <div className="float-l ">
              <strong>Display</strong>
              <div className="btn-group btn-warning">
                <a href="#" id="list" className="btn btn-sm btn-warning" onClick={this.changeUI.bind(this)} >
                  <span id="list" className="glyphicon glyphicon-th-list"></span>
                    List
                </a>
                <a href="#" id="grid" className="btn btn-sm btn-warning active" onClick={this.changeUI.bind(this)}>
                  <span id="grid" className="glyphicon glyphicon-th"></span>
                  Grid
                </a>
              </div>
            </div>
            <div className="float-r">
              <input type="text" id="search" onChange={this.handleChange.bind(this)} value={this.state.displayText}/>
              <span className="glyphicon glyphicon-search mar-l-10px"></span>
            </div>
          </div>
          <div id="gallery" className="mar-t-10px">
            <Grid cssClass={this.state.layout} data={this.props.products} input={this.state.inputText}/>
          </div>
        </div>
      </div>
    );
  }
}
let  mapStateToProps = (state) => {
    return{
        products:  state
    }
}

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({GetProductDetails}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Main);
