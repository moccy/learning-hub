import * as db from '$lib/server/database'
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
    const subject = (await db.getSubjects()).find(x => x.slug === params.subject);

    if(!subject) {
        throw error(404, {
            message: 'Not Found'
        });
    }

    const topic = (await db.getTopics(subject.slug)).find(x => x.slug === params.topic);

    if(!topic) {
        throw error(404, {
            message: 'Not Found'
        });
    }

    const subtopics = await db.getSubtopics(subject.slug, topic.slug);

    return {
        subject: subject,
        topic: topic,
        subtopics: subtopics
    }
}