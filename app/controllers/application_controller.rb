class ApplicationController < ActionController::Base
  include Authenticatable
  protect_from_forgery with: :exception

	def append_info_to_payload(payload)
    super
  end
end
