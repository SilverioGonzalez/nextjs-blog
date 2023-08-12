import person from "./person-schema";

const article = {
    name: 'article',
    title: 'Articles',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title'},
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }
            ]
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { 
                    type: 'block',
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'H1', value: 'h1'},
                        {title: 'H2', value: 'h2'},
                        {title: 'H3', value: 'h3'},
                        {title: 'quote', value: 'quote'},
        
                    ],
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alterantive Text',
                            type: 'text',
                            description: 'help visually impaired readers understand the meaning that this iamge communicates.',
                            option: { isHighlighted: true},
                        },
                    ],
                },

            ],
        },
        {
            name: 'overview',
            title: 'Overview',
            type: 'text',
            description: 'use as a project subheader and seo <meta> tag'
        },
        {
            name:'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'person'}],
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime',
        },
        {
            name:'service',
            title: 'Service',
            type: 'reference',
            to: [{ type: 'service'}],
            description: 'This field refernces a relevant service that you offer.'
        },
        {
            name:'featured',
            title: 'Featured',
            type: 'boolean',
        },
    ],
};

export default article;