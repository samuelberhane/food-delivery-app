import Image from "next/image";
const Aboutus = () => {
  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold text-center">
        About <span className="text-yellow-700">Us</span>{" "}
      </h1>
      <p className="text-center mt-2 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ducimus
        error ex velit quas commodi!
      </p>
      <div className="flex items-center px-12 gap-12">
        <Image
          src="/img/plate.jpeg"
          alt="foodPlate"
          height={300}
          width={400}
          className="bg-green-400"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">
            We Deliver Your Meals Right To Your Door!
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga iste
            debitis eum ut dolor aliquam, nihil nam nostrum voluptates quaerat
            doloribus magnam vero provident eos maiores cupiditate ab ipsam
            officiis ipsum.
          </p>
          <p className="my-2">
            Consequatur in doloremque minus ipsam tenetur exercitationem eum
            ratione ducimus, voluptatem atque sunt nulla hic, consequuntur,
            aliquid expedita eos sint. Autem corporis recusandae sint
            consequatur vel quis rem earum velit, nemo veritatis dolore. Ducimus
            voluptas architecto expedita libero aliquid eum molestias qui. Amet
            aliquid consequuntur aperiam cupiditate, quia voluptate voluptatum
            maiores, omnis nulla doloribus eligendi animi autem non recusandae
            quam nemo ea! Animi quos omnis officia velit deleniti placeat.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga iste
            debitis eum ut dolor aliquam, nihil nam nostrum voluptates quaerat
            doloribus magnam vero provident eos maiores cupiditate ab ipsam
            officiis ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
