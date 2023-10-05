import * as db from '$lib/server/database';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import MarkdownIt from 'markdown-it';

const mdParser = MarkdownIt();

export const load: PageServerLoad = async ({ params }) => {
    const subject = (await db.getSubjects()).find(x => x.slug === params.subject);

    if(!subject) {
        throw error(404, {
            message: 'Subject Not Found'
        });
    }

    const topic = (await db.getTopics(subject.slug)).find(x => x.slug === params.topic);

    if(!topic) {
        throw error(404, {
            message: 'Topic Not Found'
        });
    }

    const subtopic = (await db.getSubtopics(subject.slug, topic.slug)).find(x => x.slug === params.subtopic);

    if(!topic) {
        throw error(404, {
            message: 'Subtopic Not Found'
        });
    }

    if(!subtopic) {
        throw error(404, {
            message: 'Subtopic Not Found'
        });
    }

    const rawMarkdown = await db.getSubtopicMarkdown(subject.slug, topic.slug, subtopic.slug);
    const htmlContent = mdParser.render(rawMarkdown);

    return {
        subject: subject,
        topic: topic,
        subtopic: subtopic,
        htmlContent: htmlContent
    }
}