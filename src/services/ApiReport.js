import Request from './Request';

class ApiReport {
    constructor() {
        this.params = {
            url_address: '',
            method: 'GET',
            callback: {},
            body: {}
        }
    }

    getAll(cb, filters) {
        let filter_url = []

        if (filters.dateFrom){
            filter_url.push('date_from=' + filters.dateFrom);
        }
        if (filters.dateTo){
            filter_url.push('date_to=' + filters.dateTo);
        }
        if (filters.userId){
            filter_url.push('user_id=' + filters.userId);
        }

        this.params = {
            url_address: '/api/report?' + filter_url.join('&'),
            method: 'GET',
            callback: cb,
            body: {}
        };

        Request(this.params);
    }
}

export default new ApiReport();
