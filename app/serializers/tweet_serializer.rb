class TweetSerializer < ActiveModel::Serializer
  attributes :id,
    :emotion,
    :polarity,
    :tweeter_id

end
