const person = {
    name: 'person',
    title: 'Person',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'endorsement',
            title: 'Endorsement',
            type: 'text',
            description: 'This should be a quote from a person'
        },
        {
            name: 'title',
            title: 'title',
            type: 'text',
            description: 'This should be a job title'
        },
        {
            name: 'biography',
            title: 'Biography',
            type: 'array',
            of: [{ type: 'block' }],
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
            name: 'socialProof',
            title: 'Social Proof',
            type: 'boolean',
            description: 'has this person endorsed you?'
        },
        {
            name: 'featuredSocialProof',
            title: 'Featured Social Proof',
            type: 'boolean',
            description: "Do you want this person's endorsement to show up on social proof sections?"
        },

    ],
};

export default person;