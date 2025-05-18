# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_05_18_073754) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "contact_messages", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "subject"
    t.text "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "disabilities", force: :cascade do |t|
    t.text "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lessons_autisms", force: :cascade do |t|
    t.text "title"
    t.text "image_url"
    t.bigint "disability_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["disability_id"], name: "index_lessons_autisms_on_disability_id"
  end

  create_table "lessons_dyslexia", force: :cascade do |t|
    t.text "title"
    t.text "image_url"
    t.bigint "disability_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["disability_id"], name: "index_lessons_dyslexia_on_disability_id"
  end

  create_table "lessons_hearing_speeches", force: :cascade do |t|
    t.text "title"
    t.text "image_url"
    t.bigint "disability_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["disability_id"], name: "index_lessons_hearing_speeches_on_disability_id"
  end

  create_table "lessons_visuals", force: :cascade do |t|
    t.text "title"
    t.text "image_url"
    t.bigint "disability_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["disability_id"], name: "index_lessons_visuals_on_disability_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "lessons_autisms", "disabilities"
  add_foreign_key "lessons_dyslexia", "disabilities"
  add_foreign_key "lessons_hearing_speeches", "disabilities"
  add_foreign_key "lessons_visuals", "disabilities"
end
