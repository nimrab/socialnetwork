import {connect} from "react-redux";
import {UsersType} from "../../redux/store";
import {Dispatch} from "redux";
import {addMoreUsersAC, followUserAC, unfollowUserAC} from "../../redux/user-reducer";
import {Users} from "./Users";


type mapStateToPropsType = {
    users: Array<UsersType>
}

type mapDispatchToPropsType = {
    addMoreUsers: (users: Array<UsersType>) => void
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
}

const mapStateToProps = (state: mapStateToPropsType): mapStateToPropsType => {
    return {
        users: state.users
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