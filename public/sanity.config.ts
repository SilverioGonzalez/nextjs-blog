import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from '../src/app/(studio)/sanity/schema/project-schema';
import person from '../src/app/(studio)/sanity/schema/person-schema';
import article from '../src/app/(studio)/sanity/schema/article-schema';
import service from '../src/app/(studio)/sanity/schema/service-schema';
import {visionTool} from '@sanity/vision';
import { taxonomyManager } from 'sanity-plugin-taxonomy-manager';
// update base uri for taxonomy manager after deploying
import { media } from 'sanity-plugin-media';
import podcast from '../src/app/(studio)/sanity/schema/podcast-schema';
import uiContent from '@/app/(studio)/sanity/schema/uiContent-schema';

const config = defineConfig ({
    projectId: "yxdcfe0l",
    dataset: "production",
    title: "Silverio Nextjs Porfolio",
    apiVersion: "2023-07-10",
    basePath: "/admin",
    plugins: [
        deskTool({}), 
        visionTool({}),
        taxonomyManager({
            baseUri: ''
        }),
        media()
    ],
    schema: { types: [ person, article, project, service, podcast, uiContent] }
});

export default config; 