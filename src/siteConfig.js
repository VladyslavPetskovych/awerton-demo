// Single source of truth for public contact details.
export const SITE_URL = 'https://awerton.com'
export const EMAIL = 'awerton.info@gmail.com'
export const PHONE_DISPLAY = '077 697 00 00'
// International format so the link also works for visitors calling from abroad.
export const PHONE_HREF = 'tel:+380776970000'

// Callback requests are delivered to EMAIL via FormSubmit (no backend needed).
// The very first submission triggers a one-time activation email to EMAIL.
export const REQUEST_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`
