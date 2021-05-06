
interface IApiServices {
    [key: string]: string,
    API_SERVICE: string,
}

const services: IApiServices = {
    API_SERVICE: "https://empresas.ioasys.com.br/api/v1",
}

enum EApiServices {
    API_SERVICE = "API_SERVICE",
}

export const apiServices = EApiServices

export const settings = {
    services: services,
    auth: "/users/auth/sign_in"
}