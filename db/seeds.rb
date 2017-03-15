users = User.all
50.times do
  users.each { |user| user.cvs.create!(name: "test") }
end
