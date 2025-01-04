import {Controller, useFormContext} from "react-hook-form";
import {TextField} from "@mui/material";
import {forwardRef} from "react";

const NameInput =
    forwardRef(function NameInput(props, ref) {

        const { control } = useFormContext()

        return (
            <Controller
                name={props.name}
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { value, onChange } }) => (
                    <TextField fullWidth
                               label={props.label}
                               variant="outlined"
                               name={"title"}
                               value={value || ""}
                               onChange={onChange}
                               ref={ref}
                    />
                )}
            />
        )
    })

export default NameInput


