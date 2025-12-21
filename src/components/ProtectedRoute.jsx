import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { user } = useSelector((state) => state.client);
    const token = localStorage.getItem('token');

    return (
        <Route
            {...rest}
            render={(props) =>
                user && token ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

export default ProtectedRoute;
