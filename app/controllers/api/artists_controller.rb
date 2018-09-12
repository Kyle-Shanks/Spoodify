class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find_by(id: params[:id])
    if @artist
      render 'api/artists/show'
    else
      render json: ['Artist could not be found'], status: 404
    end
  end
end
