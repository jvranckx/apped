import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux"

const ProtectedRoute = (props) => {
    const { isLoggedIn, children } = props
    return isLoggedIn ? children : <Navigate to="/signin" />;
};

const mapStateToProps = (state) => ({
    isLoggedIn: false,
});

export default connect(mapStateToProps, null)(ProtectedRoute);