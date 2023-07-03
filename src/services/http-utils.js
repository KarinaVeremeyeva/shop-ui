export const getResource = async (url, token = null) => {
    const headers = token ? { 'Authorization': token } : {};
    const response = await fetch(url, { headers });

    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    
    return response;
};

export const postResource = async (url, body = null, token = null) => {
    let requestData = { method: 'POST', headers: {} };
    if (body) {
        requestData.body = JSON.stringify(body);
        requestData.headers['Content-Type'] = 'application/json';
    }

    if (token) {
        requestData.headers['Authorization'] = token;
    }

    const response = await fetch(url, requestData);

    if (!response.ok) {
        throw new Error(`Could not post ${url}, received ${response.status}`);
    }
    
    return response;
};

export const putResource = async (url, body = null, token = null) => {
    let requestData = { method: 'PUT', headers: {} };
    if (body) {
        requestData.body = JSON.stringify(body);
        requestData.headers['Content-Type'] = 'application/json';
    }

    if (token) {
        requestData.headers['Authorization'] = token;
    }

    const response = await fetch(url, requestData);

    if (!response.ok) {
        throw new Error(`Could not put ${url}, received ${response.status}`);
    }
    
    return response;
};

export const deleteResource = async (url, token = null) => {
    const headers = token ? { 'Authorization': token } : {};
    const response = await fetch(url, { method: 'DELETE', headers });

    if (!response.ok) {
        throw new Error(`Could not delete ${url}, received ${response.status}`);
    }
    
    return response;
};