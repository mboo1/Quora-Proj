@topics.each do |topic|
    json.set! topic.id do
        json.extract! topic, :id, :title
        json.questionIds topic.questions.pluck(:id)
    end
end