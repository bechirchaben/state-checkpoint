import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "bechir",
        bio: "taleb moutafawe9",
        imgSrc: "https://vl-media.fr/wp-content/uploads/2023/08/Luffy1.jpg",
        profession: "web developer"
      },
      shows: false,
      mountedTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleShow}>
            {this.state.shows ? 'Hide Profile' : 'Show Profile'}
          </button>
          {this.state.shows && (
            <div>
              <h1>{this.state.Person.fullName}</h1>
              <p>{this.state.Person.bio}</p>
              <img src={this.state.Person.imgSrc} alt={this.state.Person.fullName} />
              <h2>{this.state.Person.profession}</h2>
            </div>
          )}
          <p>Component mounted {this.state.mountedTime} seconds ago.</p>
        </header>
      </div>
    );
  }
}

export default App;
