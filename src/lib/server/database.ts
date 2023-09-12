import type NavItemModel from "$lib/models/nav/navItem";
import navItems from "$lib/data/nav/navItems.json";

import type Subject from "$lib/models/learning/subject";
import subjects from "$lib/data/learning/subjects.json";

export const getNavItems: () => Promise<NavItemModel[]> = async () => {
    return await Promise.resolve(navItems);
}

export const getSubjects: () => Promise<Subject[]> = async () => {
    return await Promise.resolve(subjects);
}