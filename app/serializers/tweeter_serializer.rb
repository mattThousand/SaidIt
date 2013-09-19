class TweeterSerializer < ActiveModel::Serializer

  embed :ids, include: true
  attributes :id,
    :emotion,
    :polarity

  has_many :tweets, key: :tweets, root: :tweets
end
