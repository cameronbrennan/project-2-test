Post Up/Downvotes/Comments options
- Tally (for the up/down votes - just a tally on the post document. Limited functionality, not very scalable, loses value on refresh)
- For any given post on the post doc, array of strings called 'upvotes/downvotes' referring to user.id (Similar issues to tally - as the number of votes/comments grows, that could become untenable)
- Store up/down votes in it's own collection rel to user and post id and mongo query count of documents in collection (creates a separate collection for votes and comments, and then can link by post.id and comment.id)

<form action="/posts/<%= post.id %>/comments/<%= c.id %>?_method=DELETE"
        class="delete-comment" method="POST">
        <button type="submit">X</button>
      </form>