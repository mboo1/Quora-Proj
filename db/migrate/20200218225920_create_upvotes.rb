class CreateUpvotes < ActiveRecord::Migration[5.2]
  def change
    create_table :upvotes do |t|
      t.integer :answer_id, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
  end
end
