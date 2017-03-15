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

ActiveRecord::Schema.define(version: 20170303102803) do

  create_table "cvs", force: :cascade do |t|
    t.string   "name"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "template_id"
    t.index ["template_id"], name: "index_cvs_on_template_id"
    t.index ["user_id", "created_at"], name: "index_cvs_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_cvs_on_user_id"
  end

  create_table "educations", force: :cascade do |t|
    t.date     "date_from"
    t.date     "date_to"
    t.string   "description"
    t.integer  "cv_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "degree"
    t.string   "institution"
    t.string   "location"
    t.index ["cv_id"], name: "index_educations_on_cv_id"
  end

  create_table "experiences", force: :cascade do |t|
    t.date     "date_from"
    t.date     "date_to"
    t.string   "description"
    t.integer  "cv_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "job_title"
    t.string   "organization"
    t.string   "location"
    t.index ["cv_id"], name: "index_experiences_on_cv_id"
  end

  create_table "languages", force: :cascade do |t|
    t.string   "name"
    t.integer  "cv_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cv_id"], name: "index_languages_on_cv_id"
  end

  create_table "personal_informations", force: :cascade do |t|
    t.string   "name"
    t.string   "surname"
    t.string   "phone"
    t.string   "email"
    t.date     "birthday"
    t.string   "street"
    t.string   "zipCode"
    t.string   "town"
    t.integer  "cv_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "statement"
    t.string   "profession"
    t.string   "homepage"
    t.string   "linkedin"
    t.string   "github"
    t.index ["cv_id"], name: "index_personal_informations_on_cv_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string   "name"
    t.date     "date_from"
    t.date     "date_to"
    t.string   "description"
    t.integer  "cv_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "page"
    t.index ["cv_id"], name: "index_projects_on_cv_id"
  end

  create_table "skills", force: :cascade do |t|
    t.string   "name"
    t.integer  "cv_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cv_id"], name: "index_skills_on_cv_id"
  end

  create_table "templates", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "author"
    t.string   "view"
    t.string   "tex_class"
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.string   "remember_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
