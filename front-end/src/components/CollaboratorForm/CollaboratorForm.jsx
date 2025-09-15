import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import './CollaboratorForm.css';

import { TextInput } from '../TextInput';
import { RadioInput } from '../RadioInput';
import { DateInput } from '../DatePicker/DatePicker';
import { CountDownTimerV2 } from '../CountDownTimerV2';
import { ConfirmedDialog } from "../ConfirmedDialog";

import { collaboratorSchema } from '../../schemas/collaborator.schema';
import { formatDate, formatFormDate } from '../../utils/formatDate.util';

import { createApplication } from "../../api/application.service";

import { dialogMessage } from "../../constants";
import { useState } from "react";

const { success, notUniqueEmail, error } = dialogMessage;

const className = [
    {
        form: 'collaborator-form-control',
        errors: 'collaborator-form-errors'
    },
    {
        form: 'collaborator-form-radio',
        errors: 'collaborator-form-errors'
    },
    {
        form: 'collaborator-form-date',
        errors: 'collaborator-form-errors'
    }
]

export const CollaboratorForm = ({ form, seekingInfo }) => {
    const [isOpened, setIsOpened] = useState(true);
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

    const onSubmit = async (formData) => {
        try {
            const formatedData = { ...formData, dob: formatFormDate(formData.dob) };
            const { status, data } = await createApplication(formatedData);
            console.log(data);
            if (status === 201) {
                setMessage(success);
            } 
            reset();
        } catch (error) {
            if (error.status === 409) {
                setMessage(notUniqueEmail);
            } else {
                setMessage(error);
            }
        } finally {
            setIsOpened(true);
        }
    };

    return (
        <div className="collaborator-form">
            {isOpened && (
                <ConfirmedDialog
                    {...message}
                    onClose={() => { setIsOpened(false) }}
                />
            )}
            <CountDownTimerV2 date={seekingInfo.date} />
            <hr className="division-bar" />
            <div className="seeking-info-container">
                <p className="name">{seekingInfo.formName}</p>
                <p className="date">Hạn chót: {formatDate(seekingInfo.date)}</p>
            </div>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                {
                    form.map((item, index) => {
                        switch (item.inputType) {
                            case 'text': {
                                return (
                                    <TextInput
                                        key={'collaborators-' + item.id}
                                        order={index + 1}
                                        inputInfo={form[index]}
                                        register={register}
                                        errors={errors}
                                        className={className[0]}
                                    />
                                )
                            }

                            case 'radio': {
                                return (
                                    <RadioInput
                                        key={'collaborators-' + item.id}
                                        order={index + 1}
                                        inputInfo={form[index]}
                                        register={register}
                                        watch={watch}
                                        errors={errors}
                                        className={className[1]}
                                    />
                                )
                            }

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
                        }
                    })
                }
                <button disabled={isSubmitting} className="collaborator-form-button" type='submit'>Nộp đơn</button>
            </form>
        </div>
    )
}
