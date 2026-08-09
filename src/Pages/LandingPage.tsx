import { FormattedMessage } from "react-intl";

const LandingPage = () => {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-r from-black to-white">
      <p className="flex items-center justify-center min-h-screen w-full">
        <FormattedMessage id="landing.title" />
      </p>
    </div>
  );
};

export default LandingPage;