class ApplicationController < ActionController::Base
  include Authenticatable
  protect_from_forgery with: :exception

	def append_info_to_payload(payload)
    super
    payload[:host] = request.host
    payload[:remote_ip] = request.remote_ip
	end
end
