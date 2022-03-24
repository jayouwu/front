import Cookies from 'js-cookie'
const TokenKey = 'Authorization'
const RefreshTokenKey = 'RefreshToken'
const AccountInfoKey = 'accountInfo'
const LanguageKey = 'language'
const OrgInfoKey = 'orgInfo'
const AutoLoginKey = 'autoLogin'
const ProcessKey = 'Process'
const PermissionsKey = 'permissions'
const ExpiresKey = 'expires'
const CustomAntdPrimaryColor = 'custom-antd-primary-color'
const nodeEnvKey = 'NODE_ENV'
const MicroKey = 'micro'


export const setAntdPrimaryColor = (color) =>{
  localStorage.setItem(CustomAntdPrimaryColor, color)
}

export const getProcess = () => {
  const info = localStorage.getItem(ProcessKey)
  return JSON.parse(info)
}

export const setProcess = (info) =>{
  localStorage.setItem(ProcessKey, JSON.stringify(info))
}
// cookie 过期时间

export const getExpires = () => {
  return localStorage.getItem(ExpiresKey)
}

export const setExpires = (data) =>{
  localStorage.setItem(ExpiresKey, data)
}

export const removeExpires = () => {
  return localStorage.removeItem(ExpiresKey)
}

// 自动登录信息
export const getAutoLogin = () => {
  const info = localStorage.getItem(AutoLoginKey)
  return JSON.parse(info)
}

export const setAutoLogin = (info) =>{ // 暂时静态处理
  localStorage.setItem(AutoLoginKey, JSON.stringify(info))
}

export const removeAutoLogin = () => {
  return localStorage.removeItem(AutoLoginKey)
}

// token
export const getToken = () => {
  return Cookies.get(TokenKey)
}

export const setToken = (token, expires ) => {
  if(typeof expires === 'string'){
    expires = Number(expires)
  }
  return Cookies.set(TokenKey, token, { expires: new Date(expires)})
}

export const removeToken = () => {
  return Cookies.remove(TokenKey)
}

// 刷新 token
export const getRefreshToken = () => {
  return Cookies.get(RefreshTokenKey)
}

export const setRefreshToken = (refreshToken, expires) => {
  if(typeof expires === 'string'){
    expires = Number(expires)
  }
  return Cookies.set(RefreshTokenKey, refreshToken, { expires: new Date(expires)})
}

export const removeRefreshToken = () => {
  return Cookies.remove(RefreshTokenKey)
}

// 账号信息
export const getAccountInfo = () => {
  const info = localStorage.getItem(AccountInfoKey)
  return JSON.parse(info)
}

export const setAccountInfo = (info) =>{ // 暂时静态处理
  localStorage.setItem(AccountInfoKey, JSON.stringify(info))
}

export const removeAccountInfo = () => {
  return localStorage.removeItem(AccountInfoKey)
}

// language
export const getLanguage = () => {
  return localStorage.getItem(LanguageKey)
}

export const setLanguage = (data) => { // 暂时静态处理
  localStorage.setItem(LanguageKey, data)
}

export const removeLanguage = () => {
  return localStorage.removeItem(LanguageKey)
}

// nodeEnvKey
export const getNodeEnv = () => {
  return localStorage.getItem(nodeEnvKey)
}

export const setNodeEnv = (data) => { // 暂时静态处理
  localStorage.setItem(nodeEnvKey, data)
}

export const removeNodeEnv = () => {
  return localStorage.removeItem(nodeEnvKey)
}

export const removeAll = () => {
  removeToken()
  removeAccountInfo()
  removeOrgInfo()
  removeRefreshToken()
  removeAutoLogin()
  removePermissions()
  removeExpires()
}

// 组织信息
export const getOrgInfo = () => {
  const info = localStorage.getItem(OrgInfoKey)
  return JSON.parse(info)
}

export const setOrgInfo = (info) =>{ // 暂时静态处理
  localStorage.setItem(OrgInfoKey, JSON.stringify(info))
}

export const removeOrgInfo = () => {
  return localStorage.removeItem(OrgInfoKey)
}

// 权限信息
export const getPermissions = () => {
  const info = localStorage.getItem(PermissionsKey)
  return JSON.parse(info)
}

export const setPermissions = (info) =>{ // 暂时静态处理
  localStorage.setItem(PermissionsKey, JSON.stringify(info))
}

export const removePermissions = () => {
  return localStorage.removeItem(PermissionsKey)
}

export const getMicro = () => {
  return localStorage.getItem(MicroKey)
}

export const setMicro = (data) =>{
  localStorage.setItem(MicroKey, data)
}

export const removeMicro = () => {
  return localStorage.removeItem(MicroKey)
}