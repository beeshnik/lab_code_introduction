import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { icons } from 'lucide-react';
import FormControl from '@mui/material/FormControl';
import Icon, {defaultIcon} from "../../shared/ui/icon";
import {forwardRef} from "react";
import {Controller, useFormContext} from "react-hook-form";
import {FormHelperText, InputLabel} from "@mui/material";

const menuProps = {
    MenuListProps: {
        style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(8, minmax(0, 1fr))', // 5 колонок
            columnGap: '8px', // Отступ между колонками
            padding: '8px', // Добавляем padding
            maxHeight: '500px',
            overflowY: 'auto'
        },
    },
}

const IconSelect =
    forwardRef(function IconSelect(props, ref) {

        const { control } = useFormContext()
        const iconList = Object.keys(icons)

        return (
            <Controller
                name={props.name}
                control={control}
                rules={{
                    required: "Выберите иконку"
                }}
                render={({ field: { value, onChange },
                         fieldState: { error }}) => (

                    <FormControl sx={{ m: 1, minWidth: 140 }} error={!!error}>
                        <InputLabel id="demo-simple-select-label">Значок</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            variant={"outlined"}
                            MenuProps={menuProps}
                            ref={ref}
                            value={value || ""}
                            onChange={onChange}
                            autoWidth
                            label={"Значок"}
                            sx={{ height: 56 }}
                        >
                            {iconList.map((icon, index) => (
                                <MenuItem key={index} value={icon}>
                                    <Icon name={icon} />
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>{error ? error.message : ""}</FormHelperText>
                    </FormControl>
                )}
            />
        )
    })

export default IconSelect;