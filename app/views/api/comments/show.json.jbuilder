# json.set! @comment.id do
    json.extract! @comment, :id, :author_id, :answer_id, :body, :created_at
# end