class BlogTitlesController < ApplicationController
  before_action :set_blog_title, only: [:show, :edit, :update, :destroy]

  # GET /blog_titles
  # GET /blog_titles.json
  def index
    @blog_titles = BlogTitle.all
  end

  # GET /blog_titles/1
  # GET /blog_titles/1.json
  def show
  end

  # GET /blog_titles/new
  def new
    @blog_title = BlogTitle.new
  end

  # GET /blog_titles/1/edit
  def edit
  end

  # POST /blog_titles
  # POST /blog_titles.json
  def create
    @blog_title = BlogTitle.new(blog_title_params)

    respond_to do |format|
      if @blog_title.save
        format.html { redirect_to @blog_title, notice: 'Blog title was successfully created.' }
        format.json { render :show, status: :created, location: @blog_title }
      else
        format.html { render :new }
        format.json { render json: @blog_title.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /blog_titles/1
  # PATCH/PUT /blog_titles/1.json
  def update
    respond_to do |format|
      if @blog_title.update(blog_title_params)
        format.html { redirect_to @blog_title, notice: 'Blog title was successfully updated.' }
        format.json { render :show, status: :ok, location: @blog_title }
      else
        format.html { render :edit }
        format.json { render json: @blog_title.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blog_titles/1
  # DELETE /blog_titles/1.json
  def destroy
    @blog_title.destroy
    respond_to do |format|
      format.html { redirect_to blog_titles_url, notice: 'Blog title was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog_title
      @blog_title = BlogTitle.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def blog_title_params
      params.fetch(:blog_title, {})
    end
end
