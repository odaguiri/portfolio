# Load DSL and set up stages
require "capistrano/setup"

# Include default deployment tasks
require "capistrano/deploy"

# Load DSL and Setup Up Stages
require 'capistrano/setup'
require 'capistrano/deploy'
require 'capistrano/rails'
require 'capistrano/bundler'
require 'capistrano/rvm'
require 'capistrano/puma'
require 'capistrano/puma/nginx'
require 'capistrano/puma/workers'
require 'capistrano/npm'

# Loads custom tasks from `lib/capistrano/tasks' if you have any defined.
Dir.glob('lib/capistrano/tasks/*.rake').each { |r| import r }
