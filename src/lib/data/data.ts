export interface Collections {
    img: string;
    heading: string;
    para: string;
}

export const collections: Collections[] = [
    {
        img: './assets/home/desktop/image-gran-espresso.png',
        heading: 'Gran Espresso',
        para: "Light and flavorful blend with cocoa and black pepper for an intense experience",
    },
    {
        img: './assets/home/desktop/image-planalto.png',
        heading: 'Planalto',
        para: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    },
    {
        img: './assets/home/desktop/image-piccollo.png',
        heading: 'Piccollo',
        para: "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
    },
    {
        img: './assets/home/desktop/image-danche.png',
        heading: 'Danche',
        para: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    }
]

export interface Choices{
    img: string;
    heading: string;
    para: string;
}

export const choices: Choices[] = [
    {
        img: './assets/home/desktop/icon-coffee-bean.svg',
        heading: 'Best quality',
        para: "Discover an endless variety of the world’s best artisan coffee from each of our roasters."
    },
    {
        img: './assets/home/desktop/icon-gift.svg',
        heading: 'Exclusive benefits',
        para: "Special offers and swag when you subscribe, including 30% off your first shipment."
    },
    {
        img: './assets/home/desktop/icon-truck.svg',
        heading: 'Free shipping',
        para: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
    },
]

export interface Steps {
    step: string;
    heading: string;
    para: string;
}

export const steps: Steps[] = [
    {
        step: '01',
        heading: 'Pick your coffee',
        para: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
    },
    {
        step: '02',
        heading: 'Choose the frequency',
        para: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
    },
    {
        step: '03',
        heading: 'Receive and enjoy!',
        para: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
    },
]

export interface Locations {
    img: string;
    country: string;
    address: {
        street: string;
        city: string;
        postCode: string;
    }
    phoneNumber: string;
}

export const locations: Locations[] = [
    {
        img: './assets/about/desktop/illustration-uk.svg',
        country: 'United Kingdom',
        address: {
            street: '68  Asfordby Rd',
            city: 'Alcaston',
            postCode: 'SY6 1YA'
        },
        phoneNumber: '+44 1241 918425'
    },
    {
        img: './assets/about/desktop/illustration-canada.svg',
        country: 'Canada',
        address: {
            street: '1528  Eglinton Avenue',
            city: 'Toronto',
            postCode: 'Ontario M4P 1A6'
        },
        phoneNumber: '+1 416 485 2997'
    },
    {
        img: './assets/about/desktop/illustration-australia.svg',
        country: 'Australia',
        address: {
            street: '36 Swanston Street',
            city: 'Kewell',
            postCode: 'Victoria'
        },
        phoneNumber: '+61 4 9928 3629'
    },
]