import { Link, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, removePost } from "../../../redux/postsRedux";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { DateToStr } from "../../../utils/dateToStr";

const Post = props => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)


  const dispatch = useDispatch();

  const deletePost = () => {
    dispatch(removePost(id));
    handleClose();
  };

  if(!postData) return <Navigate to="/" />
    return (
      <div>
        <div className="d-flex justify-content-between">
          <h2>{postData.title}</h2>
          <div>
            <Link key={props.id} to={"/post/edit/" + id}>
              <Button variant="outline-info m-1">Edit post</Button>
            </Link>
            <Button onClick={handleShow} variant="outline-danger m-1">Delete</Button>
          </div>
        </div>
        <p><b>Author: </b>{postData.author}
        <br/><b>Published: </b>
        {DateToStr(postData.publishedDate)}</p>
        <p dangerouslySetInnerHTML={{ __html: postData.content }}></p>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>This operation will completely remove this post from the app. 
              <br/>Are you sure you want to do that?
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={handleClose} variant="secondary">Cancel</Button>
            <Button onClick={deletePost} variant="danger">Remove</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
};

export default Post;