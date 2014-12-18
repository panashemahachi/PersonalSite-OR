class ThoughtsController < ApplicationController
  before_action :set_thought, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @thoughts = Thought.all
    respond_with(@thoughts)
  end

  def show
    respond_with(@thought)
  end

  def new
    @thought = Thought.new
    respond_with(@thought)
  end

  def edit
  end

  def create
    @thought = Thought.new(thought_params)
    @thought.save
    respond_with(@thought)
  end

  def update
    @thought.update(thought_params)
    respond_with(@thought)
  end

  def destroy
    @thought.destroy
    respond_with(@thought)
  end

  private
    def set_thought
      @thought = Thought.find(params[:id])
    end

    def thought_params
      params.require(:thought).permit(:title, :tldr, :category, :preview, :content)
    end
end
