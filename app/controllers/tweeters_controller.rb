class TweetersController < ApplicationController

  respond_to :json, :html

  def index
    @tweeters = Tweeter.all

    render json: @tweeters,
          each_serializer: TweeterSerializer
  end

  def create
    @handle  = params[:tweeter][:handle]
    tweeter = Tweeter.new(handle: @handle)
    tweeter.save
    render json: tweeter
  end

end
