// Реализуйте функцию сортировки
export default function healthSortList(Data) {
  const result = Data.sort((a, b) => b.health - a.health);
  return result;
}
