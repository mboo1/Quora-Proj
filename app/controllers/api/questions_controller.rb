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
        elsif params[:topic].to_i > 0
            @questions = Question.order(Arel.sql('RANDOM()')).limit(6)
            midare = @questions
            # debugger
            render "api/questions/index"
        else
            topic = params[:topic]
            @questions = Question.select("questions.title, questions.id, questions.body, questions.author_id, questions.created_at")
            .joins(:topics)
            .where("topics.title = '#{topic}'")
            render "api/questions/index"
        end
    end

    def search
        search = params[:query]
        search = search.downcase
        @questions = Question.where("lower(questions.title) LIKE '%#{search}%'")
        render "api/questions/index"
    end

    def destroy
        @question = Question.find(params[:id])
        @question.destroy
        render json: ["Question Destroyed"]
    end

    def update
        @question = Question.find(params[:id])
        if @question.update(question_params) 
            render "api/questions/show"
        else 
            render json: @question.errors.full_messages, status: 422
        end
    end

    
    def question_params
        params.require(:question).permit(:title, :body, :author_id, :filter, topic_ids: [])
    end
end
