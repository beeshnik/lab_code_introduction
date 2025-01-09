import {Controller, useFormContext} from "react-hook-form";
import {TextField} from "@mui/material";
import {forwardRef} from "react";
import FormControl from "@mui/material/FormControl";

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
                             <FormControl sx={{ m: 1, minWidth: 100 }} error={!!error} fullWidth>
                                 <TextField
                                     label={props.label}
                                     variant="outlined"
                                     name={"title"}
                                     value={value || ""}
                                     onChange={onChange}
                                     ref={ref}
                                     helperText={error ? error.message : ""}
                                     error={!!error}
                                 />
                             </FormControl>
                        )
                }
            />
        )
    })

export default NameInput


