import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const PostForm = ({ action, actionText, ...props }) => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const [title, setTitle] = useState(props.title || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [author, setAuthor ] = useState(props.author || '');
  const [publishedDate, setPublishedDate ] = useState(props.publishedDate || '');
  const [content, setContent] = useState(props.content || '');
  const [dateError, setDateError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
   }
  };

  return (
    <div style={{ width: '50%' }}>
      <Form onSubmit={validate(handleSubmit)} >
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control 
          {...register("title", { required: true, minLength: 3 })}
          value={title} 
          onChange={e => setTitle(e.target.value)}
          type="text" placeholder="Enter title" 
          />
          {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Author</Form.Label>
          <Form.Control
          {...register("author", { required: true, minLength: 3 })}
          value={author} 
          onChange={e => setAuthor(e.target.value)}
          type="text" placeholder="Enter author" 
          />
          {errors.author && <small className="d-block form-text text-danger mt-2">Author's name is too short (min is 3)</small>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Published date</Form.Label>
          <ReactDatePicker dateFormat="dd-MM-yyyy" selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
          {dateError && <small className="d-block form-text text-danger mt-2">Published date is required</small>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Short description</Form.Label>
          <Form.Control 
          {...register("shortDescription", { required: true, minLength: 20 })}
          value={shortDescription} 
          onChange={e => setShortDescription(e.target.value)}
          type="text" placeholder="Leave a comment here"
          />
          {errors.shortDescription && <small className="d-block text-danger mt-2">Short description is required and should have at least 20 characters</small>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Content of the post</Form.Label>
          <ReactQuill placeholder="Leave a comment here" value={content} onChange={setContent} />
          {contentError && <small className="d-block form-text text-danger mt-2">Content of the post can't be empty</small>}
        </Form.Group>
        <Button variant="primary" type="submit">
          {actionText}
        </Button>
      </Form>
    </div>

  );
};

export default PostForm;