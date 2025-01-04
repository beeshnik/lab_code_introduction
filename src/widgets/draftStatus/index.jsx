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
                // rules={{
                //     required: true
                // }}
                render={({ field: { value, onChange } }) => (
                    <FormControlLabel control={<Checkbox />}
                                      label={props.label}
                                      ref={ref}
                                      value={value || false}
                                      onChange={onChange}
                    />
                )}
            />
        )
    })

export default DraftStatus;