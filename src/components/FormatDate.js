const FormatDate = (date) => {
    if (date) {
        return new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).format(new Date(date))
    } else {
        return
    }
};

export default FormatDate;
