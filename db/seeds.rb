# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'base64'

User.delete_all
Question.delete_all
Answer.delete_all
Topic.delete_all
TopicQuestionAssociation.delete_all
Upvote.delete_all
Comment.delete_all

u1 = User.create!(username: 'guest', email: 'guest@gmail.com', password: 'password')
u2 = User.create!(username: 'Fido', email: 'fido@gmail.com', password: 'missionviejoNY')
u3 = User.create!(username: 'Rex', email: 'rex@hotmail.com', password: 'password123')

q1 = Question.create!(title: 'How can you prove that birds are real?', body: 'I can\'t find it', author_id: u3.id)
q2 = Question.create!(title: 'My 18 year old son wants to drop out of college to be a YouTuber. He only has 62 thousand subscribers and thinks he’ll make it big. How do I tell him that college is best for him?', body: 'Woof.', author_id: u1.id)
q3 = Question.create!(title: 'Woof woof?', body: 'Is it not that case that, when considered in light of recent developments in both material philosophy and technological advancement that one can conclude, with the obvious cavets, that in fact...', author_id: u2.id)
q4 = Question.create!(title: 'Bark?', body: '.', author_id: u2.id)
q5 = Question.create!(title: 'XYZ', body: '.', author_id: u2.id)
q6 = Question.create!(title: 'Who is the real', body: '.', author_id: u2.id)
q7 = Question.create!(title: 'Why am I not!', body: '.', author_id: u2.id)
q8 = Question.create!(title: 'zyzzyx', body: '.', author_id: u2.id)
q9 = Question.create!(title: 'Shadow on the', body: '.', author_id: u2.id)
q10 = Question.create!(title: 'Can I please?', body: '.', author_id: u2.id)
q11 = Question.create!(title: 'Would you kindly?', body: '.', author_id: u2.id)


a1 = Answer.create!(
    body: "Well, yes",
    author_id: u1.id,
    question_id: q1.id
)


a2 = Answer.create!(
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author_id: u2.id,
    question_id: q2.id
)

a3 = Answer.create!(
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author_id: u3.id,
    question_id: q3.id
)

a4 = Answer.create!(
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author_id: u1.id,
    question_id: q2.id
)

a5 = Answer.create!(
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author_id: u1.id,
    question_id: q2.id
)

a6 = Answer.create!(
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author_id: u1.id,
    question_id: q3.id
)

a7 = Answer.create!(
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author_id: u2.id,
    question_id: q3.id
)

a8 = Answer.create!(
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author_id: u3.id,
    question_id: q1.id
)

a9 = Answer.create!(
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author_id: u2.id,
    question_id: q1.id
)

a10 = Answer.create!(
    body: 'Sure bud.',
    author_id: u1.id,
    question_id: q4.id
)


v1 = Upvote.create!(author_id: u1.id, answer_id: a1.id)
v2 = Upvote.create!(author_id: u1.id, answer_id: a2.id)
v3 = Upvote.create!(author_id: u1.id, answer_id: a3.id)
v4 = Upvote.create!(author_id: u1.id, answer_id: a4.id)
v5 = Upvote.create!(author_id: u1.id, answer_id: a5.id)
v6 = Upvote.create!(author_id: u1.id, answer_id: a6.id)
v7 = Upvote.create!(author_id: u2.id, answer_id: a1.id)
v8 = Upvote.create!(author_id: u3.id, answer_id: a1.id)
v9 = Upvote.create!(author_id: u2.id, answer_id: a2.id)

c1 = Comment.create!(author_id: u1.id, answer_id: a1.id, body: "This is a great point!")
c2 = Comment.create!(author_id: u1.id, answer_id: a1.id, body: "No it's not!")
c3 = Comment.create!(author_id: u1.id, answer_id: a2.id, body: "Disagree!")
c4 = Comment.create!(author_id: u1.id, answer_id: a3.id, body: "Ok!")
c5 = Comment.create!(author_id: u1.id, answer_id: a4.id, body: "Sure, but have you considered the possibility that!")
c6 = Comment.create!(author_id: u2.id, answer_id: a1.id, body: "Hmm okay maybe!")
c7 = Comment.create!(author_id: u2.id, answer_id: a2.id, body: "I'm gay!")
c8 = Comment.create!(author_id: u2.id, answer_id: a3.id, body: "Yeah!")
c9 = Comment.create!(author_id: u2.id, answer_id: a4.id, body: "This is a great point!")
c10 = Comment.create!(author_id: u3.id, answer_id: a1.id, body: "I don't know computers!")
c11 = Comment.create!(author_id: u3.id, answer_id: a1.id, body: "I don't know computers!")
c12 = Comment.create!(author_id: u3.id, answer_id: a1.id, body: "I don't know computers!")
c13 = Comment.create!(author_id: u3.id, answer_id: a10.id, body: "Arf!")
c14 = Comment.create!(author_id: u2.id, answer_id: a10.id, body: "Yip!")



t1 = Topic.create!(title: "Science")
t2 = Topic.create!(title: "Math")
t3 = Topic.create!(title: "Entertainment")
t4 = Topic.create!(title: "News")
t5 = Topic.create!(title: "Sports")
t6 = Topic.create!(title: "Good")
t7 = Topic.create!(title: "Evil")
t8 = Topic.create!(title: "Doges")
t9 = Topic.create!(title: "Star Wars")

j1 = TopicQuestionAssociation.create!(question_id: q1.id, topic_id: t1.id)
qj1 = TopicQuestionAssociation.create!(question_id: q1.id, topic_id: t3.id)
j1 = TopicQuestionAssociation.create!(question_id: q1.id, topic_id: t4.id)
j1 = TopicQuestionAssociation.create!(question_id: q2.id, topic_id: t1.id)
j1 = TopicQuestionAssociation.create!(question_id: q2.id, topic_id: t2.id)
j1 = TopicQuestionAssociation.create!(question_id: q2.id, topic_id: t4.id)
j1 = TopicQuestionAssociation.create!(question_id: q3.id, topic_id: t6.id)
j1 = TopicQuestionAssociation.create!(question_id: q3.id, topic_id: t7.id)
j1 = TopicQuestionAssociation.create!(question_id: q3.id, topic_id: t1.id)
j1 = TopicQuestionAssociation.create!(question_id: q3.id, topic_id: t2.id)