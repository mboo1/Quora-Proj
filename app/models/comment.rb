class Comment < ApplicationRecord

    validates :body, :author_id, :answer_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :answer,
        foreign_key: :answer_id,
        class_name: :Answer
end
