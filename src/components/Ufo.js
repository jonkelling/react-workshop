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
        this.displayNextUfo = this.displayNextUfo.bind(this);
        this.displayPreviousUfo = this.displayPreviousUfo.bind(this);
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

    displayNextUfo() {
        let newIndex = this.state.index + 1;

        if (newIndex > this.state.ufoData)
            return null;

        this.setState({
            index: newIndex,
            ufo: this.state.ufoData[newIndex],
        });
    }

    displayPreviousUfo() {
        let newIndex = this.state.index - 1;

        if (newIndex <= 0)
            return null;

        this.setState({
            index: newIndex,
            ufo: this.state.ufoData[newIndex],
        });
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
                <div className='App-ufo-nav'>
                    <button className='bootstrap-btn' onClick={this.displayPreviousUfo}>Previous</button>
                    <button className='bootstrap-btn' onClick={this.displayRandomUfo}>Get Random UFO</button>
                    <button className='bootstrap-btn' onClick={this.displayNextUfo}>Next</button>
                </div>
            </div>
        );
    }
}