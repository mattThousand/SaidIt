module TwitterApi

  def self.tweet_info(handle)
    net_tweet_info = self.aggregate_tweet_info(handle)
    net_emotion = net_tweet_info["emotion"]
    net_polarity = net_tweet_info["polarity"]
    output = []
    self.tweeter_timeline(handle).each do |tweet|
      tweet = tweet.instance_variable_get(:@attrs)[:text]
      clean_tweet(tweet)
      output << { "emotion" => SadPanda.emotion(tweet), "polarity" => SadPanda.polarity(tweet), "net_emotion" => net_emotion, "net_polarity" => net_polarity }
    end
    output
  end

  def self.aggregate_tweet_info(handle)
    tweets = []
    tweeter_timeline(handle).each do |tweet|
      tweets << tweet.instance_variable_get(:@attrs)[:text]
    end
    tweets = tweets.join(" ")
    clean_tweet(tweets)
    { "emotion" => SadPanda.emotion(tweets), "polarity" => SadPanda.polarity(tweets) }
  end

  def self.tweeter_timeline(handle)
    @tweeter_timeline ||= Twitter.user_timeline(handle)
  end

  def self.clean_tweet(tweet)
    tweet.gsub!(non_alphabetic_characters, '')
    tweet.downcase!
    tweet.gsub!(urls, '')
    tweet.gsub!(http, '')
    tweet.gsub!(multiple_spaces,' ')
    tweet
  end

  def self.non_alphabetic_characters
    /[^a-z ]/i
  end

  def self.urls
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
  end

  def self.http
    /(?=\w*h)(?=\w*t)(?=\w*t)(?=\w*p)\w*/
  end

  def self.multiple_spaces
    /\s\s+/
  end

end
