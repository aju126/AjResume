class CreateBlogSources < ActiveRecord::Migration
  def change
    create_table :blog_sources do |t|
      t.string :name
      t.string :link, null: false
      t.timestamps null: false
    end
  end
end
