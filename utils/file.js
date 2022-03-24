/**
 * file转base64
 */
export const blobToDataURL = (blob, callback) => {
  let reader = new FileReader();
  reader.onload = function (evt) {
    let base64 = evt.target.result;
    callback(base64);
  };
  reader.readAsDataURL(blob);
};

/**
 * file转base64
 */
export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const exportExcel = (func) => {
  new Promise((resolve, reject) => {
    func
      .then((res) => {
        if (res.type === "application/json") {
          console.log("文件导出失败: ", res);
          return;
        }
        const blob = new Blob([res], {
          type: "application/vnd.ms-excel",
        });
        const href = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.style.display = "none";
        link.href = href;
        link.setAttribute("download", Date.now() + ".xlsx");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(href);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
