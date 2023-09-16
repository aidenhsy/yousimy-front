import Mobile from "./Mobile";
import Pc from "./Pc";

export default function Login() {
  return (
    <>
      <div className="tw-hidden sm:tw-block">
        <Pc />
      </div>
      <div className="tw-block sm:tw-hidden">
        <Mobile />
      </div>
    </>
  );
}
