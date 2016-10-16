module ApplicationHelper
  def full_title(page)
    title = 'odaga.com.br' 
    title += ' - ' + page if page.present?
    title
  end

  def user_signed_in?
    session[:user_signed_in?] === true
  end

  def fb_like(url)
    url = URI.encode url
    fb_app_id = Rails.application.secrets.fb_app_id
    src = "https://www.facebook.com/plugins/like.php?href=#{url}width=auto&layout=standard&action=like&size=small&show_faces=false&share=true&appId=#{fb_app_id}"
    content_tag(:iframe, nil, src: src, class: 'fb-like', frameborder: 0, allowTransparency: 'true')
  end
end
