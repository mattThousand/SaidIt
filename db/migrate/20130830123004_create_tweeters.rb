class CreateTweeters < ActiveRecord::Migration
  def change
    create_table :tweeters do |t|
      t.string :handle
      t.string :emotion
      t.string :polarity

      t.timestamps
    end
  end
end
