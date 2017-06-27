class CreateBlogSubTitles < ActiveRecord::Migration
  def change
    create_table :blog_sub_titles do |t|
      t.string :name, null:false
      t.belongs_to :blog_titles, index: true
      t.timestamps null: false
    end
  end
end
