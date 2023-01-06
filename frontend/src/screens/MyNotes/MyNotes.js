import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, Badge, Accordion } from 'react-bootstrap'
import MainScreen from '../../components/MainScreen'
// import notes from '../../data/notes'
import './MyNotes.css'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from '../../actions/notesActions'
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ReactMarkdown from "react-markdown";


function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <p
            type="button"
            style={{ marginBottom: 0, fontSize: 16 }}
            onClick={decoratedOnClick}
        >
            {children}
        </p>
    );
}

const MyNotes = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const noteList = useSelector((state) => state.noteList);
    const { loading, error, notes } = noteList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const noteCreate = useSelector((state) => state.noteCreate);
    const { success: successCreate } = noteCreate;


    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {
            //   dispatch(deleteNoteAction(id));
        }
    };

    // const fetchNotes = async () => {
    //     const { data } = await axios.get('/api/notes')
    //     setNotes(data)
    // }

    useEffect(() => {
        dispatch(listNotes());
        if (!userInfo) {
            navigate('/')
        }
    }, [dispatch, successCreate, navigate, userInfo]);

    // {`Welcome ${userInfo.name}`}
    return (
        <MainScreen title="Welcome">
            <Link to="/createnote">
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                    Create new Note
                </Button>
            </Link>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading />}
            {
                notes?.map((note => (
                    <Accordion key={note._id}>
                        <Card style={{ margin: 10 }} key={note._id}>
                            <Card.Header style={{ display: "flex" }}>
                                <span style={{
                                    color: "black",
                                    textDecoration: "none",
                                    flex: 1,
                                    cursor: "pointer",
                                    alignSelf: "center",
                                    fontSize: 18,
                                }}>
                                    <CustomToggle as={Card.Text} variant='link' eventKey='0'>{note.title}</CustomToggle>
                                </span>
                                <Button href={`/note/${note._id}`}>Edit</Button>
                                <Button variant='danger' className='mx-2' onClick={() => deleteHandler(note._id)}>Delete</Button>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <h4>
                                        <Badge variant="" className='badge'>
                                            Category - {note.category}
                                        </Badge>
                                    </h4>
                                    <blockquote className="blockquote mb-0">
                                        <ReactMarkdown>{note.content}</ReactMarkdown>
                                        <footer className="blockquote-footer">
                                            Created on{" "}
                                            <cite title="Source Title">
                                                {note.createdAt.substring(0, 10)}
                                            </cite>
                                        </footer>
                                    </blockquote>

                                </Card.Body>
                            </Accordion.Collapse>

                        </Card>
                    </Accordion>
                )))
            }


        </MainScreen >
    )
}

export default MyNotes