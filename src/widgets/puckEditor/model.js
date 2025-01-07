
// Create Puck component config
export const config = {
    components: {
        Header: {
            fields: {
                text: {
                    type: "text",
                    label: "Текст"
                },
                size: {
                    type: "number",
                    label: "Размер шрифта"
                }
            },
            defaultProps: {
                text: "Заголовок",
                size: 24
            },
            label: "Заголовок",
            render: ({ text, size }) => {
                return <h1 style={{fontSize: size}}>{text}</h1>;
            },
        },
        Common: {
            fields: {
                text: {
                    type: "text",
                    label: "Текст"
                },
                size: {
                    type: "number",
                    label: "Размер шрифта"
                }
            },
            defaultProps: {
                text: "основной текст",
                size: 16
            },
            label: "Основной текст",
            render: ({ text, size }) => {
                return <div style={{fontSize: size}}>{text}</div>;
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

