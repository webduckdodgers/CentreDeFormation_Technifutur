
/**
 * REQUEST GET
 */
export function requestGet(URL, data) {
  const XML = new XMLHttpRequest();

  XML.onreadystatechange = () => {
    if (XML.readyState === 4 && (XML.status === 200 || XML.status === 0)) {
      const object = JSON.parse(XML.response);
      data(object);
    }
  };

  XML.open("GET", URL, true);
  XML.send();
}

/**
 * HTTP POST
 */
export function httpPost(URL, object, token = "") {
  return new Promise((resolve, reject) => {
    const XML = new XMLHttpRequest();

    XML.onreadystatechange = () => {
      if (XML.readyState === 4) {
        if (XML.status >= 200 && XML.status < 300) {
          resolve(XML.responseText);
        } else if (XML.status === 500) {
          reject();
        }
      }
    };
    if (token !== "") {
      XML.setRequestHeader("Authorization", "Bearer " + token);
    }

    XML.open("POST", URL, true);
    XML.send(JSON.stringify(body));
  });
}

/**
 * REQUEST METHOD
 */
export function requestMethod(method, URL, body = null, token = "") {
  try {
    let params = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    if (body) {
      params.body = JSON.stringify(body);
    }

    const result = fetch(URL, params);

    if (!result.ok) {
      console.error(result.status);
    }

    const pokemon = result.json();
    console.log(pokemon);
  } catch (err) {
    console.log(err);
  }
}
