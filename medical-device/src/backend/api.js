import {get, post} from './http';
import {pinyinConverter} from "../component/pingyinConverter";

const baseUrl = 'http://rap2api.taobao.org/app/mock/277746/GET';

export const getCityRank = (location) => {
    return prevProcessGetAPI('city-rank', location);
};

export const getDeviceNumbByLocation = (location) => {
    return prevProcessGetAPI('location-device', location);
};

export const getSampleNumb = (location) => {
    return prevProcessGetAPI('sample', location);
}

export const getOrganDataSource = (location) => {
    return prevProcessGetAPI('organ', location);
}
export const getReportListData = (location) => {
    return prevProcessGetAPI('report-list', location);
}

export const getDeviceListData = (location) => {
    return prevProcessGetAPI('device-list', location);
}

const prevProcessGetAPI = (api, location) => {
    let lc = pinyinConverter(location);

    const url = `${baseUrl}/${api}?location=${lc}`;
    return get(url)
        .catch( () => {
            return Promise.reject({error:''})
        })
        .then ( res => {
            if (res["isOk"] === false) {
                return get(`${baseUrl}/${api}?location=zhongguo`)
            }
            else {
                return Promise.resolve(res);
            }
        })

}

