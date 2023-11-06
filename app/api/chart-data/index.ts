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
            let { male, female } = rows[0];
            male = parseInt(male);
            males.push(male);
            female = parseInt(female);
            females.push(female);
            totals.push(male + female);
        } catch (error) {
            throw error;
        }
    }
    return {
        labels,
        datasets: [
            { label: "Total", data: totals, borderColor: "rgb(0, 255, 0)", backgroundColor: "rgba(0, 255, 0, 0.5)" },
            { label: "Male", data: males, borderColor: "rgb(0, 0, 255)", backgroundColor: "rgba(0, 0, 255, 0.5)" },
            { label: "Female", data: females, borderColor: "rgb(255, 0, 0)", backgroundColor: "rgba(255, 0, 0, 0.5)" },
        ],
    };
}