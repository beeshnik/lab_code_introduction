
import {Controller, useFormContext} from "react-hook-form";
import {forwardRef, useEffect, useState} from "react";
import Select from "@mui/material/Select";
import {useGetChapters} from "../../shared/hooks";
import MenuItem from "@mui/material/MenuItem";
import {FormHelperText, InputLabel} from "@mui/material";
import Icon from "../../shared/ui/icon";
import FormControl from "@mui/material/FormControl";

const SectionList =
    forwardRef(function SectionList(props, ref) {
        const [sectionList, setSectionList] = useState([""]);

        const { control } = useFormContext()

        const sections = useGetChapters()

        useEffect(() => {
            setSectionList(sections?.data?.sections)
        }, [sections?.data?.sections])

        return (
            <Controller
                name={props.name}
                control={control}
                rules={{
                    required: "Необходимо выбрать раздел"
                }}
                render={({ field: { value, onChange },
                         fieldState: { error }}) => (


                    <FormControl sx={{ m: 1, minWidth: 100 }} error={!!error} fullWidth>
                        <InputLabel id="demo-simple-select-label">Выберите главу</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            variant={"outlined"}
                            ref={ref}
                            value={value || ""}
                            onChange={onChange}
                            label={props.label}
                            sx={{ height: 56 }}
                            name={props.name}
                        >
                            {sectionList?.map((section, index) => (
                                <MenuItem value={section.id} key={index}>{section.title}</MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>{error ? error.message : ""}</FormHelperText>
                    </FormControl>

                )}
            />
        )
    })

export default SectionList



