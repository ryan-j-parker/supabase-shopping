export function renderItem(item, handleBought) {

    const listItem = document.createElement('div');
    listItem.classList.add('list-item');

    listItem.classList.add(item.bought ? 'bought' : 'not-bought'); 

    const itemName = document.createElement('h2');
    itemName.textContent = item.item;

    const quantityOf = document.createElement('p');
    quantityOf.textContent = item.quantity;

    listItem.append(itemName, quantityOf);

    listItem.addEventListener('click', () => {
        handleBought(item);
    });
    
    return listItem;
}