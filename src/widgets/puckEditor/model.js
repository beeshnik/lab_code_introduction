
const pxOptions = [
        { label: "0px", value: 0 },
        { label: "8px", value: 8 },
        { label: "16px", value: 16 },
        { label: "24px", value: 24 },
        { label: "32px", value: 32 },
        { label: "40px", value: 40 },
        { label: "48px", value: 48 },
        { label: "56px", value: 56 },
        { label: "64px", value: 64 },
        { label: "72px", value: 72 },
        { label: "80px", value: 80 },
    ]

const textFields = {
    size: {
        type: "number",
        label: "Размер шрифта"
    },
    textAlign: {
        type: "radio",
        label: "Выравнивание",
        options: [
            { label: "Left", value: "flex-start" },
            { label: "Center", value: "center" },
            { label: "Right", value: "flex-end" },
        ],
    },
    paddingLeft: {
        type: "select",
        label: "Отступ слева",
        options: pxOptions,
    },
    paddingRight: {
        type: "select",
        label: "Отступ справа",
        options: pxOptions,
    },
    intervalBottom: {
        type: "select",
        label: "Отступ снизу",
        options: pxOptions,
    },
    intervalTop: {
        type: "select",
        label: "Отступ сверху",
        options: pxOptions,
    }
}

// Create Puck component config
export const config = {
    components: {
        Header: {
            fields: {
                text: {
                    type: "text",
                    label: "Текст"
                },
                ...textFields
            },
            defaultProps: {
                text: "Заголовок",
                size: 24,
                textAlign: "flex-start",
            },
            label: "Заголовок",
            render: ({ text, size, textAlign, paddingLeft, paddingRight, intervalBottom, intervalTop }) => {
                return <h1 style={{
                    fontSize: size,
                    display: "flex",
                    justifyContent: textAlign,
                    paddingLeft: paddingLeft,
                    paddingRight: paddingRight,
                    paddingTop: intervalTop,
                    paddingBottom: intervalBottom,
                }}>{text}</h1>;
            },
        },
        Common: {
            fields: {
                text: {
                    type: "textarea",
                    label: "Текст"
                },
                ...textFields
            },
            defaultProps: {
                text: "основной текст",
                size: 16,
                textAlign: "flex-start",
            },
            label: "Основной текст",
            render: ({ text, size, textAlign, paddingLeft, paddingRight, intervalBottom, intervalTop }) => {
                return <div style={{
                    fontSize: size,
                    display: "flex",
                    justifyContent: textAlign,
                    paddingLeft: paddingLeft,
                    paddingRight: paddingRight,
                    paddingTop: intervalTop,
                    paddingBottom: intervalBottom,
                }}>{text}</div>;
            },
        },
    },
    root: {
        label: "main",
        fields: {
            title: {
                type: "text",
                label: "Заголовок справки"
            },
            isEnabled: {
                type: "radio",
                label: "Показывать пользователям",
                options: [
                    { label: "Да", value: true },
                    { label: "Нет", value: false },
                ],
            },
        },
        defaultProps: {
            title: "Без имени",
            isEnabled: false,
        },
    },
};

