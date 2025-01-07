
import {Controller, useFormContext} from "react-hook-form";
import {forwardRef, useEffect, useState} from "react";
import Select from "@mui/material/Select";
import {useGetChapters} from "../../shared/hooks";
import MenuItem from "@mui/material/MenuItem";

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
                    <Select
                        label={props.label}
                        name={props.name}
                        ref={ref}
                        value={value || ""}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : ""}
                    >
                        {sectionList?.map((section, index) => (
                            <MenuItem value={section.id} key={index}>{section.title}</MenuItem>
                        ))}
                    </Select>
                )}
            />
        )
    })

export default SectionList



