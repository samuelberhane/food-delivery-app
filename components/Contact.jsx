import { ImOffice } from "react-icons/im";
import { GiPostOffice, GiOfficeChair } from "react-icons/gi";
import { FaLaptopHouse } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mt-2">
      <h1 className="text-3xl font-bold text-center">
        Contact<span className="text-yellow-700">s</span>
      </h1>
      <div className="px-12 flex items-center justify-between mt-4">
        <div>
          <ImOffice className="text-4xl  text-yellow-600" />
          <h1 className="text-xl font-bold my-1">Head Office</h1>
          <p>68594 Pfannerstill Radial, Apt. 862, 88017-6198</p>
          <p>New Wardchester, New Jersey, United States</p>
        </div>
        <div>
          <GiOfficeChair className="text-4xl  text-yellow-600" />
          <h1 className="text-xl font-bold my-1">Gleasontown Branch</h1>
          <p>23141 Henry Turnpike, Suite 021, 00426-8296,</p>
          <p>Gleasontown, Idaho, United States</p>
        </div>
        <div>
          <GiPostOffice className="text-4xl  text-yellow-600" />
          <h1 className="text-xl font-bold my-1">West Alvena Branch</h1>
          <p>27805 Rigoberto Union, Apt. 410, 44867-4004</p>
          <p>West Alvena, California, United States</p>
        </div>
        <div>
          <FaLaptopHouse className="text-4xl  text-yellow-600" />
          <h1 className="text-xl font-bold my-1">Mayertport Branch</h1>
          <p>55129 Willms Roads, Apt. 713, 93572-43338</p>
          <p>Mayertport, North Carolina, United States</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
