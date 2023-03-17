export default {
    name: 'produkter',
    title: 'Produktene',
    type: 'document',

    fields: [
        {
            name: 'Produkt_tittel',
            title: 'Produktnavn',
            type: 'string'
        }, 

        {
            name: 'slug',
            type: 'slug',
            title: 'URL-tittel'
        },

        {
            name: 'price',
            type: 'number',
            title: 'Pris' 

        },

        {
            name: 'quantity',
            type: 'number',
            title: 'lagerstatus'
        },

        {
            name: 'produkt_image',
            type: 'image',
            title: 'Prod_bilde'
        },

        {
            name: 'category',
            title: 'Kategori',
            type: 'reference',
            to: [{type: 'categories'}]
        },
    ]
}