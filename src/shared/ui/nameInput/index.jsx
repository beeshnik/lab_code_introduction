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
                    required: "Поле обязательно к заполнению",

                }}
                render={({ field: { value, onChange},
                         fieldState: { error}}) => (
                    <TextField fullWidth
                               label={props.label}
                               variant="outlined"
                               name={"title"}
                               value={value || ""}
                               onChange={onChange}
                               ref={ref}
                               helperText={error ? error.message : ""}
                               error={!!error}
                    />
                )}
            />
        )
    })

export default NameInput


