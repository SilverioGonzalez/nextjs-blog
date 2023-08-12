const uiContent = {
    name: 'uiContent',
    title: 'UI Content',
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
            name: 'shortdescription',
            title: 'Short Description',
            type: 'text',
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
                },
            ],
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
    ],
};

export default uiContent;