class BlogPageController < ApplicationController
  before_action :set_blog_titles


  def recent
    @blogs = Blog.all
  end

  def technology
    blog_title = BlogTitle.find_by_name('Technology')
    @blogs = Blog.where(blog_titles_id: blog_title.id )
  end

  def set_blog_titles
    @blog_titles = BlogTitle.all
  end

end
