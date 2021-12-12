import {connect} from "react-redux";
import {UsersPageType, UsersType} from "../../redux/store";
import {Dispatch} from "redux";
import {addMoreUsersAC, followUserAC, unfollowUserAC} from "../../redux/user-reducer";
import {Users} from "./Users";


type mapStateToPropsType = {
    usersPage: UsersPageType
}

type mapDispatchToPropsType = {
    addMoreUsers: (users: Array<UsersType>) => void
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
}


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: mapStateToPropsType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}


const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMoreUsers: (users: Array<UsersType>) => dispatch(addMoreUsersAC(users)),
        followUser: (userId: string) => dispatch(followUserAC(userId)),
        unfollowUser: (userId: string) => dispatch(unfollowUserAC(userId)),
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)