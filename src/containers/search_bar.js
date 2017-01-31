import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h1 className="light-green-text center">Search by City</h1>
        <form onSubmit={this.onFormSubmit}>
          <div className="col s8">
            <input 
              placeholder="Get a five-day forecast..."
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
          <div className="col s4 center">
            <button type="submit" className="btn light-green">Get Data</button>
          </div>
        </form>
      </div>
    );
  }

  onInputChange(e) {
    this.setState({term: e.target.value});
  }

  onFormSubmit(e) {
    e.preventDefault();

    // fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);