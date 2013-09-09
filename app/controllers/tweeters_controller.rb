class TweetersController < ApplicationController

  respond_to :json

  def create
    @tweeter = Tweeter.tweet_info(params[:handle])
    render json: { tweeter: @tweeter }
  end

end
