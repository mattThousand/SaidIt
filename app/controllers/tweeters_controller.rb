class TweetersController < ApplicationController

  def index
    # @tweeter = tweeter module stuff
    render json: @tweeter
  end

end
