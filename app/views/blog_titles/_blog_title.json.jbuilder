json.extract! blog_title, :id, :created_at, :updated_at
json.url blog_title_url(blog_title, format: :json)