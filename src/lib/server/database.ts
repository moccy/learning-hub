import type NavItemModel from "$lib/models/nav/navItem";
import navItems from "$lib/data/nav/navItems.json";

import subjects from "$lib/data/learning/subjects.json";

import type Topic from "$lib/models/learning/topic";

export const getNavItems: () => Promise<NavItemModel[]> = async () => {
    return await Promise.resolve(navItems);
}

export const getSubjects: () => Promise<Topic[]> = async () => {
    return await Promise.resolve(subjects);
}

export const getTopics: (subjectSlug: string) => Promise<Topic[]> = async (subjectSlug: string) => {
    try {
        const data: Topic[] = (await import(`$lib/data/learning/${subjectSlug}/topics.json`)).default;
        return data ?? [];
    } catch(error) {
        console.warn(`Failed to import topics for subject: ${subjectSlug}`);
        return [];
    }
}

export const getSubtopics: (subjectSlug: string, topicSlug: string) => Promise<Topic[]> = async (subjectSlug: string, topicSlug: string) => {
    try {
        const data: Topic[] = (await import(`$lib/data/learning/${subjectSlug}/${topicSlug}/subtopics.json`)).default;
        return data ?? [];
    } catch(error) {
        console.warn(`Failed to import subtopics for topic: ${subjectSlug}/${topicSlug}`);
        return [];
    }
}

export const getSubtopicMarkdown: (subjectSlug: string, topicSlug: string, subtopicSlug: string) => Promise<string> = async(subjectSlug: string, topicSlug: string, subtopicSlug: string) => {
    try {
        const data: string = (await import(`$lib/data/learning/${subjectSlug}/${topicSlug}/${subtopicSlug}.md?raw`)).default;
        return data ?? "";
    } catch(error) {
        console.warn(`Failed to import subtopics for topic: ${subjectSlug}/${topicSlug}`);
        return "";
    }
}