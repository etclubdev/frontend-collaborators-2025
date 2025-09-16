import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import './CollaboratorForm.css';

import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { TextInput } from '../TextInput';
import { RadioInput } from '../RadioInput';
import { DateInput } from '../DatePicker/DatePicker';
import { ConfirmedDialog } from "../ConfirmedDialog";
import { Heading } from "../Typography";

import { collaboratorSchema } from '../../schemas/collaborator.schema';
import { formatDate, formatFormDate } from '../../utils/formatDate.util';
import { createApplication } from "../../api/application.service";
import { dialogMessage } from "../../constants";

const { success, notUniqueEmail, errorMsg } = dialogMessage;

const className = [
    { form: 'collaborator-form-control', errors: 'collaborator-form-errors' },
    { form: 'collaborator-form-radio', errors: 'collaborator-form-errors' },
    { form: 'collaborator-form-date', errors: 'collaborator-form-errors' }
]

export const CollaboratorForm = ({ form, seekingInfo }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formDataToSubmit, setFormDataToSubmit] = useState(null);
    const [isOpenedNoti, setIsOpenedNoti] = useState(false);
    const [message, setMessage] = useState({});

    const {
        control,
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(collaboratorSchema),
    });

    const onSubmit = (formData) => {
        setFormDataToSubmit(formData);
        setIsDialogOpen(true);
    };

    const handleConfirm = async () => {
        setIsDialogOpen(false);
        try {
            const formatedData = { ...formDataToSubmit, dob: formatFormDate(formDataToSubmit.dob) };
            const { status, data } = await createApplication(formatedData);
            console.log(data);
            if (status === 201) setMessage(success);
            reset();
        } catch (error) {
            if (error.status === 409) setMessage(notUniqueEmail);
            else setMessage(errorMsg);
        } finally {
            setIsOpenedNoti(true);
        }
    };

    return (
        <div className="collaborator-form">
            <SubmitDialog
                isOpen={isDialogOpen}
                handleClose={() => setIsDialogOpen(false)}
                handleConfirm={handleConfirm}
            />

            {isOpenedNoti && (
                <ConfirmedDialog
                    {...message}
                    onClose={() => setIsOpenedNoti(false)}
                />
            )}

            <div className="seeking-info-container">
                <Heading level={1} className="name">{seekingInfo.formName}</Heading>
                <p className="date">HẠN CHÓT: {formatDate(seekingInfo.date).toUpperCase()}</p>
            </div>

            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                {form.map((item, index) => {
                    switch (item.inputType) {
                        case 'text':
                            return (
                                <TextInput
                                    key={'collaborators-' + item.id}
                                    order={index + 1}
                                    inputInfo={item}
                                    register={register}
                                    errors={errors}
                                    className={className[0]}
                                />
                            )
                        case 'radio':
                            return (
                                <RadioInput
                                    key={'collaborators-' + item.id}
                                    order={index + 1}
                                    inputInfo={item}
                                    register={register}
                                    watch={watch}
                                    errors={errors}
                                    className={className[1]}
                                />
                            )
                        case 'date': {
                            return (
                                <DateInput
                                    key={'collaborators-' + item.id}
                                    order={index + 1}
                                    inputInfo={form[index]}
                                    register={register}
                                    watch={watch}
                                    errors={errors}
                                    control={control}
                                    className={className[0]}
                                />
                            )
                        }
                        default:
                            return null;
                    }
                })}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="collaborator-form-button"
                >
                    Nộp đơn
                </button>
            </form>
        </div>
    )
}

const SubmitDialog = ({ isOpen, handleClose, handleConfirm }) => (
    <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {"Xác nhận nộp đơn"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Bạn có chắc chắn muốn nộp đơn không? Sau khi nộp, bạn sẽ không thể chỉnh sửa thông tin.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Hủy</Button>
            <Button onClick={handleConfirm} autoFocus>
                Xác nhận
            </Button>
        </DialogActions>
    </Dialog>
)
