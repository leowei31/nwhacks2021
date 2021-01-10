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

}
module.exports = {
    db: new DatabaseHandler()
}