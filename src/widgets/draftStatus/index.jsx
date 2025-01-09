import React, {forwardRef} from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Controller, useFormContext} from "react-hook-form";

const DraftStatus =
    forwardRef(function DraftStatus(props, ref) {
        const { control } = useFormContext()
        return (
            <Controller
                name={props.name}
                control={control}
                render={({ field: { value, onChange } }) => (
                    <FormControlLabel
                        label={props.label}
                        control={
                            <Checkbox
                                checked={value}
                                onChange={onChange}
                                ref={ref}
                            />
                        }
                    />
                )}
            />
        )
    })

export default DraftStatus;