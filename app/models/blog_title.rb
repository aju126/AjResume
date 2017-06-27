class BlogTitle < ActiveRecord::Base
  has_many :blog_sub_titles
  has_many :blogs
end
