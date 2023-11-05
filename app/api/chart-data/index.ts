"use server";

import { sql } from "@vercel/postgres";

export async function getPopulationByYearRange(start: number, end: number) {
    const males = [];
    const females = [];
    const totals = [];
    const labels = [];
    for (let year = start; year <= end; year++) {
        try {
            const { rows } = await sql`
                SELECT SUM(male) as male, SUM(female) as female FROM Population
                WHERE Year=${year}
                `;
            labels.push(year);
            const { male, female } = rows[0];
            males.push(male);
            females.push(female);
            totals.push(male + female);
        } catch (error) {
            throw error;
        }
    }
    return {
        labels,
        datasets: [{ label: "Total", data: totals },
        { label: "Male", data: males },
        { label: "Female", data: females }],
    };
}