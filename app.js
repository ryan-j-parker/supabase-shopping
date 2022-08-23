// importing other stuff, utility functions for:
// working with supabase:
import { checkAuth, signOutUser, addListItem, deleteShoppingList, markItemBought, getShoppingList } from './fetch-utils.js';
// pure rendering (data --> DOM):
import { renderList } from './render-utils.js';
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
const addItemForm = document.getElementById('add-item-form');
// local state:
let listItems = [];
// display functions:

// events:
addItemForm.addEventListener('submit', async (e) => {
    e.preventDefault;
    const data = new FormData(addItemForm);
    const itemName = data.get('item-name');
    const quantity = data.get('quantity');

    await addListItem(itemName, quantity);


    addItemForm.reset();
    displayList();
});