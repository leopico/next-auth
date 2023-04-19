export { default } from 'next-auth/middleware'

export const config = {
    mitcher: ['/((?!register|api|login).*)']
}