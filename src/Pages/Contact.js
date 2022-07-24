import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "../components/FormsUI/Textfield";
import Button from "../components/FormsUI/Button";
import {db} from "../firebase.js";



const INITIAL_FORM_STATE = {
    FName: "",
    LName: "",
    Email: "",
    Message: "",
};

const FORM_VALIDATION = Yup.object().shape({
    FName: Yup.string().min(3, "Too Short!").required("required"),
    LName: Yup.string().min(3, "Too Short!").required("required"),
    Email: Yup.string().email('Please enter a valid email').required("required"),
    Message: Yup.string().min(10, "Too Short!").required("required"),
});

const notify = () => toast.success("Successfully sent.");

const handleSendMsg = (values, onSubmitProps) => {
    db.collection("contacts").add(values);
    // console.log("Form data", values);
    // console.log("Submit props", onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    // window.location.reload();
    notify();
};


const Contact = () => {

    return (
        <>
            <Container
                disableGutters
                maxWidth={false}
            >
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 2, pb:4, boxShadow: 1}}
                    maxWidth={800}
                    m="auto"
                >
                    <Typography
                        variant="h2"
                        sx={{ flexGrow: 1 }}
                        color="primary"
                    >
                        Contact
                    </Typography>
                    <Divider />
                    <Typography
                        variant="body1"
                        sx={{ flexGrow: 1, mt: 3, mb: 4, textAlign: "justify" }}
                        color="text.primary"
                    >
                        We can't solve your problem if you don't tell us about it!
                    </Typography>

                    <Formik
                        initialValues={{ ...INITIAL_FORM_STATE }}
                        validationSchema={FORM_VALIDATION}
                        onSubmit={(values, onSubmitProps) => {
                            handleSendMsg(values, onSubmitProps);
                        }}
                    >
                        <Form autoComplete="off">
                            <Grid container spacing={4}>
                                <Grid item xs={6}>
                                    <Textfield
                                        name="FName"
                                        label="First Name"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Textfield
                                        name="LName"
                                        label="Last Name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Textfield
                                        name="Email"
                                        label="Email Address"
                                    />
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <Textfield
                                        name="Message"
                                        fullWidth
                                        placeholder="Enter your message"
                                        multiline
                                        rows={6}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button>Send</Button>
                                    <ToastContainer position="bottom-center"/>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                    
                </Box>
            </Container>
        </>
    );
};

export default Contact;
