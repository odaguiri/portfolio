class ApplicationController < ActionController::Base
  include Authenticatable
  protect_from_forgery with: :exception

  def append_info_to_payload(payload)
    super
    payload[:remote_ip] = request.remote_ip
    payload[:location] = Geocoder.search(request.remote_ip).first.coordinates.join(',')
  end
end
