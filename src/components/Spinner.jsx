import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100% auto",
};

// eslint-disable-next-line react/prop-types
const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
