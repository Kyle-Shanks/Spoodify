class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all
  end

  def show
    @album = Album.find_by(id: params[:id])
    if @album
      render 'api/albums/show'
    else
      render json: ['Album could not be found'], status: 404
    end
  end
end
