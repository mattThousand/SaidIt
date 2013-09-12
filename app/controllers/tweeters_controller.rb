class TweetersController < ApplicationController

  respond_to :json, :html

  def index
    @tweeters = Tweeter.all

    puts @tweeters

    render json: @tweeters,
          each_serializer: TweeterSerializer
  end

  def create
    @handle  = params[:handle]

    tweeter = Tweeter.new(handle: @handle)

    if tweeter.save
      redirect_to '/'
    end
  end

end
