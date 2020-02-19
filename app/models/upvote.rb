class Upvote < ApplicationRecord
    validates :author_id, :answer_id, presence: true
    validates :author_id, uniqueness: { scope: :answer_id,
        message: "one upvote per user per question!" }

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :answer,
        foreign_key: :answer_id,
        class_name: :Answer

end
