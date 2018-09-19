class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    if @like.save
      render 'api/likes/show'
    else
      render json: ["Could not process request"], status: 401
    end
  end

  def destroy
    @like = Like.find_by(
      user_id: like_params[:user_id],
      likeable_id: like_params[:likeable_id],
      likeable_type: like_params[:likeable_type],
    )
    if @like
      l = @like.dup
      @like.destroy
      render json: l
    else
      render json: ["Connection could not be found"], status: 404
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :likeable_id, :likeable_type)
  end
end
