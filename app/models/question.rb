class Question < ApplicationRecord

    validates :title, :body, :author_id, presence: true
    validates :title, uniqueness: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_many :answers,
        foreign_key: :question_id,
        class_name: :Answer
end
