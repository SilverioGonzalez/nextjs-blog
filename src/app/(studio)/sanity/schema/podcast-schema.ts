import person from "./person-schema"

const podcast = {
    name: 'podcast',
    title: 'Podcast',
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
            name:'host',
            title: 'Host',
            type: 'reference',
            to: [{ type: 'person'}],
        },
        {
            name:'guest',
            title: 'Guest',
            type: 'reference',
            to: [{ type: 'person'}],
        },
        {
            name:'secondGuest',
            title: 'Second Guest',
            type: 'reference',
            to: [{ type: 'person'}],
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime',
        },
        {
            name:'recommendedArticle',
            title: 'Recommended Article',
            type: 'reference',
            to: [{ type: 'article'}],
        },
        {
            name:'relatedEpisode',
            title: 'Related episode',
            type: 'reference',
            to: [{ type: 'podcast'}],
        },
        
    ],
};

export default podcast;