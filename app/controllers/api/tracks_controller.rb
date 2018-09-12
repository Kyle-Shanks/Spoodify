class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
  end

  def show
    @track = Track.find_by(id: params[:id])
    if @track
      render 'api/tracks/show'
    else
      render json: ['Track could not be found'], status: 404
    end
  end
end
