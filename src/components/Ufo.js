import React, {Component} from 'react'
import AppButton from './AppButton';

const axios = require('axios');

export default class Ufo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
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
            });
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(() => {
              self.setState({
                  isLoading: false,
              });
          });
    }

    displayRandomUfo() {
        let newIndex = getRandomInt(this.state.ufoData.length - 1);

        this.setState({
            // -1 to offset 0 index
            ufo: this.state.ufoData[newIndex],
            index: newIndex,
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
        if (this.state.isLoading)
            return (
                <p>Loading random ufo data...</p>
            );

        return (
            <div>
                <small>Sighting Location {this.state.index + 1} of {this.state.ufoData.length}</small>
                {/* Do do dangerouslySetInnerHTML in live projects!!! */}
                <h2 dangerouslySetInnerHTML={{__html: `${this.state.ufo.city.toUpperCase()}, ${this.state.ufo.country.toUpperCase()}`}}/>
                <p dangerouslySetInnerHTML={{__html: this.state.ufo.comments}}/>
                <div className='App-ufo-nav'>
                    <AppButton onClick={this.displayPreviousUfo}>Previous</AppButton>
                    <AppButton onClick={this.displayRandomUfo}>Get Random UFO</AppButton>
                    <AppButton onClick={this.displayNextUfo}>Next</AppButton>
                </div>
            </div>
        );
    }
}