import React from 'react'
import Cover from "../../assets/img/abhi.png";
import './ProfileCard.css';

const ProfileCard = () => {
    return (
        <div className='ProfileCard'>
            <div className="ProfileImages">
                <img src={Cover} alt="cover-image" />
                <img src={Cover} alt="profile-image" />
            </div>

            <div className="ProfileName">
                <span>Abhishek Sharma</span>
                <span>Full Stack Web Developer</span>
            </div>


            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>7860</span>
                        <span>Followers</span>
                    </div>

                    <div className="vl">
                        {/* vertical line */}
                        <div className="follow">
                            <span>256</span>
                            <span>Following</span>
                        </div>
                    </div>

                </div>
                <hr />
            </div>
            <span>
                My Profile
            </span>
        </div>


    )
}

export default ProfileCard
