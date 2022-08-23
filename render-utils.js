export function renderList(list) {
    const listDiv = document.createElement('div');
    
    for (let items of list) {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');

        const itemName = document.createElement('h2');
        itemName.textContent = list.item;

        const quantityOf = document.createElement('p');
        quantityOf.textContent = list.quantity;

        listItem.append(itemName, quantityOf);
        return items;
    }
    listDiv.append(list);
}