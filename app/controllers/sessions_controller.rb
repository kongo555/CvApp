class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user
      params[:session][:remember_me] == '1' ? remember(user) : forget(user)
    else
      flash.now[:danger] = 'Invalid email/password combination'
    end
    redirect_to root_url
  end

  def destroy
    log_out if logged_in?
    head :ok
  end
end
