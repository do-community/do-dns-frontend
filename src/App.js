import { useForm } from "react-hook-form";

export default function App() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-indigo-500 to-blue-800 flex items-center justify-center">
      <div className="md:w-3/4 lg:w-1/3 mx-auto">
        {/* header */}
        <h2 className="font-extrabold text-white text-5xl text-center mb-16">
          <span className="block text-2xl mb-2 text-blue-100">
            DigitalOcean
          </span>
          DNS API
        </h2>

        {/* form */}
        <DNSForm />
      </div>
    </div>
  );
}

function DNSForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* register your input into the hook by invoking the "register" function */}
      <div>
        <input
          className="w-full py-4 px-3 text-xl text-white rounded shadow-xl bg-transparent border border-blue-500 focus:outline-none focus:border-yellow-400 placeholder-blue-500"
          name="secret"
          placeholder="Your Secret Password"
          ref={register}
        />
      </div>
      <div>
        <input
          className="w-full py-4 px-3 text-xl text-white rounded shadow-xl bg-transparent border border-blue-500 focus:outline-none focus:border-yellow-400 placeholder-blue-500"
          name="name"
          placeholder="Your Subdomain"
          ref={register}
        />
      </div>
      <div>
        <input
          className="w-full py-4 px-3 text-xl text-white rounded shadow-xl bg-transparent border border-blue-500 focus:outline-none focus:border-yellow-400 placeholder-blue-500"
          name="ip"
          placeholder="Your IP Address"
          ref={register}
        />
      </div>

      <button className="block w-full bg-yellow-300 text-yellow-900 p-4 rounded shadow-xl hover:bg-yellow-200 hover:text-black transition duration-150">
        Create DNS Entry
      </button>
    </form>
  );
}
