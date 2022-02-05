import {Profile} from "./Profile";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


export default compose(
    withRouter
)(Profile)


export const WithRouterProfile = withRouter(Profile)




