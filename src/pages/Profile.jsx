import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;

            if (user) {
                try {
                    const docRef = doc(db, "users", user.uid);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        setUserData(docSnap.data());
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
            setLoading(false);
        };

        fetchUserData();
    }, []);

    if (loading) return <div className="loading-text">Loading Profile...</div>;

    return (
        <div className="profile-container">
            <div className="glass-card">
            <h1>Profile</h1>
                <div className="profile-info-list">
                    <p className="profile-field">
                        <span className="label">Username:</span> {userData?.username || "Not set"}
                    </p>
                    <p className="profile-field">
                        <span className="label">Email:</span> {auth.currentUser?.email}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;