class TweetsController < ApplicationController

  def index
    render json: Tweet.all,
      each_serializer: TweetSerializer
  end
end
