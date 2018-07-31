import React, {Component} from 'react'

const axios = require('axios');

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ufo: '',
        }
    }

    componentDidMount() {
        let self = this;

        // Make a request for a user with a given ID
        axios.get('/api/ufos')
          .then(function (response) {
            // handle success
            self.setState({
                ufo: response.data[getRandomInt(response.data.length - 1)],
            })
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });

          function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
    }

    renderUfoData() {
        if (!this.state.ufo)
            return (
                <p>Loading random ufo data...</p>
            );

        return (
            <div>
                <h2>Sighting Location - {this.state.ufo.city.toUpperCase()}, {this.state.ufo.country.toUpperCase()}</h2>
                <p>{this.state.ufo.comments}</p>
            </div>
        );
    }

  render() {
      return (
          <div className='App-content-body'>
              <p>{this.props.bodyHeader}</p>
              {this.renderUfoData()}
          </div>
      )
  }
}