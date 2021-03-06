json.question do
    json.extract! @question, :id, :title, :body, :author_id, :created_at
    json.answerIds @question.answers.pluck(:id)
    json.authorIds @question.answers.pluck(:author_id)
    json.topicNames @question.topics.pluck(:title)
end

@question.answers.includes(:author, :upvotes, :comments).each do |answer|
    json.answers do
        json.set! answer.id do
            json.extract! answer, :id, :body, :author_id, :question_id, :created_at, :upvotes
        end
    end

    json.users do
        json.set! answer.author.id do
            json.extract! answer.author, :id, :username
        end
    end

    answer.comments.includes(:author).each do |comment|
        json.comments do
            json.set! comment.id do
                json.extract! comment, :id, :author_id, :answer_id, :body, :created_at
            end
        end

        json.users do
            json.set! comment.author.id do
                json.extract! comment.author, :id, :username
            end
        end
    end

    answer.upvotes.each do |upvote|
        json.upvotes do
            json.set! upvote.id do
                json.extract! upvote, :id, :author_id, :answer_id
            end
        end
    end
end


    # answer.comments.each do |comment|
    #     json.comments do
    #         json.set! comment.id do
    #             json.extract! comment, :id, :author_id, :answer_id, :body
    #         end
    #     end
    # end