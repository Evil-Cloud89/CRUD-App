import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [author, setAuthor ] = useState(props.author || '');
    const [publishedDate, setPublishedDate ] = useState(props.publishedDate || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
      };

  return (
    <div style={{ width: '50%' }}>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-4">
          <Form.Label>Title</Form.Label>
          <Form.Control placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Author</Form.Label>
          <Form.Control placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Published date</Form.Label>
          <ReactDatePicker dateFormat="dd-MM-yyyy" selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Short description</Form.Label>
          <Form.Control placeholder="Leave a comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Content of the post</Form.Label>
          <ReactQuill placeholder="Leave a comment here" value={content} onChange={setContent} />
        </Form.Group>
        <Button variant="primary" type="submit">
          {actionText}
        </Button>
      </Form>
    </div>

  );
};

export default PostForm;