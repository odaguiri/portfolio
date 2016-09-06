module ApplicationHelper
  def user_signed_in?
    session[:user_signed_in?] === true
  end
end
