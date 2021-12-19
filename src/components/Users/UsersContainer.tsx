import {connect} from "react-redux";
import {UsersPageType, UsersType} from "../../redux/store";
import {Dispatch} from "redux";
import {
    addMoreUsersAC,
    changeUserPageNumberAC,
    followUserAC,
    setTotalUsersCountAC,
    unfollowUserAC
} from "../../redux/user-reducer";
import {Users} from "./Users";


type mapStateToPropsType = {
    usersPage: UsersPageType
}

type mapDispatchToPropsType = {
    addMoreUsers: (users: Array<UsersType>) => void
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    selectPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
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
        selectPage: (page: number) => dispatch(changeUserPageNumberAC(page)),
        setTotalUsersCount: (count: number) => dispatch(setTotalUsersCountAC(count))
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)