import * as db from '$lib/server/database'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
    const subject = (await db.getSubjects()).find(x => x.slug === params.subject);
    return {
        subject: subject?.title ?? 'Unknown Subject'
    }
}