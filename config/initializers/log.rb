# Set custom log which fluentd will collect
return unless ENV["RAILS_LOG_TO_STDOUT"].present?

Rails.application.configure do
  logger           = ActiveSupport::Logger.new(STDOUT)
  #logger.formatter = config.log_formatter
  config.logger = logger
  config.lograge.enabled = true
  config.lograge.formatter = Lograge::Formatters::Logstash.new
  config.lograge.custom_options = lambda do |event|
    params = event.payload[:params].reject { |k| %w(controller action).include?(k) }
    {
      name: 'portfolio.request',
      "params" => params
    }
  end
end
