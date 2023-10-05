import * as db from '$lib/server/database'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
    return {
        subjects: await db.getSubjects(),
    }
}