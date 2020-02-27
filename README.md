# Fora

See the live site at [https://foraproject.herokuapp.com/?#/](https://foraproject.herokuapp.com/?#/)

## Overview

Fora, inspired by the popular question and answer site Quora, is a single page app designed to allow users to ask and answer questions about film and cinema!  Users can search questions by title, view questions by topic, and upvote and comment on answers.

## Technologies

Fora was built with a Ruby on Rails backend and a PostgresSQL database.  The frontend is handled by Javascript implementing React/Redux with CSS for page styling.  Jbuilder is used to to curate data from the backend to be rendered by components.  The rich text-editor for answers is created using QuillJS.  Animations are handled by CSS and vanilla JS DOM manipulation.

## Core Features

### Questions, Answers, and Comments

- Registered users can post questions
- Registered users can post answers to question
- Users can click on questions on the index or topics pages to be directed to the question show page, where they can view all answers for a given question and comment on answers

### Topics

- Users can view all questions associated with a given topic
- Registered users can add & remove topics from a given question

### Upvotes

- Registered users can upvote answers to questions
- Answers are sorted by upvotes

### Search

- Users can search for questions that match their query

### Rich Text Editor

- Answers are created using a rich text editor, allowing users to:

  - Create text that is bold, underlined, and italicized, and create unordered and ordered lists.
  - Insert images, links, and video to supplement text content of answers.
