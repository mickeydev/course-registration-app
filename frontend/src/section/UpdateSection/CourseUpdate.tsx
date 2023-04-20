import React, { useContext, ChangeEvent, useState, FormEvent } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { Typography, TextField } from '@mui/material';
import { RegContext } from '../../store/register-context';
import { courseDetails } from '../../types/Course';
import AddCourse from '../../types/Course';
import { useSnackbar } from 'notistack';
import axios from '../../axiosConfig';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type detail = {
    data: {
        id: 0,
        title: '',
        prerequisite: ''
    }
}

export default function CourseUpdate({ id, prerequisite, title }: courseDetails) {
    const [courseFormDetails, setCourseFormDetails] = useState<AddCourse>({
        title: '',
        prerequisite: '',
    });

    const CTX = useContext(RegContext);

    const { enqueueSnackbar } = useSnackbar();

    function OnChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setCourseFormDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    async function OnSubmitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const response = await axios.post(`/update-course/${id}`, courseFormDetails);
            enqueueSnackbar(response.data, { variant: 'success' });
            console.log(response);
            setCourseFormDetails({
                title: '',
                prerequisite: '',
            });
        } catch (e: any) {
            console.log(e);

            if (e.response.status === 400) {
                enqueueSnackbar('Fill all required details', { variant: 'error' });
            }
        }
    }


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={CTX.openStat}
                onClose={CTX.closeCourseModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={CTX.openStat}>
                    <Box sx={style}>
                        <Box m={2}>
                            <Typography sx={{ mb: 3 }}>Edit Course Details</Typography>
                            <form onSubmit={OnSubmitHandler}>
                                <TextField
                                    name="title"
                                    label="Title"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={OnChangeHandler}
                                    value={title}
                                />
                                <TextField
                                    name="prerequisite"
                                    label="Prerequisite"
                                    type="text"
                                    variant="standard"
                                    sx={{ mt: 2 }}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={OnChangeHandler}
                                    value={prerequisite}
                                />

                                <Button type="submit" variant="contained" color="success" sx={{ mr: 3, mt: 3 }}>
                                    Submit
                                </Button>

                                <Button variant="contained" color="error" sx={{ mt: 3 }} onClick={CTX.closeCourseModal}>
                                    Cancel
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}