export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Product Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Product Description',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Product Price',
            type: 'number'
        },
        {
            name: 'price_id',
            title: 'Stripe Product Price_ID',
            type: 'string'
        },
        {
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [{ type: 'image' }],
        },
        {
            name: 'slug',
            title: 'Product Slug',
            type: 'slug',
            options: {
                source: 'name',
            }
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string',
            options: {
                list: [
                    { title: 'White', value: 'white' },
                    { title: 'Black', value: 'black' },
                    { title: 'Green', value: 'green' },
                    { title: 'Blue', value: 'blue' },
                    
                ],
            },
        },
        {
            name: 'gender',
            title: 'Gender',
            type: 'string',
            options: {
                list: [
                    { title: 'Male', value: 'male' },
                    { title: 'Female', value: 'female' },
                    { title: 'Unisex', value: 'unisex' },
                    
                ],
            },
        },
        {
            name: 'quantity',
            title: 'Quantity',
            type: 'number',
        },
    ]
}
