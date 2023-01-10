
export const getFetchConfig = async(url, auth) => {
    console.log('allprojects', auth)

    const response = await fetch(`http://192.168.101.4:5000${url}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${auth["x-access-token"]}`,
        }
       })
       const data = await response.text();
    return  data;
};

