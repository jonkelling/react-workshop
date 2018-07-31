import React, {Component} from 'react'

const axios = require('axios');

export default class Ufo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ufoData: '',
            ufo: '',
            index: 0,
        }

        this.displayRandomUfo = this.displayRandomUfo.bind(this);
    }

    componentDidMount() {
        let self = this;

        // Make a request for a user with a given ID
        axios.get('/api/ufos')
          .then(function (response) {
            // handle success
            self.setState({
                ufo: response.data[self.state.index],
                ufoData: response.data,
            })
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
    }

    displayRandomUfo() {
        this.setState({
            // -1 to offset 0 index
            ufo: this.state.ufoData[getRandomInt(this.state.ufoData.length - 1)],
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
                {/* Do do dangerouslySetInnerHTML in live projects!!! */}
                <h2 dangerouslySetInnerHTML={{__html: `Sighting Location - ${this.state.ufo.city.toUpperCase()}, ${this.state.ufo.country.toUpperCase()}`}}/>
                <p dangerouslySetInnerHTML={{__html: this.state.ufo.comments}}/>
                <button className='bootstrap-btn' onClick={this.displayRandomUfo}>Get Random UFO</button>
            </div>
        );
    }
}