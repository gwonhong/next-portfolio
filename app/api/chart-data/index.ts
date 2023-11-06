"use server";

import { sql } from "@vercel/postgres";

const COLORS = {
    red: "rgb(255, 0, 0)",
    green: "rgb(0, 255, 0)",
    blue: "rgb(0, 0, 255)",
};

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
        datasets: [{ label: "Total", data: totals, borderColor: COLORS.green, backgroundColor: COLORS.green },
        { label: "Male", data: males, borderColor: COLORS.blue, backgroundColor: COLORS.blue },
        { label: "Female", data: females, borderColor: COLORS.red, backgroundColor: COLORS.red }],
    };
}