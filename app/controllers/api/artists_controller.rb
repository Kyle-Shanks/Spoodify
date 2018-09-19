class Api::ArtistsController < ApplicationController
  def index
    if artist_ids
      @artists = Artist.where(id: artist_ids)
    elsif search_term
      @artists = Artist.where('lower(name) LIKE ?', "%#{search_term.downcase}%")
    else
      @artists = Artist.all
    end
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

  def artist_ids
    params[:artist_ids]
  end

  def search_term
    params[:search_term]
  end
end
