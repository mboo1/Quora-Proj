class Answer < ApplicationRecord
    validates :body, :author_id, :question_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :question,
        foreign_key: :question_id,
        class_name: :Question

    has_many :upvotes,
        foreign_key: :answer_id,
        class_name: :Upvote

    has_many :comments,
        foreign_key: :answer_id,
        class_name: :Comment
end
