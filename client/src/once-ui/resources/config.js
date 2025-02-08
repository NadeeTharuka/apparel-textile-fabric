const baseURL = 'demo.once-ui.com'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',        // sand | gray | slate
    brand:       'cyan',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'indigo',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'playful',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'BSCS',
    description: 'BSCS is a Apparel Textile Fabric company based in Kandy, Sri Lanka. '
}


// default open graph data
const og = {
    title: 'BSCS',
    description: 'Specializes in cutting solutions for the apparel, textile, and fabric industry',
    type: 'website'
}

// default schema data
const schema = {
    logo: 'bscs',
    type: 'Organization',
    name: 'BSCS',
    description: 'BSCS is a Apparel Textile Fabric company based in Kandy, Sri Lanka. ',
    email: 'nuwandarshana472@gmail.com'
}

// social links
const social = {
    twitter: 'https://www.twitter.com/_onceui',
    linkedin: 'https://www.linkedin.com/company/once-ui/',
    discord: 'https://discord.com/invite/5EyAQ4eNdS'
}

export { baseURL, style, meta, og, schema, social };