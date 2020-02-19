class Api::UpvotesController < ApplicationController

    def create
        @upvote = Upvote.new(upvote_params)
        if @upvote.save
            render "api/upvotes/show"
        else
            render json: @upvote.errors.full_messages, status: 422
        end
    end

    def destroy
        @upvote = Upvote.find(params[:id])
        if @upvote.destroy
            render json: ["Upvote Destroyed"]
        else
            render json: @upvote.errors.full_messages, status: 422
        end
    end

    def upvote_params 
        params.require(:upvote).permit(:author_id, :answer_id)
    end
end
