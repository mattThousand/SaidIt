class Tweet < ActiveRecord::Base
  attr_accessible :emotion, :polarity

  belongs_to :tweeter
end
