import person from "./person-schema";

const service = {
    name: 'service',
    title: 'Services',
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
                    type: 'block' 
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
            name:'relatedService',
            title: 'Related Service',
            type: 'reference',
            to: [{ type: 'service'}],
        },
        {
            name:'featured',
            title: 'Featured',
            type: 'boolean',
        },
    ],
};

export default service;