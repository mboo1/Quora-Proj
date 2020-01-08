# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Question.delete_all

u1 = User.create!(
    username: 'guest',
    email: 'guest@gmail.com',
    password: 'password'
)

u2 = User.create!(
    username: 'Fido',
    email: 'fido@gmail.com',
    password: '123456'
)

u3 = User.create!(
    username: 'Rex',
    email: 'rex@hotmail.com',
    password: 'password123'
)

q1 = Question.create!(
    title: 'Where is my bone?',
    body: 'I can\'t find it',
    author_id: u3.id
)

q2 = Question.create!(
    title: 'Woof woof?',
    body: 'Woof.',
    author_id: u1.id
)

q3 = Question.create!(
    title: 'Bark!',
    body: 'Is it not that case that, when considered in light of recent developments in both material philosophy and technological advancement that one can conclude, with the obvious cavets, that in fact...',
    author_id: u2.id
)