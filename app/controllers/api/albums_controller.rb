class Api::AlbumsController < ApplicationController
  def index
    if album_ids
      @albums = Album.where(id: album_ids)
    elsif search_term
      @albums = Album.where('title LIKE ?', search_term)
    else
      @albums = Album.all
    end
  end

  def show
    @album = Album.find_by(id: params[:id])
    if @album
      render 'api/albums/show'
    else
      render json: ['Album could not be found'], status: 404
    end
  end

  private

  def album_ids
    params[:album_ids]
  end

  def search_term
    params[:search_term]
  end
end
