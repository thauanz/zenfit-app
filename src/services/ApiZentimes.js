// import Auth from '../modules/Auth';
import Request from './Request';

class ApiZentimes {
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

        this.params = {
            url_address: '/api/zentimes?' + filter_url.join('&'),
            method: 'GET',
            callback: cb,
            body: {}
        };

        Request(this.params);
    }

    get(zentime_id, cb) {
        this.params = {
            url_address: '/api/zentimes/' + zentime_id,
            method: 'GET',
            callback: cb,
            body: {}
        };

        Request(this.params);
    }

    delete(zentime_id, cb) {
        this.params = {
            url_address: '/api/zentimes/' + zentime_id,
            method: 'DELETE',
            callback: cb,
            body: {}
        };

        Request(this.params);
    }

    create(zentime, cb) {
        var data = JSON.stringify({
            "zentime": {
                "date_record": zentime.date_record,
                "time_record": zentime.time_record
            }
        });

        this.params = {
            url_address: '/api/zentimes/',
            method: 'POST',
            callback: cb,
            body: data
        };

        Request(this.params);
    }

    update(zentime, cb) {
        var data = JSON.stringify({
            "zentime": {
                "date_record": zentime.date_record,
                "time_record": zentime.time_record
            }
        });

        this.params = {
            url_address: '/api/zentimes/' + zentime.id,
            method: 'PATCH',
            callback: cb,
            body: data
        };

        Request(this.params);
    }
}

export default new ApiZentimes();
