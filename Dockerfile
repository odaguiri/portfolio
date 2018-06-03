FROM ruby:2.5

# install dependencies 
RUN apt-get update -qq && apt-get install -y build-essential mysql-client nodejs

# setup app
RUN mkdir /portfolio
WORKDIR /portfolio
COPY Gemfile /portfolio/Gemfile
COPY Gemfile.lock /portfolio/Gemfile.lock
RUN bundle install
RUN bundle exec rails assets:precompile
COPY . /portfolio
