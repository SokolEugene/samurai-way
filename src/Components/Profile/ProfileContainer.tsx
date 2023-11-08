import React from "react";
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
