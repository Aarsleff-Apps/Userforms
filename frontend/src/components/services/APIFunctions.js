const getCategoryList = (category, setFunc) => {
  fetch(`http://127.0.0.1:8000/api/${category}/list`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      setFunc(data);
    });
}

export { getCategoryList }