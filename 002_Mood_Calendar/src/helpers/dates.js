class DatesHelper {
    
    getWeekDays() {
        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    };

    getMonth(month) {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[month -  1];
    };

    getAllDaysOfMonth(year, month) {
        let totalDaysInMonth = new Date(year, month, 0).getDate();        
        let d = [];
        for (let i = 1; i <= totalDaysInMonth; i++) {
            d.push(new Date(year, month - 1, i));
        }

        return d;
    };
}

export default (new DatesHelper());