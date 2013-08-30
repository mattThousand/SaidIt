class Tweeter < ActiveRecord::Base
  attr_accessible :emotion, :handle, :polarity
end
