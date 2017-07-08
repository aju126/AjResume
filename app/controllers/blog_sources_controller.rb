class BlogSourcesController < ApplicationController
  before_action :set_blog_source, only: [:show, :edit, :update, :destroy]

  # GET /blog_sources
  # GET /blog_sources.json
  def index
    @blog_sources = BlogSource.all
  end

  # GET /blog_sources/1
  # GET /blog_sources/1.json
  def show
  end

  # GET /blog_sources/new
  def new
    @blog_source = BlogSource.new
  end

  # GET /blog_sources/1/edit
  def edit
  end

  # POST /blog_sources
  # POST /blog_sources.json
  def create
    @blog_source = BlogSource.new(blog_source_params)

    respond_to do |format|
      if @blog_source.save
        format.html { redirect_to @blog_source, notice: 'Blog source was successfully created.' }
        format.json { render :show, status: :created, location: @blog_source }
      else
        format.html { render :new }
        format.json { render json: @blog_source.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /blog_sources/1
  # PATCH/PUT /blog_sources/1.json
  def update
    respond_to do |format|
      if @blog_source.update(blog_source_params)
        format.html { redirect_to @blog_source, notice: 'Blog source was successfully updated.' }
        format.json { render :show, status: :ok, location: @blog_source }
      else
        format.html { render :edit }
        format.json { render json: @blog_source.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blog_sources/1
  # DELETE /blog_sources/1.json
  def destroy
    @blog_source.destroy
    respond_to do |format|
      format.html { redirect_to blog_sources_url, notice: 'Blog source was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog_source
      @blog_source = BlogSource.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def blog_source_params
      params.fetch(:blog_source, {})
    end
end
