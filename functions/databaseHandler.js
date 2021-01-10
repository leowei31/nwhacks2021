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

    async getMenu(rName) {
        var menu = [];
        var restaurantRef = this.db.collection("restaurant")
        const snapshot = await restaurantRef.where('name', '==', rName).get();
        if (snapshot.empty) {
            return menu
        }
        let item;
        snapshot.forEach(doc => {
            item = doc.data()
        })
        if (!item || !item.menu) {
            return menu
        }
        const res = await item.menu.get()
        let categories = res.data()
        for (let key in Object.keys(categories)) {
            let menuItem = {[Object.keys(categories)[key]]: Object.values(categories)[key]}
            menu.push(menuItem)
        }
        return menu
    }

    async getWaitlist(rName) {
        var restaurantRef = this.db.collection("restaurant");
        const waitlistSnapshot = await restaurantRef.where('name', "==", rName).get();
        if (waitlistSnapshot.empty) {
            return [];
        }
        var item;
        waitlistSnapshot.forEach(doc => {
            item = doc.data();
        });
        const res = await item.waitlist.get();
        return res.data();
    }
}
module.exports = {
    db: new DatabaseHandler()
}