class AddTweeterIdToTweets < ActiveRecord::Migration
  def up
    add_column :tweets, :tweeter_id, :integer
  end

  def down
    remove_column :tweets, :tweeter_id
  end
end
