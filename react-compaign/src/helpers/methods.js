export const getFormattedDate = (date) => {
    var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    return `${months[date.getMonth()]} ${date.getFullYear()}, ${date.getDate()}`
}