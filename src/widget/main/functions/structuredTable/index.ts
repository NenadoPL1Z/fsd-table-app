import { TableArr } from "@/shared/model";
import { Nullable } from "@/shared/types";

export const structuredTable = (data: TableArr) => {
  const tableSortParent = data.sort((a, b) => b.parentId - a.parentId);

  const parentArrArr: TableArr[] = [];
  const parentArrId: { parent: number; children: TableArr }[] = [];

  let lastParent: Nullable<number> = null;

  for (let i = 0; i < tableSortParent.length; i++) {
    const currentItem = tableSortParent[i];
    const parent = currentItem.parentId;

    if (parent !== lastParent) {
      parentArrArr.push([currentItem]);
      parentArrId.push({ parent, children: [currentItem] });
      lastParent = currentItem.parentId;
      continue;
    }

    if (parent == lastParent) {
      parentArrArr[parentArrArr.length - 1].push(currentItem);
      parentArrId[parentArrId.length - 1].children.push(currentItem);
    }
  }
  parentArrId.forEach((item) => {
    for (let i = 0; i < parentArrArr.length; i++) {
      const currentParentArr = parentArrArr[i];
      for (let j = 0; j < currentParentArr.length; j++) {
        const findItem = currentParentArr[j];

        if (item.parent === findItem.id) {
          findItem.children = item.children;
          break;
        }
      }
    }
  });

  return parentArrArr[parentArrArr.length - 1];
};
