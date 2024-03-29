import { useForm } from "react-hook-form";

export default function App() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-indigo-500 to-blue-800 flex items-center justify-center">
      <div className="w-full px-12 md:px-0 md:w-3/4 lg:w-1/3 mx-auto">
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

  async function onSubmit(data) {
    const res = await fetch("https://dns.scubaschool.cloud/api", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        password: data.secret,
        name: data.name,
        ip: data.ip,
      }),
    });

    const stuff = await res.json();
    if (stuff.error) return alert(`Error! ${stuff.error}`);
    alert("Success! DNS created!");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div>
        <label className="block text-sm text-white mb-2">Subdomain</label>
        <input
          className="w-full py-4 px-3 text-xl text-white rounded shadow-xl bg-transparent border border-blue-200 focus:outline-none focus:border-yellow-400 placeholder-blue-200"
          name="name"
          placeholder="Your Subdomain"
          ref={register}
        />
      </div>

      <div>
        <label className="block text-sm text-white mb-2">Password</label>
        <input
          className="w-full py-4 px-3 text-xl text-white rounded shadow-xl bg-transparent border border-blue-200 focus:outline-none focus:border-yellow-400 placeholder-blue-200"
          name="secret"
          placeholder="Your Secret Password"
          ref={register}
        />
      </div>

      <div>
        <label className="block text-sm text-white mb-2">
          IP (192.168.1.1)
        </label>
        <input
          className="w-full py-4 px-3 text-xl text-white rounded shadow-xl bg-transparent border border-blue-200 focus:outline-none focus:border-yellow-400 placeholder-blue-200"
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
