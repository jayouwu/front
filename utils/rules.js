import { t } from "i18next"
// eslint-disable-next-line
export const testEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/  
export const testMobile = /^1[23456789]\d{9}$/
export const testPassword = /^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[`~!@#$%^&*()_\-+=<>.?:"{}].*).{6,20}$/

/**
 * 验证一个长度范围[min, max]
 */
// const rangeLength = (value, param) => 
// 	(value.length >= param[0] && value.length <= param[1])

// 验证邮箱
export const validateEmail = (value) => 
	((value === '') && t('rule.emailTips01')) || (!testEmail.test(value) && t('rule.emailTips02')) || ''

// 验证手机号码
export const validateMobile = (value) => 
	((value === '') && t('rule.phoneTips01')) || (!testMobile.test(value) && t('rule.phoneTips02')) || ''

// 验证密码长度
export const validatePassword = (value) => 
	((value === '') && t('rule.pwdTips01')) || (!testPassword.test(value) && t('rule.pwdTips02')) || ''

// 转换公司人员规模
export const convertCompanySize =(value) => {
	let companySize = "19";
	const v = parseInt(value)
	if( v<20){
		companySize = "19"
	}else if(v<50){
		companySize = "49"
	}else if(v<100){
		companySize = "99"
	}else if(v<200){
		companySize = "199"
	}else if(v<500){
		companySize = "499"
	}else if(v<1000){
		companySize = "999"
	}else if(v<10000){
		companySize = "9999"
	}else{
		companySize = "10000"
	}
	return companySize;
}
