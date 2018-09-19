class Api::ArtistsController < ApplicationController
  def index
    @artists = search_term ? Artist.where('lower(name) LIKE ?', "%#{search_term.downcase}%") : Artist.all
  end

  def show
    @artist = Artist.find_by(id: params[:id])
    if @artist
      render 'api/artists/show'
    else
      render json: ['Artist could not be found'], status: 404
    end
  end

  private

  def search_term
    params[:search_term]
  end
end
