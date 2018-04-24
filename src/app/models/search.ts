export const partial_search_properties = ['offset', 'max'];
export const sort_info_properties = ['sortInfo'];
export const search_properties = [...partial_search_properties, ...sort_info_properties];

export interface Search {
  offset?: number;
  max?: number;
  sortInfo?: SortInfo[];
}

export interface SortInfo {
  field?: string;
  descending?: boolean;
}

export const getSortmethodBySortInfo = (sortInfo: SortInfo[]) => {
  return (a, b) => {
    const getValue = (object: any, path: string) => {
      path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
      path = path.replace(/^\./, ''); // strip a leading dot
      const array = path.split('.');
      for (let i = 0, n = array.length; i < n; ++i) {
        const k = array[i];
        if (k in object) {
          object = object[k];
        } else {
          return;
        }
      }
      return object;
    };
    let result = 0;
    let aValue;
    let bValue;
    sortInfo.some((sortInfoItem: SortInfo) => {
      aValue = getValue(a, sortInfoItem.field);
      bValue = getValue(b, sortInfoItem.field);
      result = aValue < bValue ? -1 : bValue < aValue ? 1 : 0;
      result = !!sortInfoItem.descending ? -1 * result : result;
      return !!result;
    });
    return result;
  };
};
