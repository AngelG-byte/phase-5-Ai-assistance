class AisController < ApplicationController
skip_before_action :check_ai, only: [:create, :index]

def index
    ai = Ai.all
    render json: ai
end

def show
        ai = Ai.find_by(id: session[:ai_id])
        if ai
            render json: ai
        else
            render json: { message: "Personality not found" }, status: 404
        end
    end

    def create
        ai = Ai.create!(ai_params)
        session[:ai_id]= ai.id
        render json: ai, status: :created
    end

    private
    def ai_params
        params.permit(:name, :password, :prompt)
    end
end
