const project = {
    name: 'project',
    title: 'Projects',
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
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            description: '1-2 sentences'
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
            name:'featured',
            title: 'Featured',
            type: 'boolean',
        },
        {
            name:'personalProject',
            title: 'Personal Project',
            type: 'boolean',
            description: "Use for personal projects. Don't use for cliet work."
        },
        {
            name:'caseStudy',
            title: 'Case Study',
            type: 'boolean',
            description: "Case study is a format that usually applies to client work. It may also apply to some personal projects."
        },
        {
            name:'service',
            title: 'Service',
            type: 'reference',
            to: [{ type: 'service'}],
            description: 'This field refernces a relevant service that you offer.'
        },
    ],
};

export default project;