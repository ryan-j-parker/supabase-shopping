export function renderItem(item/*, handleBought*/) {

    const listItem = document.createElement('div');
    listItem.classList.add('list-item');

    const itemName = document.createElement('h2');
    itemName.textContent = item.item;

    const quantityOf = document.createElement('p');
    quantityOf.textContent = item.quantity;

    listItem.append(itemName, quantityOf);

    // listItem.addEventListener('click', () => {
    //     handleBought(list);
    // });
    console.log(item);
    return listItem;
}