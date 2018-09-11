class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:name_or_email],
      params[:user][:password]
    )
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ["No current user"], status: 404
    end
  end
end
