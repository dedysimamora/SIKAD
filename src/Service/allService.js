import Firebase from "../Commons/FirebaseConfig";

const userSettingsApi = {};
const db = Firebase.firestore();

userSettingsApi.getAllArsip = () => {
  return new Promise((resolve, reject) => {
    db.collection("arsip")
      .get()
      .then((snapshot) => {
        let allArsip = [];
        snapshot.forEach((doc) => {
          //   console.log(doc.data(), "<<<<<<<<<<<<data bro");
          // console.log(doc.data(), "<<<<<<");
          if (
            doc.data().tipeArsip == "arsipAktif" ||
            doc.data().tipeArsip == "arsipInaktif" ||
            doc.data().tipeArsip == "arsipStatis"
          ) {
            allArsip.push({ ...doc.data(), arsipId: doc.id });
          }
        });
        // console.log(allArsip, "<<<<<<<<<<<<<");
        resolve(allArsip);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

userSettingsApi.createArsip = (createData) => {
  return new Promise((resolve, reject) => {
    db.collection("arsip")
      .get()
      .then((snapshot) => {
        let allArsip = [];
        snapshot.forEach((doc) => {
          allArsip.push(doc.data());
        });

        resolve(allArsip);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default userSettingsApi;
