function formatQuery(searchParams) {
  let query = "";

  query += `sort=${searchParams?.sort ?? JSON.stringify({ createdAt: -1 })}`;

  if (searchParams?.name) query += `&name=${searchParams?.name}`;
  if (searchParams?.brands) query += `&brand=${searchParams?.brand}`;
  if (searchParams?.category) query += `&category=${searchParams?.category}`;
  if (searchParams?.min) query += `&min=${searchParams?.min}`;
  if (searchParams?.max) query += `&max=${searchParams?.max}`;
  if (searchParams?.createdBy) query += `&createdBy=${searchParams?.createdBy}`;

  return query;
}

export default formatQuery;
