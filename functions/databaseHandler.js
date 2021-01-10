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
        console.log("getting waitlist")
        const snapshot = await this.db.collection('waitlist').where("name", "==", rName).get();
        var waitlist = []
        // Print the ID and contents of each document
        snapshot.forEach(doc => {
            let entry = {
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