// importing other stuff, utility functions for:
// working with supabase:
import { checkAuth, signOutUser, addListItem, deleteShoppingList, markItemBought, getShoppingList } from './fetch-utils.js';
// pure rendering (data --> DOM):
import { renderItem } from './render-utils.js';
/*  "boiler plate" auth code */
// checking if we have a user! (will redirect to auth if not):
checkAuth();
// can optionally return the user:
// const user = checkAuth();

// sign out link:
const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);
/* end "boiler plate auth code" */

// grab needed DOM elements on page:
const addForm = document.getElementById('add-form');
const listItemsDiv = document.getElementById('list-items');
const deleteBtn = document.getElementById('delete-btn');

// local state:
let groceryList = [];

addForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = new FormData(addForm);
    let list = {
        item: data.get('name'),
        quantity: data.get('quantity')
    };

    await addListItem(list);
    groceryList = await getShoppingList();

    displayList();
    addForm.reset();
});

// display functions:
async function handleBought(item) {
    await markItemBought(item.id);

    groceryList = await getShoppingList();
    displayList();
}

async function displayList() {
    listItemsDiv.innerHTML = '';

    for (let item of groceryList) {
        const listItemEl = await renderItem(item, handleBought);
        listItemsDiv.append(listItemEl);
    }
}

displayList();

async function onLoad() {
    groceryList = await getShoppingList();
    displayList();
}

onLoad();

deleteBtn.addEventListener('click', async () => {
    await deleteShoppingList();
    groceryList = [];
    displayList();
});