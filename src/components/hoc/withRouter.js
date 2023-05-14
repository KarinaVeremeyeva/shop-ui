import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = (WrappedComponent) => (props) => {
  const location = useLocation();
  const navigate = useNavigate()
  const params = useParams();

  return (
    <WrappedComponent {...props} router={{ location, navigate, params }} />
  );
};

export default withRouter;