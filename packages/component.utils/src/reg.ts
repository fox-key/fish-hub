//身份证
export const IDReg =
	/^([1-9]\d{5}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/;

//手机号
export const phoneReg = /(^1([3456789])\d{9}$)|(\d{3}-\d{8}|\d{4}-\d{7,8})/;

export const mobileReg =
	/^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
//电话
export const telephoneReg = /\d{3}-\d{8}|\d{4}-\d{7,8}/;
// 手机号&座机号
export let extendPhoneReg = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/;

//社会信用码
export const registerReg =
	/^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/;

export const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
