import qs from 'query-string'

const setQueryStringWithoutPageReload=qsValue=>{
    const newUrl=window.location.protocol+
                "//"+
                window.location.host+
                window.location.pathname+
                qsValue;
            window.history.pushState({path:newUrl},"",newUrl)
}

export const getQueryStringValue=(
    key,
    queryString=window.location.search
)   =>{
    const values=qs.parse(queryString);
    return values[key]
}