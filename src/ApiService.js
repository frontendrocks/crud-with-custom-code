const postData = async (url, data) => {
     const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
    };
    const response = await fetch(url, requestOptions);
    return response;
}

const getPostData = async (url) => {
    const response = await fetch(url);
    return response
}

export  { postData, getPostData }