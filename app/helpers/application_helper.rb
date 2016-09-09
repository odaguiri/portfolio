module ApplicationHelper
  def full_title(page)
    title = 'odaga.com.br' 
    title += ' - ' + page if page.present?
    title
  end

  def user_signed_in?
    session[:user_signed_in?] === true
  end
end
