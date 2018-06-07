source 'https://rubygems.org'

# core
gem 'rails', '~> 5.0.0'
gem 'pg'
gem 'puma'

# preprocessors
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'jbuilder', '~> 2.5'
gem 'lograge'
gem 'logstash-event'

# logs
gem 'act-fluent-logger-rails'

# environments
gem 'dotenv-rails'

# assets
source 'https://rails-assets.org' do
  gem 'rails-assets-normalize-css'
  gem 'rails-assets-medium-editor'
end

group :development, :test do
  gem 'byebug', platform: :mri
end

group :development do
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'guard', require: false
  gem 'guard-livereload', require: false
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
