type TAppResponse = { status: boolean, data: any, responseCode: number, message: string };

type TCountry = {
    name: TCountryName
}

type TCountryName = {
    common: string
    link: string | undefined
    official: string
    nativeName: {
        lit: TLit
    }
}

type TLit = {
    official: string
    common: string
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
    date?: string
    headerImage?: string
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