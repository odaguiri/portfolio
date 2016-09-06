module Authenticatable
  extend ActiveSupport::Concern

  def authenticate_user!
    session[:user_signed_in?]= authenticate_or_request_with_http_basic do |username, password|
      username == 'root' && password == 'root'
    end
  end
end
