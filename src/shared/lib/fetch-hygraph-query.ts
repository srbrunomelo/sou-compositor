const oneDay = 60 * 60 * 24;
const twoOurHours = 60 * 60 * 2;

export const fetchHygraphQuery = async (
  query: string,
  revalidateTag: string, 
  revalidate: number = twoOurHours
) => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN!}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: revalidate,
      tags: [revalidateTag],
    },
  });

  const { data } = await response.json();

  return data;
};
