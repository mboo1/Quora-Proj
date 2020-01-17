class Api::QuestionsController < ApplicationController

    def create
        @question = Question.new(question_params);
        if @question.save
            render "api/questions/show"
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def show
        @question = Question.find(params[:id])
        render "api/questions/show"
    end

    def index
        # debugger
        if (params[:topic] == '')
            @questions = Question.all
            render "api/questions/index"
        else
            topic = params[:topic]
            @questions = Question.select("questions.title, questions.id, questions.body, questions.author_id, questions.created_at")
            .joins(:topics)
            .where("topics.title = '#{topic}'")
            render "api/questions/index"
        end
    end

    def destroy
        @question = Question.find(params[:id])
        @question.destroy
        render json: ["Question Destroyed"]
    end

    def update
        @question = Question.find(params[:id])

        render "api/questions/show"
    end

    # topic_ids: []
    def question_params
        params.require(:question).permit(:title, :body, :author_id, :filter)
    end
end
