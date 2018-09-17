import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SearchResults from './search_results';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render () {
    let results;
    if (this.state.searchTerm) {
      results = (
        <div className="search-results-container">
          <Route exact path="/search" render={() => <Redirect to="/search/top" />} />
          <Route path="/search/:section" render={
              () => <SearchResults searchTerm={this.state.searchTerm} />
          }/>
        </div>
      );
    } else {
      results = (
        <div className="search-info">
          <h2>Search Spotify</h2>
          <p>Find your favorite songs, artists, albums, podcasts and playlists.</p>
        </div>
      );
    }

    return (
      <div className="search-container">
        <div className="rela-block modal-input-container">
          <p>Search for an Artist, Track, Album, or Playlist</p>
          <input className="rela-block modal-input" type="text" value={this.state.searchTerm}
            placeholder="Start typing..." onChange={this.handleChange}/>
        </div>
        {results}
      </div>
    );
  }
}

export default Search;
