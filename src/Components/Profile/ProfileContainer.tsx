import React, {useEffect} from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {useParams} from "react-router-dom";
import {ProfileUserType, setUserProfile} from "../redux/profile-reducer";
import {AppStateType} from "../redux/redux-store";
import {Profile} from "./Profile";

type MapStateToPropsType = {
    profile: ProfileUserType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

function ProfileContainer(props: ProfilePropsType) {
    let { userId } = useParams();
    if (!userId) {
        // @ts-ignore
        userId = 2;
        //userId :props.profile.userId;
    }

    useEffect(() => {
        console.log(props)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                props.setUserProfile(response.data);
            });
    }, [userId]);

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType=> ({
    profile: state.profilePage.profile
})

export default connect (mapStateToProps, {setUserProfile})(ProfileContainer)

























































/*import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {ProfileUserType, setUserProfile} from "../redux/profile-reducer";


type MapStateToPropsType = {
    profile: ProfileUserType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileAPIContainer extends React.Component<ProfilePropsType, AppStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1053`)
            .then(res => {
                debugger
                this.props.setUserProfile(res.data);

            })
    }

    render() {
        debugger
        console.log({...this.props})
        return (
            //   <div className={"profileContent"}>
            <Profile {...this.props} profile={this.props.profile}/>
            //  </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export const ProfileContainer: any = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer);
*/