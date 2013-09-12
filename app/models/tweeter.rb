class Tweeter < ActiveRecord::Base
  attr_accessible :emotion, :handle, :polarity

  has_many :tweets,
    dependent: :destroy

  before_create :set_emotion_and_polarity
  after_create :create_individual_tweets

  protected

  def set_emotion_and_polarity
    self.emotion = aggregate_tweet_info["emotion"]
    self.polarity = aggregate_tweet_info["polarity"]
  end

  def create_individual_tweets
    tweeter_timeline(self.handle).each do |tweet|
      tweet = tweet.instance_variable_get(:@attrs)[:text]
      clean_tweet(tweet)
      self.tweets.create!(emotion: SadPanda.emotion(tweet), polarity:  SadPanda.polarity(tweet))
    end
  end


  def aggregate_tweet_info
    tweets = []
    tweeter_timeline(self.handle).each do |tweet|
      tweets << tweet.instance_variable_get(:@attrs)[:text]
    end
    tweets = tweets.join(" ")
    clean_tweet(tweets)
    { "emotion" => SadPanda.emotion(tweets), "polarity" => SadPanda.polarity(tweets) }
  end

  def tweeter_timeline(handle)
    @tweeter_timeline ||= Twitter.user_timeline(handle)
  end


  def clean_tweet(tweet)
    tweet.gsub!(non_alphabetic_characters, '')
    tweet.downcase!
    tweet.gsub!(urls, '')
    tweet.gsub!(http, '')
    tweet.gsub!(multiple_spaces,' ')
    tweet
  end

  def non_alphabetic_characters
    /[^a-z ]/i
  end

  def urls
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
  end

  def http
    /(?=\w*h)(?=\w*t)(?=\w*t)(?=\w*p)\w*/
  end

  def multiple_spaces
    /\s\s+/
  end

end
