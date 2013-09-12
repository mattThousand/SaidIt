class TweeterSerializer < ActiveModel::Serializer
  attributes :id,
    :emotion,
    :polarity
end
