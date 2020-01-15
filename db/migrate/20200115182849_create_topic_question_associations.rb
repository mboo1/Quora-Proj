class CreateTopicQuestionAssociations < ActiveRecord::Migration[5.2]
  def change
    create_table :topic_question_associations do |t|
      t.integer :topic_id, null: false
      t.integer :question_id, null: false
      t.timestamps
    end
  end
end
