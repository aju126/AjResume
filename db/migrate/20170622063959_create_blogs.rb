class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.text :title, null: false
      t.text :description, null: false, limit: 16777215
      t.text :sub_description
      t.string :author_name
      t.string :author_link
      t.belongs_to :blog_titles, index:true
      t.belongs_to :blog_sub_titles, index: true
      t.belongs_to :blog_sources, index: true
      t.timestamps null: false
    end
  end
end
