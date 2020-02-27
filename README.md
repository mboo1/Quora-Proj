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

## Code Details and Challenges

### Modal

The question form, editing topics form, and search results are all created using modals.  The relevant components use Open and Close Modal actions to dispatch props to global state to trigger the rendering of the appropriate modal.  OnClick Event Listeners close the modal if the user clicks outside of the form or successfully submits a question, edits topics, or navigates to a different page.

### Editing Topics

Questions and topics are associated via a joins table in Rails.  Allowing users to dynamically add and remove topics from a given question presented a few challenges.  First, because the Edit Topic component was a modal and not a child component of the Question Show page, I wanted a way to pass the relevant topics to the Edit form without adding information to the redux store.  Because the Modal Component Container already took in a string to select the appropriate modal, I decided to have the openModal action for the Edit Topic component send up an object with the necessary information for the modal:

```javascript
    handleEdit(e) {
        // e.preventDefault()
        this.props.openModal({name: 'topicForm', question: this.props.question, topics: this.props.topics})
    }
```

Then, the Modal component could look for the appropriate name when selecting which modal to open and pass in the props to the component:

```javascript
        } else if (this.props.modalState.name === 'topicForm') {
            return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <EditTopicsForm question={this.props.modalState.question} topics={this.props.modalState.topics}/>
                </div>
            </div>
            )
```

Because Ruby on Rails allows for easy creation and deletion of associations, I simply needed to keep track of which topics the user had and had not selected.  I stored the selected topic ids in an array that was updated each time the user checked or unchecked a topic:

```javascript
    handleClick(e) {
        if (this.state.checkedTopics.includes(id)) {
            for( let i = 0; i < this.state.checkedTopics.length; i++){ 
                if ( this.state.checkedTopics[i] === id) {
                  this.state.checkedTopics.splice(i, 1); 
                }
             }
        } else { this.state.checkedTopics.push(id) }
        
 Then, by simply by dispatching this array to the backend and permitting it as a paramter:
 
 ```ruby
     def question_params
        params.require(:question).permit(:title, :body, :author_id, :filter, topic_ids: [])
    end
```

Ruby on Rails takes care of the rest by creating and destroying the appropriate topic associations with the update method.

### Rich Text Editor

QuillJS is a powerful Javascript library that allows for the creation of custom rich text editors.  Because the answer form can be opened and closed by the user, I wrote a method to render the editor only when the appropriate button was clicked, which changed the local state and triggered the creation of the Quill editor (but only when the editor was not already open!):

```javascript
        if (!this.state.answerClicked) {
            this.setState({answerClicked: true}, () => {
                let container = document.getElementById('editor');
                this.editor = new Quill(container, {modules: {toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    ['image', 'code-block', 'link', 'video']
                ]}, theme: 'snow'});
            })
        }
```
Quill takes in a modules object that allows for easy customization of the toolbar--here, the user can customize text in various ways and embed images and links.

### JS and CSS Animations

To create a more dynamic user experience, I added animations for certain components.  For example, the fade and slide in of the search results component is accomplished through simple CSS animations:

```CSS
@keyframes dropdown-slideup {
    0% {
        opacity: 0;
        top: 75px;
    }
    100% {
        opacity: 1;
        top: 45px;
    }
}
```

Because click on the search bar darkened the screen without actually creating a modal component, I added an event listener to the navbar component:

```javascript
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
```

And an onClick event to the searchbar itself:

```javascript
    handleClick() {
        this.setState({searchClicked: true})
        this.props.openSearchRes();
    }
```

Which would create and remove the screen darkening effect as appropriate.

### Final Remarks

Future improvements could include polymorphic associations for upvotes with both answers and comments.  Comments could also be polymorphically associated with both comments and answers, allowing comments on comments.
