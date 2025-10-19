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


type TAppContext = {
    ActiveBlog: TBlog
    setActiveBlog: (blog: TBlog) => void
}

type TBlog = {
    withAddedComp?: boolean
    heading: string
    author?: string
    imageCaption?: string
    message: string
    subMessage: string
    image?: boolean
}

type TDonationOption = {
    value: number 
    message: string[] 
}