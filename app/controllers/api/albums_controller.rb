class Api::AlbumsController < ApplicationController
  def index
    @albums = album_ids ? Album.where(id: album_ids) : Album.all
  end

  def show
    @album = Album.find_by(id: params[:id])
    if @album
      render 'api/albums/show'
    else
      render json: ['Album could not be found'], status: 404
    end
  end

  def album_ids
    params[:album_ids]
  end
end
