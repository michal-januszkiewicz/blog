class UsersController < ApplicationController
  before_filter :authenticate_user!
  before_action :require_admin, only: [:index, :destroy]

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    unless @user == current_user
      redirect_to :back, alert: "Access denied."
    end
  end

  def destroy
  end
end