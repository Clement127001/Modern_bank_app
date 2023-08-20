import { clients } from "../constants";
import styles from "../style";

const Client = () => {
  return (
    <div className={`${styles.flexCenter}  my-2`}>
      <div
        className={`${styles.flexCenter} w-full flex-1 flex-wrap justify-around sm:flex-row flex-col`}
      >
        {clients.map((client) => (
          <div key={client.id}>
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[200px] object-contain  sm:mt-0 mt-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
