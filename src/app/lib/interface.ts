import { RefObject } from "react";

export interface Article {
    title: string;
    overview: string;
    content: any; //the other option is content: any this worked but 
    //sanity rep reccomends content: PortableTextBlock[];
    _id: string;
    slug: {current: string}
    _createdAt: string;
    author: string;
    coverImage: string;
}


export interface Project {
    title: string;
    shortDescription: string;
    content: any;
    _id: string;
    slug: {current: string}
    _createdAt: string;
    author: string;
    coverImage: string;
    primaryProjectImage: string;
    secondaryProjectImage: string;
}

export interface Service {
    title: string;
    overview: string;
    content: any;
    _id: string;
    slug: {current: string}
    coverImage: string;
    relatedService: string;
}

export interface Person {
    name: string;
    _id: string;
    coverImage: string;
    title: string;
    biography: any;
    endorsement: string;
}

export interface UiContent {
    title: string;
    content: any; //the other option is content: any this worked but 
    //sanity rep reccomends content: PortableTextBlock[];
    shortDescription: string;
    _id: string;
    slug: {current: string}
    coverImage: string;

}