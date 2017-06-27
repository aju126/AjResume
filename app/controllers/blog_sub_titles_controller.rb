class BlogSubTitlesController < ApplicationController
  before_action :set_blog_sub_title, only: [:show, :edit, :update, :destroy]

  # GET /blog_sub_titles
  # GET /blog_sub_titles.json
  def index
    @blog_sub_titles = BlogSubTitle.all
  end

  # GET /blog_sub_titles/1
  # GET /blog_sub_titles/1.json
  def show
  end

  # GET /blog_sub_titles/new
  def new
    @blog_sub_title = BlogSubTitle.new
  end

  # GET /blog_sub_titles/1/edit
  def edit
  end

  # POST /blog_sub_titles
  # POST /blog_sub_titles.json
  def create
    @blog_sub_title = BlogSubTitle.new(blog_sub_title_params)

    respond_to do |format|
      if @blog_sub_title.save
        format.html { redirect_to @blog_sub_title, notice: 'Blog sub title was successfully created.' }
        format.json { render :show, status: :created, location: @blog_sub_title }
      else
        format.html { render :new }
        format.json { render json: @blog_sub_title.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /blog_sub_titles/1
  # PATCH/PUT /blog_sub_titles/1.json
  def update
    respond_to do |format|
      if @blog_sub_title.update(blog_sub_title_params)
        format.html { redirect_to @blog_sub_title, notice: 'Blog sub title was successfully updated.' }
        format.json { render :show, status: :ok, location: @blog_sub_title }
      else
        format.html { render :edit }
        format.json { render json: @blog_sub_title.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blog_sub_titles/1
  # DELETE /blog_sub_titles/1.json
  def destroy
    @blog_sub_title.destroy
    respond_to do |format|
      format.html { redirect_to blog_sub_titles_url, notice: 'Blog sub title was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog_sub_title
      @blog_sub_title = BlogSubTitle.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def blog_sub_title_params
      params.fetch(:blog_sub_title, {})
    end
end
