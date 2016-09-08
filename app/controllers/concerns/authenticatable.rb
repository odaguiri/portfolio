module Authenticatable
  extend ActiveSupport::Concern

  def authenticate_user!
    session[:user_signed_in?]= authenticate_or_request_with_http_basic do |username, password|
      username == Rails.application.secrets.auth_username &&
      password == Rails.application.secrets.auth_password
    end
  end
end
