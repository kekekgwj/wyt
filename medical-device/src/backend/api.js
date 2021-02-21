import {get, post} from './http';

const baseUrl = 'http://rap2api.taobao.org/app/mock/277746/GET';

export const getCityRank = () => {
    return get(`${baseUrl}/city-rank`);
};

export const getDeviceNumbByLocation = (location) => {
    return get(`${baseUrl}/location-device?location=${location}`);
};

export const getSampleNumb = (location) => {
    return get(`${baseUrl}/sample?location=${location}`);
}

export const getReportListData = (location) => {
    return get(`${baseUrl}/report?location=${location}`);
}
