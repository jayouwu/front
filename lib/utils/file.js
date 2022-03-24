"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBase64 = exports.exportExcel = exports.blobToDataURL = void 0;

/**
 * file转base64
 */
var blobToDataURL = function blobToDataURL(blob, callback) {
  var reader = new FileReader();

  reader.onload = function (evt) {
    var base64 = evt.target.result;
    callback(base64);
  };

  reader.readAsDataURL(blob);
};
/**
 * file转base64
 */


exports.blobToDataURL = blobToDataURL;

var getBase64 = function getBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
};

exports.getBase64 = getBase64;

var exportExcel = function exportExcel(func) {
  new Promise(function (resolve, reject) {
    func.then(function (res) {
      if (res.type === "application/json") {
        console.log("文件导出失败: ", res);
        return;
      }

      var blob = new Blob([res], {
        type: "application/vnd.ms-excel"
      });
      var href = window.URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.style.display = "none";
      link.href = href;
      link.setAttribute("download", Date.now() + ".xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(href);
      resolve(res);
    })["catch"](function (err) {
      reject(err);
    });
  });
};

exports.exportExcel = exportExcel;