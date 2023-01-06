import React, { useState,useEffect } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage'
import MainScreen from '../../components/MainScreen'
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";

const RegisterPage = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    // const [pic, setPic] = useState(
    //     "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    // );
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    // const [picMessage, setPicMessage] = useState(null);
    // const [error, setError] = useState(false)
    // const [loading, setLoading] = useState(false)


    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            navigate("/mynotes");
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {

        e.preventDefault();
        //  console.log(name,email , password , confirmpassword,picMessage)
        
        if (password !== confirmpassword) {
            setMessage("Passwords do not match");
          } else dispatch(register(name, email, password));

    }

    return (
        <MainScreen title='REGISTER'>
            <div className="loginContainer">
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                {loading && <Loading />}
                <Form onSubmit={submitHandler}>
                    <Form.Group
                        //   controlId="formBasicEmail" 
                        className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
                            value={name}
                            placeholder="Enter name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group
                    //   controlId="formBasicEmail"
                    >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group
                        //   controlId="formBasicPassword"
                        className="my-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group
                        //   controlId="confirmPassword" 
                        className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmpassword}
                            placeholder="Confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>

                    {/* <Form.Group 
                       controlId="pic"
                       className="mb-3">
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control
                            onChange={(e) => postDetails(e.target.files[0])}
                            id="custom-file"
                            type="file"
                            label="Upload Profile Picture"
                            custom
                        />
                    </Form.Group> */}


                    <Button variant="primary" type="submit" >
                        Register
                    </Button>
                </Form>
                <Row className="py-3">
                    <Col>
                        Have an Account ? <Link to="/login">Login</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen >
    )
}

export default RegisterPage