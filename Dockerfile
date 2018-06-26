FROM ruby:2.5

# install dependencies 
RUN apt-get update -qq && apt-get install -y build-essential mysql-client nodejs

# setup app
ENV APP /portfolio
RUN mkdir $APP
WORKDIR $APP

# add persistent bundle volume
ENV BUNDLE_PATH=/bundle

# add bundle path

ENV BUNDLE_GEMFILE=$APP/Gemfile 
ENV PATH $APP/bin:$BUNDLE_PATH/bin:$PATH

# enable repository into container
ADD . $APP

RUN bundle install 
