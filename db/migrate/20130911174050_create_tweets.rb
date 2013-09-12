class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.string :emotion
      t.string :polarity

      t.timestamps
    end
  end
end
