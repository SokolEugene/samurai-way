import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {DataType, setAuthUserData} from "../redux/auth-reducer";

type MapStateToPropsType = {
    login: string | null
    isFetching?: boolean
}
type MapDispatchToPropsType = {
    setAuthUserData: (data: DataType) => void
}
type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(res => {

                if (res.data.resultCode === 0) {
                   // const data = res.data.data
                    this.props.setAuthUserData(res.data.data)
                }
            })
    }

    render() {

        return <Header {...this.props}/>
    }

}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isFetching: state.auth.isFetching,
    login: state.auth.login
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
