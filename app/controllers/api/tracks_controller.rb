class Api::TracksController < ApplicationController
  def index
    @tracks = track_ids ? Track.where(id: track_ids) : Track.all
  end

  def show
    @track = Track.find_by(id: params[:id])
    if @track
      render 'api/tracks/show'
    else
      render json: ['Track could not be found'], status: 404
    end
  end

  private

  def track_ids
    params[:track_ids]
  end

  def search_term
    params[:search_term]
  end
end
