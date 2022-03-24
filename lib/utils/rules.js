"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePassword = exports.validateMobile = exports.validateEmail = exports.testPassword = exports.testMobile = exports.testEmail = exports.convertCompanySize = void 0;

var _i18next = require("i18next");

// eslint-disable-next-line
var testEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
exports.testEmail = testEmail;
var testMobile = /^1[23456789]\d{9}$/;
exports.testMobile = testMobile;
var testPassword = /^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[`~!@#$%^&*()_\-+=<>.?:"{}].*).{6,20}$/;
/**
 * 验证一个长度范围[min, max]
 */
// const rangeLength = (value, param) => 
// 	(value.length >= param[0] && value.length <= param[1])
// 验证邮箱

exports.testPassword = testPassword;

var validateEmail = function validateEmail(value) {
  return value === '' && (0, _i18next.t)('rule.emailTips01') || !testEmail.test(value) && (0, _i18next.t)('rule.emailTips02') || '';
}; // 验证手机号码


exports.validateEmail = validateEmail;

var validateMobile = function validateMobile(value) {
  return value === '' && (0, _i18next.t)('rule.phoneTips01') || !testMobile.test(value) && (0, _i18next.t)('rule.phoneTips02') || '';
}; // 验证密码长度


exports.validateMobile = validateMobile;

var validatePassword = function validatePassword(value) {
  return value === '' && (0, _i18next.t)('rule.pwdTips01') || !testPassword.test(value) && (0, _i18next.t)('rule.pwdTips02') || '';
}; // 转换公司人员规模


exports.validatePassword = validatePassword;

var convertCompanySize = function convertCompanySize(value) {
  var companySize = "19";
  var v = parseInt(value);

  if (v < 20) {
    companySize = "19";
  } else if (v < 50) {
    companySize = "49";
  } else if (v < 100) {
    companySize = "99";
  } else if (v < 200) {
    companySize = "199";
  } else if (v < 500) {
    companySize = "499";
  } else if (v < 1000) {
    companySize = "999";
  } else if (v < 10000) {
    companySize = "9999";
  } else {
    companySize = "10000";
  }

  return companySize;
};

exports.convertCompanySize = convertCompanySize;