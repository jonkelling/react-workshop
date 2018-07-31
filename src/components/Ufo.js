import React, {Component} from 'react'

const axios = require('axios');

export default class Ufo extends Component {
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
                // -1 to offset 0 index
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

    render() {
        if (!this.state.ufo)
            return (
                <p>Loading random ufo data...</p>
            );

        return (
            <div>
                <h2>Sighting Location - {this.state.ufo.city.toUpperCase()}, {this.state.ufo.country.toUpperCase()}</h2>
                {/* Do do dangerouslySetInnerHTML in live projects!!! */}
                <p dangerouslySetInnerHTML={{__html: this.state.ufo.comments}}/>
            </div>
        );
    }
}