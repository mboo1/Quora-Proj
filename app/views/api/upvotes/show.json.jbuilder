# json.set! @upvote.id do
    json.extract! @upvote, :id, :author_id, :answer_id, :created_at
# end