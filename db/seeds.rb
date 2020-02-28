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

u1 = User.create!(username: 'Guest', email: 'guest@gmail.com', password: 'password')
u2 = User.create!(username: 'Socrates', email: 'soc@gmail.com', password: 'missionviejoNY')
u3 = User.create!(username: 'Plato', email: 'pla@hotmail.com', password: 'password123')
u4 = User.create!(username: 'Aristotle', email: 'ari@hotmail.com', password: 'password123')
u5 = User.create!(username: 'Lao Tzu', email: 'lao@hotmail.com', password: 'password123')
u6 = User.create!(username: 'Avicenna', email: 'avi@hotmail.com', password: 'password123')
u7 = User.create!(username: 'Confucius', email: 'con@hotmail.com', password: 'password123')
u8 = User.create!(username: 'Immanuel Kant', email: 'im@hotmail.com', password: 'password123')
u9 = User.create!(username: 'Soren Kierkegaard', email: 'sore@hotmail.com', password: 'password123')

q1 = Question.create!(title: 'What is your favorite fictional map?', body: '.', author_id: u9.id)
q2 = Question.create!(title: 'What is the greatest movie trailer of all time?', body: 'Woof.', author_id: u2.id)
q3 = Question.create!(title: 'Which is a more correct ethical approach, deontology or consequentalism?', body: '.', author_id: u3.id)
q4 = Question.create!(title: 'Who is the greatest author of all time?', body: '.', author_id: u3.id)
q5 = Question.create!(title: 'Who is the best Teenage Mutant Ninja Turtle?', body: '.', author_id: u4.id)
q6 = Question.create!(title: 'Am I just a brain in a jar?', body: '.', author_id: u5.id)
q7 = Question.create!(title: 'Chocolate or Vanilla?', body: '.', author_id: u6.id)
q8 = Question.create!(title: 'Is space real?', body: '.', author_id: u2.id)

a1 = Answer.create!(
    body: "<h2>Alien (1979)</h2><p><br></p><iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://www.youtube.com/embed/LjLamj-b0I8?showinfo=0\"></iframe><p><br></p><p>I don't think there can be any question it's this absolute masterpiece from 1979.  From the silent, slow opening with the text gradually fading in, to the ramp up of the action and quick cuts in the second part of the trailer.  Combine that with Ridley Scott's masterful cinematography and, of course, that blaring klaxon sound that produces just the right combination of excitement, anxiety, and pure dread, and this one's hard to beat.  </p><p><br></p><p>So many trailers since have since cribbed from this one that it can maybe be a little hard to see how completely original this was in it first appeared in theatres, but it's a masterclass in editing.</p><p><br></p><p>A lot of other great trailers, I'm thinking primarily of <strong>Prometheus</strong> and <strong>Inception</strong> have borrowed pretty directly from the techniques employed here, particularly the use of the repeated sound in the back half of the trailer.  It's interesting how everything old becomes new again at some point!</p>",
    author_id: u8.id,
    question_id: q2.id
)

a2 = Answer.create!(
    body: "<h2>Tree of Life (2008)</h2><p><br></p><iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://www.youtube.com/embed/RrAz1YLh8nY?showinfo=0\"></iframe><p>This is an immaculate trailer for an immaculate movie.  The film embodies macrocosm and microcosm--it tells the story of the birth of the universe and rise of life on Earth, and it also tells the story of a single (and in many ways unremarkable) year in the life of a young boy growing up in the Midwest in Postwar America.  It suggests that the universal may be found in the particular, and vice versa.  So too, the trailer itself embodies the larger themes and concepts of the feature film in miniature.  All the major motifs of the movie are here: orchestral score, elusive voiceover, montage, and of course Terrence Malick's incomparable cinematic technique.</p><p><br></p><p>I don't know about the Great American Novel, but I think Tree of Life is in the running for Great American Movie.  Its not for everyone, but it is, in its own way, perfect.  Also, who doesn't love Brad Pitt!</p>",
    author_id: u2.id,
    question_id: q2.id
)

a3 = Answer.create!(
    body: "<p><strong>Middle Earth</strong></p><p><br></p><p><img src=\"https://i.imgur.com/CoY07fF.jpg\"></p><p>Of course!</p><p><br></p><p>What's not to love?  Tolkien's Middle Earth represents not just a backdrop for a story, but the culmination of decades of careful study, planning, and thought.  For Tolkien, Middle Earth was the embodiment of all of his diverse areas of interest:  philology, myth, history, theology, and more.  It is a true \"secondary world\" a kind of imaginary stage on which to play out and explore stories and characters whose resonances go way beyond mere entertainment and get at some of the deep questions of the human experience.  In that sense, the map is more than just the map.</p>",
    author_id: u9.id,
    question_id: q1.id
)

a4 = Answer.create!(
    body: "<p><img src=\"https://i.imgur.com/6tTQud1.jpg\"></p><p>Phantom Tollbooth map.  Why?</p><p><br></p><ol><li>It's a great book.</li><li>It's got puns.</li><li>I love Tollbooths.</li><li>I love Phantoms.</li><li>It's the only book I've ever read.</li></ol>",
    author_id: u4.id,
    question_id: q1.id
)

a5 = Answer.create!(
    body: "<p>Consequentialism is the only thing that ever made sense to me.  Greatest good for the greatest number.</p><p><br></p><p>To quote the Stanford Encyclopedia of Philosophy:</p><p><br></p><p>Consequentialism also might be supported by an&nbsp;<em>inference to the best explanation</em>&nbsp;of our moral intuitions. This argument might surprise those who think of consequentialism as counterintuitive, but in fact consequentialists can explain many moral intuitions that trouble deontological theories. Moderate deontologists, for example, often judge that it is morally wrong to kill one person to save five but not morally wrong to kill one person to save a million. They never specify the line between what is morally wrong and what is not morally wrong, and it is hard to imagine any non-arbitrary way for deontologists to justify a cutoff point. In contrast, consequentialists can simply say that the line belongs wherever the benefits outweigh the costs (including any bad side effects). Similarly, when two promises conflict, it often seems clear which one we should keep, and that intuition can often be explained by the amount of harm that would be caused by breaking each promise. In contrast, deontologists are hard pressed to explain which promise is overriding if the reason to keep each promise is simply that it was made (Sinnott-Armstrong 2009). If consequentialists can better explain more common moral intuitions, then consequentialism might have more explanatory coherence overall, despite being counterintuitive in some cases. (Compare Sidgwick 1907, Book IV, Chap. III; and Sverdlik 2011.) And even if act consequentialists cannot argue in this way, it still might work for rule consequentialists (such as Hooker 2000).<br><a href='https://plato.stanford.edu/entries/consequentialism/#ArgCon'>Link</a></p>",
    author_id: u8.id,
    question_id: q3.id
)

a6 = Answer.create!(
    body:  "I feel that no other author better comprehends and encompasses our present dilemma than Joy Williams.  Her work is often bizarre, sometimes inscrutable, always comic.  For her, the absurd and the tragic are inextricably linked and never very far away.  In particular, I am thinking of her writing on, to employ a blunt and not entirely descriptive category, 'the environment'.  Her ability to evoke the power and preciousness of the natural world, and in the same moment, the same sentence, underlie what human activity is doing to it, is unmatched.  Some may find her short work a bit more accessible than her longer fiction (which no one will accuse of being plot driven and therefore a bit harder to get through), but in my view it is all priceless.  Absolutely essential.",
    author_id: u2.id,
    question_id: q4.id
)

a7 = Answer.create!(
    body:  "Gotta be old Cormac McCarthy.  No better writer alive.  No better writer dead.  No better writer yet to come.",
    author_id: u3.id,
    question_id: q4.id
)

a8 = Answer.create!(
    body: "Aristotle.",
    author_id: u4.id,
    question_id: q4.id
)

a9 = Answer.create!(
    body: "Raphael",
    author_id: u7.id,
    question_id: q5.id
)

a10 = Answer.create!(
    body: 'It\'s possible.  The question you should ask yourself is: what would be the consequences if such were the case?  After all, there\'s not much evidence for it (i.e. no \'glitches in the Matrix\' as it were.)  Therefore, this hypothetical brain-jar world must be a perfect illusion.  That being the case, it\'s unclear what the ramifcations would be for you living your life.  How would you behave differently?  We cannot conclude anything about the hypothetical real world that would exists outside of this illusory one, and therefore we cannot really behave as though it existed.  Any conclusions drawn about it would be purely speculative and up to the character of the individual reasoner.',
    author_id: u9.id,
    question_id: q6.id
)


v1 = Upvote.create!(author_id: u9.id, answer_id: a1.id)
v2 = Upvote.create!(author_id: u8.id, answer_id: a2.id)
v3 = Upvote.create!(author_id: u7.id, answer_id: a3.id)
v4 = Upvote.create!(author_id: u1.id, answer_id: a4.id)
v5 = Upvote.create!(author_id: u2.id, answer_id: a5.id)
v6 = Upvote.create!(author_id: u1.id, answer_id: a6.id)
v7 = Upvote.create!(author_id: u2.id, answer_id: a1.id)
v8 = Upvote.create!(author_id: u3.id, answer_id: a1.id)
v9 = Upvote.create!(author_id: u2.id, answer_id: a2.id)
v10 = Upvote.create!(author_id: u2.id, answer_id: a3.id)
v11 = Upvote.create!(author_id: u3.id, answer_id: a3.id)
v12 = Upvote.create!(author_id: u4.id, answer_id: a3.id)
v13 = Upvote.create!(author_id: u5.id, answer_id: a3.id)
v14 = Upvote.create!(author_id: u6.id, answer_id: a3.id)
v15 = Upvote.create!(author_id: u4.id, answer_id: a1.id)
v16 = Upvote.create!(author_id: u5.id, answer_id: a1.id)
v17 = Upvote.create!(author_id: u6.id, answer_id: a1.id)
v18 = Upvote.create!(author_id: u7.id, answer_id: a1.id)
v19 = Upvote.create!(author_id: u8.id, answer_id: a1.id)
v20 = Upvote.create!(author_id: u3.id, answer_id: a5.id)
v21 = Upvote.create!(author_id: u4.id, answer_id: a5.id)
v22 = Upvote.create!(author_id: u5.id, answer_id: a5.id)
v23 = Upvote.create!(author_id: u2.id, answer_id: a6.id)
v24 = Upvote.create!(author_id: u3.id, answer_id: a6.id)
v25 = Upvote.create!(author_id: u4.id, answer_id: a6.id)
v25 = Upvote.create!(author_id: u7.id, answer_id: a9.id)


c1 = Comment.create!(author_id: u3.id, answer_id: a1.id, body: "Alien is a great movie.  Period.")
c2 = Comment.create!(author_id: u4.id, answer_id: a1.id, body: "Yeah but it's not as good as Alien II.")
c3 = Comment.create!(author_id: u3.id, answer_id: a1.id, body: "First of all, it's Aliens, not Alien II.  Second of all, no.")
c4 = Comment.create!(author_id: u5.id, answer_id: a2.id, body: "I didn't understand anything!")
c5 = Comment.create!(author_id: u6.id, answer_id: a2.id, body: "That's the first step to understanding.")
c6 = Comment.create!(author_id: u3.id, answer_id: a3.id, body: "I love...Aragorn!")
c7 = Comment.create!(author_id: u6.id, answer_id: a3.id, body: "He's pretty cool.  Yeah, he's maybe even the coolest.  To quote Wikipedia: Aragorn II, son of Arathorn II and Gilraen, also known as Elessar and Strider, was the 16th Chieftain of the Dúnedain of the North; later crowned King Elessar Telcontar (March 1, 2931 - FO 120 or SR 1541), the 26th King of Arnor and 35th King of Gondor - and first High King of Gondor and Arnor since the short reign of Isildur. He was a great ranger and warrior, and as Isildur's heir he bore the shards of Narsil, reforged and renamed Andúril, in the War of the Ring.")
c8 = Comment.create!(author_id: u8.id, answer_id: a4.id, body: "Yeah!")
c9 = Comment.create!(author_id: u5.id, answer_id: a4.id, body: "This is a great point!")
c10 = Comment.create!(author_id: u3.id, answer_id: a3.id, body: "I don't know computers!")
c11 = Comment.create!(author_id: u3.id, answer_id: a3.id, body: "I don't know computers!")
c12 = Comment.create!(author_id: u3.id, answer_id: a3.id, body: "I don't know computers!")
c13 = Comment.create!(author_id: u3.id, answer_id: a5.id, body: "Yes but have you considered the converse?")
c14 = Comment.create!(author_id: u8.id, answer_id: a5.id, body: "Deontology all the way baby.")
c15 = Comment.create!(author_id: u9.id, answer_id: a6.id, body: "This.")
c16 = Comment.create!(author_id: u2.id, answer_id: a9.id, body: "No, Michaelangelo.")
c17 = Comment.create!(author_id: u4.id, answer_id: a9.id, body: "No, Leonardo.")
c18 = Comment.create!(author_id: u6.id, answer_id: a9.id, body: "No, Donatello.")
c19 = Comment.create!(author_id: u7.id, answer_id: a9.id, body: "No, Leonardo.  I mean Raphael.")


t1 = Topic.create!(title: "Science")
t2 = Topic.create!(title: "Movies")
t3 = Topic.create!(title: "Entertainment")
t4 = Topic.create!(title: "Best Of Lists")
t5 = Topic.create!(title: "Games")
t6 = Topic.create!(title: "Philosophy")
t7 = Topic.create!(title: "Contemporary")
t8 = Topic.create!(title: "History")
t9 = Topic.create!(title: "Books")

j1 = TopicQuestionAssociation.create!(question_id: q1.id, topic_id: t9.id)
qj1 = TopicQuestionAssociation.create!(question_id: q1.id, topic_id: t3.id)
j1 = TopicQuestionAssociation.create!(question_id: q1.id, topic_id: t4.id)
j1 = TopicQuestionAssociation.create!(question_id: q2.id, topic_id: t2.id)
j1 = TopicQuestionAssociation.create!(question_id: q2.id, topic_id: t3.id)
j1 = TopicQuestionAssociation.create!(question_id: q2.id, topic_id: t4.id)
j1 = TopicQuestionAssociation.create!(question_id: q1.id, topic_id: t6.id)
j1 = TopicQuestionAssociation.create!(question_id: q3.id, topic_id: t6.id)
j1 = TopicQuestionAssociation.create!(question_id: q3.id, topic_id: t7.id)
j1 = TopicQuestionAssociation.create!(question_id: q4.id, topic_id: t3.id)
j1 = TopicQuestionAssociation.create!(question_id: q4.id, topic_id: t4.id)
j1 = TopicQuestionAssociation.create!(question_id: q4.id, topic_id: t9.id)
j1 = TopicQuestionAssociation.create!(question_id: q4.id, topic_id: t7.id)
j1 = TopicQuestionAssociation.create!(question_id: q5.id, topic_id: t1.id)
j1 = TopicQuestionAssociation.create!(question_id: q5.id, topic_id: t3.id)
j1 = TopicQuestionAssociation.create!(question_id: q5.id, topic_id: t4.id)
j1 = TopicQuestionAssociation.create!(question_id: q5.id, topic_id: t6.id)
j1 = TopicQuestionAssociation.create!(question_id: q6.id, topic_id: t1.id)
j1 = TopicQuestionAssociation.create!(question_id: q6.id, topic_id: t6.id)
j1 = TopicQuestionAssociation.create!(question_id: q7.id, topic_id: t4.id)
j1 = TopicQuestionAssociation.create!(question_id: q8.id, topic_id: t1.id)
j1 = TopicQuestionAssociation.create!(question_id: q8.id, topic_id: t6.id)



# q2 = Question.create!(title: 'My 18 year old son wants to drop out of college to be a YouTuber. He only has 62 thousand subscribers and thinks he’ll make it big. How do I tell him that college is best for him?', body: 'Woof.', author_id: u1.id)
# q3 = Question.create!(title: 'Woof woof?', body: 'Is it not that case that, when considered in light of recent developments in both material philosophy and technological advancement that one can conclude, with the obvious cavets, that in fact...', author_id: u2.id)
    