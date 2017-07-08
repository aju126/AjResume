json.extract! blog_source, :id, :created_at, :updated_at
json.url blog_source_url(blog_source, format: :json)