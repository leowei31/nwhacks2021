class DatabaseHandler {
    constructor() {
        const admin = require('firebase-admin');
        admin.initializeApp();
        this.db = admin.firestore()
    }
    async demoInitialize() {
        // [START demo_initialize]
        // Fetch data from Firestore
        console.log("hello")
        const snapshot = await this.db.collection('users').get();

        // Print the ID and contents of each document
        snapshot.forEach(doc => {
            console.log(doc.data());
        });

        return snapshot;
    }

    async getMenu() {
        console.log('getting menu list');
        var menu = [];
        const waitlistSnapshot = await this.db.collection('menu').get();
        waitlistSnapshot.forEach(doc => {
            menuItem = {
                item: doc.data().item,
                price: doc.data().price,
                isVegetarian: doc.data().isVegetarian
            }
            menu.push(menuItem);
            console.log(menu);
        });
        return menu;
    }

    async getWaitlist() {
        console.log("getting waitlist")
        const snapshot = await this.db.collection('waitlist').get();
        var waitlist = []
        // Print the ID and contents of each document
        snapshot.forEach(doc => {
            entry = {
                email: doc.data().email,
                timestamp: doc.data().timestamp,
                partySize: doc.data().partySize
            };
            waitlist.push(entry)
        });

        return waitList;
    }
}
module.exports = {
    db: new DatabaseHandler()
}