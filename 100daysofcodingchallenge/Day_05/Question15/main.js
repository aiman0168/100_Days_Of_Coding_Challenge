"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let guest_list = ["Elon Musk", "Albert Einstein", "Abraham Lincoln"];
let guestwhocantmake = "Albert Einstein";
console.log(`${guestwhocantmake} cant make it to dinner`);
let new_Guest = "Zia Khan";
let idexguestwhocantmake = guest_list.indexOf(guestwhocantmake);
if (idexguestwhocantmake !== -1) {
    guest_list[idexguestwhocantmake] = new_Guest;
}
console.log("New invitation message");
guest_list.forEach((guest) => { console.log(`Dear ${guest} You are cordially invited to a dinner party`); });
