class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
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
      render json: ["Invalid credentials"], status: 401
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

  def search_term
    params[:search_term]
  end
end
