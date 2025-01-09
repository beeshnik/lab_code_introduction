
/**
 * Проверка длины заголовка
 *
 * @param title {string} - заголовок
 *
 * @returns newTitle : string
 */
export function checkNameLength(title){
    let newTitle = title;
    if (newTitle.length > 100){
        return newTitle.slice(0, 50) + "..."
    }
    return newTitle
}
