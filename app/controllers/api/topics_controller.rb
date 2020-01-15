class Api::TopicsController < ApplicationController

    def index
        @topics = Topic.all.includes(:questions)
        render "api/topics/index"
    end
end
