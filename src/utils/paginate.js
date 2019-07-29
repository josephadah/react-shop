import _ from "lodash";

export function paginate(currentPage, pageSize, data) {
  const totalItems = Array.isArray(data) ? data.length : 0;
  if (!totalItems) return [];
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = _(data)
    .slice(startIndex)
    .take(pageSize)
    .value();
  return paginatedData;
}
