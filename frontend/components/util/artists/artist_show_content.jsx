import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import AlbumIndex from '../albums/album_container';
import TrackIndex from '../tracks/track_container';

const ArtistShowContent = (props) => {
  if (!props.artist) return null;
  const t_ids = props.artist.track_ids.length ? props.artist.track_ids : [-1];
  const a_ids = props.artist.album_ids.length ? props.artist.album_ids : [-1];
  const section = props.match.params.section;
  return (
    <div className="artist-content">
      <div className="rela-block content-nav">
        <ul className="content-nav-list">
          <li className="rela-inline">
            <Link to={`/artists/${props.artist.id}/overview`}
              className={"rela-block app-link" + ((section === 'overview') ? ' active' : '')}>
              Overview
            </Link>
          </li>
          <li className="rela-inline">
            <Link to={`/artists/${props.artist.id}/about`}
              className={"rela-block app-link" + ((section === 'about') ? ' active' : '')}>
              About
            </Link>
          </li>
        </ul>
      </div>

      <Route path="/artists/:artistId/overview" render={() => {
        return (
          <div className="artist-overview">
            <div className="rela-block artist-section">
              <h2 className="rela-block section-header">Albums</h2>
              <AlbumIndex albumIds={a_ids}/>
            </div>
            <div className="rela-block artist-section">
              <h2 className="rela-block section-header">Tracks</h2>
              <TrackIndex trackIds={t_ids}/>
            </div>
          </div>
        )
      }}/>
      <Route path="/artists/:artistId/about" render={() => {
        return (
          <div className="artist-about">
            <div className="rela-block artist-section">
              <h2 className="rela-block section-header">About</h2>
              <div className="artist-desc">
                <p>{props.artist.description}</p>
              </div>
            </div>
          </div>
        )
      }}/>
    </div>
  );
};

export default withRouter(ArtistShowContent);
