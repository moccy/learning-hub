import type NavItemModel from "$lib/models/nav/navItem";
import navItems from "$lib/data/nav/navItems.json";

import type Subject from "$lib/models/learning/subject";
import subjects from "$lib/data/learning/subjects.json";

import type Topic from "$lib/models/learning/topic";

export const getNavItems: () => Promise<NavItemModel[]> = async () => {
    return await Promise.resolve(navItems);
}

export const getSubjects: () => Promise<Subject[]> = async () => {
    return await Promise.resolve(subjects);
}

export const getTopics: (subjectSlug: string) => Promise<Topic[]> = async (subjectSlug: string) => {
    const data: Topic[] = (await import(`$lib/data/learning/${subjectSlug}/topics.json`)).default;
    return data ?? [];
}