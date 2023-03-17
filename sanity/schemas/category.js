export default {
    name: 'categories',
    type: 'document', //Document er alltid en innholdstype, som synes i Studio Sanity. Synes på interfacen. Tenk felter, litt som drag-and-drop. Og bygg innhold i innhold. 
    title: 'Kategorier',
    fields: [
        {
            name: 'category_title',
            type: 'string',
            title: 'Kategorinavn'
        },

        {
            name: 'category_image',
            type: 'image',
            title: 'Bilde'
        }
    ]
}