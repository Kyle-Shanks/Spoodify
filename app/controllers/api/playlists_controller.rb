class Api::PlaylistsController < ApplicationController
  def index
    if playlist_ids
      @playlists = Playlist.where(id: playlist_ids)
    elsif search_term
      @playlists = Playlist.where('lower(title) LIKE ?', "%#{search_term.downcase}%")
    else
      @playlists = Playlist.all
    end
  end

  def show
    @playlist = Playlist.find_by(id: params[:id])
    if @playlist
      render 'api/playlists/show'
    else
      render json: ['Playlist could not be found'], status: 404
    end
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render 'api/playlists/show'
    else
      render json: ["Could not process request"], status: 401
    end
  end

  def destroy
    @playlist = Playlist.find_by(id: params[:id])
    if @playlist
      p_id = @playlist.id
      @playlist.destroy
      render json: { playlistId: p_id }
    else
      render json: ["Playlist could not be found"], status: 404
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title, :user_id)
  end

  def playlist_ids
    params[:playlist_ids]
  end

  def search_term
    params[:search_term]
  end
end
