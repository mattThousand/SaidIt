module Tweeter


  def tweeter
    @tweeter ||= Twitter::Client.new()
  end

  def tweeter_timeline
    tweeter.user_timeline(@tweeter)
  end

  def tweeter_tweets

  end


  def concatenated_tweets
    tweets = self.user_tweets.limit(300)
    tweets.pluck(:text).join(" ")
  end

  def get_tweet_emotion(tweet)
    text = tweet.text
    SadPanda.emotion(text)
  end

  def bayesian_emotion_of_tweet(tweet)
    text = tweet.text
    user_classifier = self.machine_learner.classifier
    user_classifier.classify(text).to_s
  end

  def tweet_polarity(tweet)
    text = tweet.text
    SadPanda.polarity(text)
  end

  def twitter_timeline
    tweeter.user_timeline(self.twitter_handle)
  end

  def follower_twitter_timelines
    tweeter.followers(self.twitter_handle)
  end

  def stored_user_tweet_ids
    stored_tweets = self.user_tweets
    stored_tweets.pluck(:tweet_id)
  end

  def stored_follower_ids
    stored_followers = self.followers
    stored_followers.pluck(:twitter_id)
  end

  def store_user_tweets(user_timeline, stored_ids)
    user_timeline.each do |tweet|
      unless self.object_in_database(stored_ids, tweet)
        self.create_user_tweet(tweet)
      end
    end
  end

  def store_follower_tweets(follower, follower_timeline, stored_ids)
    follower_timeline.each do |tweet|
      unless follower.object_in_database(stored_ids, tweet)
        follower.create_follower_tweet(tweet)
      end
    end
  end

  def store_followers(user, follower_timelines, stored_ids)
    follower_timelines.each do |follower|
      unless user.object_in_database(stored_ids, follower)
        user.create_follower(follower)
      end
    end
  end

  def create_user_tweet(tweet)
    self.user_tweets.create!(
      text: tweet.text,
      tweet_id: tweet.id,
      bayesian_emotion: self.bayesian_emotion_of_tweet(tweet),
      emotion: self.get_tweet_emotion(tweet)
    )
  end

  def create_follower(follower)
    self.followers.create!(
      name: follower.name,
      twitter_handle: follower.screen_name,
      twitter_id: follower.id
    )
  end

    def set_default_emotion_attributes
      self.bayesian_emotion = self.get_bayesian_emotion(self,self)
      self.emotion = self.get_emotion(self)
      self.polarity = self.get_polarity(self)
      self.save!
    end

    def set_machine_learner
      machine_learner = self.build_machine_learner
      machine_learner.save!
    end


    def populate_user_tweets
      user_timeline = self.twitter_timeline
      stored_ids = self.stored_user_tweet_ids
      self.store_user_tweets(user_timeline, stored_ids)
    end


    def populate_followers
      follower_timelines = self.follower_twitter_timelines
      stored_ids = self.stored_follower_ids
      self.store_followers(self, follower_timelines, stored_ids)
    end

    def populate_follower_tweets
      followers = self.followers
      self.followers.each do |follower|
        begin
          follower_timeline = follower.twitter_timeline
        rescue
          follower_timeline = nil
        end
        if follower_timeline
          stored_ids = follower.stored_follower_tweet_ids
          self.store_follower_tweets(follower, follower_timeline, stored_ids)
        end
      end
    end


    def populate_follower_tweets
      followers = self.followers
      self.followers.each do |follower|
        begin
          follower_timeline = follower.twitter_timeline
        rescue
          follower_timeline = nil
        end
        if follower_timeline
          stored_ids = follower.stored_follower_tweet_ids
          self.store_follower_tweets(follower, follower_timeline, stored_ids)
        end
      end
    end

end
