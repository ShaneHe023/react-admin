import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from "yup"
import useMediaQuery from '@mui/material';
import Header from '../../components/Header';

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box m="20px">

        </Box>
    )
}

export default Form