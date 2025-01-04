const getAndSendData = () => {
  const getData = () => {
    fetch("../../db.json")
      .then((response) => response.json())
      .then((data) => sendDataXMLHttpRequest(data))
      .catch((err) => console.log(err));
  };

  const sendData = (data) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const sendDataXMLHttpRequest = (data) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(data));

    xhr.onloadend = function () {
      if (xhr.status == 201) {
        console.log("Успех");
      } else {
        console.log("Ошибка " + this.status);
      }
    };
  };

  getData();
};

export default getAndSendData;
