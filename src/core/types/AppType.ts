type TTest = {};

type TAppResponse = { status: boolean, data: any, responseCode: number, message: string };

type TCountry = {
    name: string
    topLevelDomain: string[]
    alpha2Code: string
    alpha3Code: string
    callingCodes: string[]
}

type TMenuItem = {
    name: string
    linkTo: string
    icon: string
    parent: string
}


type TBlog = {
    heading: string
    message: string
    subMessage: string
}