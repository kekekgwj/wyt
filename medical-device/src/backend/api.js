import {get, post} from './http';
import {pinyinConverter} from "../component/pingyinConverter";

const baseUrl = 'http://rap2api.taobao.org/app/mock/277746/GET';

export const getCityRank = (location) => {
    return prevProcessGetAPI('city-rank', location);
    // return get(`${baseUrl}/city-rank?location=${location}`);
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

const prevProcessGetAPI = (api, location) => {
    let lc = pinyinConverter(location);
    if (lc !== 'zhongguo' && lc !== 'zhejiangsheng' && lc !== 'hangzhoushi') {
        lc = 'zhongguo';
    }
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

