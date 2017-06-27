# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170622064227) do

  create_table "blog_sources", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.string   "link",       limit: 255, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "blog_sub_titles", force: :cascade do |t|
    t.string   "name",           limit: 255, null: false
    t.integer  "blog_titles_id", limit: 4
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "blog_sub_titles", ["blog_titles_id"], name: "index_blog_sub_titles_on_blog_titles_id", using: :btree

  create_table "blog_titles", force: :cascade do |t|
    t.string   "name",       limit: 255, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "blogs", force: :cascade do |t|
    t.text     "title",              limit: 65535,    null: false
    t.text     "description",        limit: 16777215, null: false
    t.text     "sub_description",    limit: 65535
    t.string   "author_name",        limit: 255
    t.string   "author_link",        limit: 255
    t.integer  "blog_titles_id",     limit: 4
    t.integer  "blog_sub_titles_id", limit: 4
    t.integer  "blog_sources_id",    limit: 4
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "blogs", ["blog_sources_id"], name: "index_blogs_on_blog_sources_id", using: :btree
  add_index "blogs", ["blog_sub_titles_id"], name: "index_blogs_on_blog_sub_titles_id", using: :btree
  add_index "blogs", ["blog_titles_id"], name: "index_blogs_on_blog_titles_id", using: :btree

end