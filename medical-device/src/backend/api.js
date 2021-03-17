import {get, post} from './http';

const baseUrl = 'http://rap2api.taobao.org/app/mock/277746/GET';

export const getCityRank = (location) => {
    return get(`${baseUrl}/city-rank?location=${location}`);
};

export const getDeviceNumbByLocation = (location) => {
    return get(`${baseUrl}/location-device?location=${location}`);
};

export const getSampleNumb = (location) => {
    return get(`${baseUrl}/sample?location=${location}`);
}

export const getOrganDataSource = (location) => {
    return get(`${baseUrl}/organ?location=${location}`);
}
export const getReportListData = (location) => {
    return get(`${baseUrl}/report-list?location=${location}`);
}

export const getDeviceListData = (location) => {
    return get(`${baseUrl}/device-list?location=${location}`);
}

