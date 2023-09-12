import * as db from '$lib/server/database'
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
    return {
        navItems: await db.getNavItems(),
    }
}