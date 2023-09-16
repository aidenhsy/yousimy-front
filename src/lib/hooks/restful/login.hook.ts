
interface VerifyPhoneParams {
    phoneNumber: string;
    verificationCode?: string;
}
export const verifyPhone = (data: VerifyPhoneParams) => {
    return {
        url: `${process.env.NEXT_PUBLIC_OPEN_URL}/send-verification-code`,
        method: "POST",
        data: data,
    }
}
export const verifyCode = (data: VerifyPhoneParams) => {
    return {
        url: `${process.env.NEXT_PUBLIC_OPEN_URL}/v2/verify-verification-code`,
        method: "POST",
        data: data,
    }
}

