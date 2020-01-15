class Topic < ApplicationRecord
    validates :title, presence: true
    validates :title, uniqueness: true

    has_many :question_associations,
        foreign_key: :topic_id,
        class_name: :TopicQuestionAssociation

    has_many :questions,
        through: :question_associations,
        source: :question
end
