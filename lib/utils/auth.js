"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setToken = exports.setRefreshToken = exports.setProcess = exports.setPermissions = exports.setOrgInfo = exports.setNodeEnv = exports.setMicro = exports.setLanguage = exports.setExpires = exports.setAutoLogin = exports.setAntdPrimaryColor = exports.setAccountInfo = exports.removeToken = exports.removeRefreshToken = exports.removePermissions = exports.removeOrgInfo = exports.removeNodeEnv = exports.removeMicro = exports.removeLanguage = exports.removeExpires = exports.removeAutoLogin = exports.removeAll = exports.removeAccountInfo = exports.getToken = exports.getRefreshToken = exports.getProcess = exports.getPermissions = exports.getOrgInfo = exports.getNodeEnv = exports.getMicro = exports.getLanguage = exports.getExpires = exports.getAutoLogin = exports.getAccountInfo = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TokenKey = 'Authorization';
var RefreshTokenKey = 'RefreshToken';
var AccountInfoKey = 'accountInfo';
var LanguageKey = 'language';
var OrgInfoKey = 'orgInfo';
var AutoLoginKey = 'autoLogin';
var ProcessKey = 'Process';
var PermissionsKey = 'permissions';
var ExpiresKey = 'expires';
var CustomAntdPrimaryColor = 'custom-antd-primary-color';
var nodeEnvKey = 'NODE_ENV';
var MicroKey = 'micro';

var setAntdPrimaryColor = function setAntdPrimaryColor(color) {
  localStorage.setItem(CustomAntdPrimaryColor, color);
};

exports.setAntdPrimaryColor = setAntdPrimaryColor;

var getProcess = function getProcess() {
  var info = localStorage.getItem(ProcessKey);
  return JSON.parse(info);
};

exports.getProcess = getProcess;

var setProcess = function setProcess(info) {
  localStorage.setItem(ProcessKey, JSON.stringify(info));
}; // cookie 过期时间


exports.setProcess = setProcess;

var getExpires = function getExpires() {
  return localStorage.getItem(ExpiresKey);
};

exports.getExpires = getExpires;

var setExpires = function setExpires(data) {
  localStorage.setItem(ExpiresKey, data);
};

exports.setExpires = setExpires;

var removeExpires = function removeExpires() {
  return localStorage.removeItem(ExpiresKey);
}; // 自动登录信息


exports.removeExpires = removeExpires;

var getAutoLogin = function getAutoLogin() {
  var info = localStorage.getItem(AutoLoginKey);
  return JSON.parse(info);
};

exports.getAutoLogin = getAutoLogin;

var setAutoLogin = function setAutoLogin(info) {
  // 暂时静态处理
  localStorage.setItem(AutoLoginKey, JSON.stringify(info));
};

exports.setAutoLogin = setAutoLogin;

var removeAutoLogin = function removeAutoLogin() {
  return localStorage.removeItem(AutoLoginKey);
}; // token


exports.removeAutoLogin = removeAutoLogin;

var getToken = function getToken() {
  return _jsCookie["default"].get(TokenKey);
};

exports.getToken = getToken;

var setToken = function setToken(token, expires) {
  if (typeof expires === 'string') {
    expires = Number(expires);
  }

  return _jsCookie["default"].set(TokenKey, token, {
    expires: new Date(expires)
  });
};

exports.setToken = setToken;

var removeToken = function removeToken() {
  return _jsCookie["default"].remove(TokenKey);
}; // 刷新 token


exports.removeToken = removeToken;

var getRefreshToken = function getRefreshToken() {
  return _jsCookie["default"].get(RefreshTokenKey);
};

exports.getRefreshToken = getRefreshToken;

var setRefreshToken = function setRefreshToken(refreshToken, expires) {
  if (typeof expires === 'string') {
    expires = Number(expires);
  }

  return _jsCookie["default"].set(RefreshTokenKey, refreshToken, {
    expires: new Date(expires)
  });
};

exports.setRefreshToken = setRefreshToken;

var removeRefreshToken = function removeRefreshToken() {
  return _jsCookie["default"].remove(RefreshTokenKey);
}; // 账号信息


exports.removeRefreshToken = removeRefreshToken;

var getAccountInfo = function getAccountInfo() {
  var info = localStorage.getItem(AccountInfoKey);
  return JSON.parse(info);
};

exports.getAccountInfo = getAccountInfo;

var setAccountInfo = function setAccountInfo(info) {
  // 暂时静态处理
  localStorage.setItem(AccountInfoKey, JSON.stringify(info));
};

exports.setAccountInfo = setAccountInfo;

var removeAccountInfo = function removeAccountInfo() {
  return localStorage.removeItem(AccountInfoKey);
}; // language


exports.removeAccountInfo = removeAccountInfo;

var getLanguage = function getLanguage() {
  return localStorage.getItem(LanguageKey);
};

exports.getLanguage = getLanguage;

var setLanguage = function setLanguage(data) {
  // 暂时静态处理
  localStorage.setItem(LanguageKey, data);
};

exports.setLanguage = setLanguage;

var removeLanguage = function removeLanguage() {
  return localStorage.removeItem(LanguageKey);
}; // nodeEnvKey


exports.removeLanguage = removeLanguage;

var getNodeEnv = function getNodeEnv() {
  return localStorage.getItem(nodeEnvKey);
};

exports.getNodeEnv = getNodeEnv;

var setNodeEnv = function setNodeEnv(data) {
  // 暂时静态处理
  localStorage.setItem(nodeEnvKey, data);
};

exports.setNodeEnv = setNodeEnv;

var removeNodeEnv = function removeNodeEnv() {
  return localStorage.removeItem(nodeEnvKey);
};

exports.removeNodeEnv = removeNodeEnv;

var removeAll = function removeAll() {
  removeToken();
  removeAccountInfo();
  removeOrgInfo();
  removeRefreshToken();
  removeAutoLogin();
  removePermissions();
  removeExpires();
}; // 组织信息


exports.removeAll = removeAll;

var getOrgInfo = function getOrgInfo() {
  var info = localStorage.getItem(OrgInfoKey);
  return JSON.parse(info);
};

exports.getOrgInfo = getOrgInfo;

var setOrgInfo = function setOrgInfo(info) {
  // 暂时静态处理
  localStorage.setItem(OrgInfoKey, JSON.stringify(info));
};

exports.setOrgInfo = setOrgInfo;

var removeOrgInfo = function removeOrgInfo() {
  return localStorage.removeItem(OrgInfoKey);
}; // 权限信息


exports.removeOrgInfo = removeOrgInfo;

var getPermissions = function getPermissions() {
  var info = localStorage.getItem(PermissionsKey);
  return JSON.parse(info);
};

exports.getPermissions = getPermissions;

var setPermissions = function setPermissions(info) {
  // 暂时静态处理
  localStorage.setItem(PermissionsKey, JSON.stringify(info));
};

exports.setPermissions = setPermissions;

var removePermissions = function removePermissions() {
  return localStorage.removeItem(PermissionsKey);
};

exports.removePermissions = removePermissions;

var getMicro = function getMicro() {
  return localStorage.getItem(MicroKey);
};

exports.getMicro = getMicro;

var setMicro = function setMicro(data) {
  localStorage.setItem(MicroKey, data);
};

exports.setMicro = setMicro;

var removeMicro = function removeMicro() {
  return localStorage.removeItem(MicroKey);
};

exports.removeMicro = removeMicro;