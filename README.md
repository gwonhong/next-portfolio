# My Portfolio Website

This website is built with [Next.js](https://nextjs.org), and deployed with [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Descriptions for each pages

### Home

Brief self-introduction about myself. Written in mdx syntax, and rendered using [@next/mdx](https://www.npmjs.com/package/@next/mdx).

### Projects

Shows preview of each projects. You can show the full detail by clicking on each preview block.

Each project page is also written in mdx syntax, and rendered using [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote).

### Chart

Visualizes Korea's population projection with various options.

- Data Source: [통계청,「장래인구추계」, 2070, 2023.11.05, 성 및 연령별 추계인구(1세별, 5세별) / 전국](https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1BPA001&conn_path=I2)
- Used [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) for DB.
- Visualized using [react-chartjs-2](https://react-chartjs-2.js.org).

#### Options

1. Changes in the total/male/female and specific age range population
2. Distribution of each age range in the total/male/female population
