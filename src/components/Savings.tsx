const Savings = () => {
  const user = localStorage.getItem("user");
  const user_details = user && JSON.parse(user);
  return (
    <section className=" flex flex-col gap-6">
      <h1 className="text-3xl font-bold mb-4">Savings</h1>
      <article className="bg-yellow-500 text-black p-3 rounded mb-4">
        This is a simulated platform: investment and savings user_details are
        for demonstration purposes only.
      </article>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mb-6">
        <article
          style={{
            backgroundColor: "rgb(255 255 255 / 0.1)",
          }}
          className="bg-transparent py-8 px-4 rounded-lg flex flex-col gap-2"
        >
          <h2 className="text-gray-400">Total Savings</h2>
          <p className="text-xl text-white">
            ${user_details?.totalInvestments}
          </p>
        </article>

        <article
          style={{
            backgroundColor: "rgb(255 255 255 / 0.1)",
          }}
          className="bg-transparent py-8 px-4 rounded-lg flex-col gap-2"
        >
          <h2 className="text-gray-400">Available Funds</h2>
          <p className="text-xl text-white">${user_details?.availableFunds}</p>
        </article>
      </div>
      <section>
        <h2 className="text-2xl font-bold mb-2">Savings Plans</h2>
        <div className="flex flex-col gap-4">
          {user_details &&
            user_details?.savingsPlans.map(
              (plan: { type: string; balance: number }) => (
                <article
                  key={plan.type}
                  style={{
                    backgroundColor: "rgb(255 255 255 / 0.1)",
                  }}
                  className="bg-transparent py-8 px-4 rounded-lg flex justify-between"
                >
                  <span>{plan.type}</span>
                  <span>{plan.balance}</span>
                </article>
              )
            )}{" "}
        </div>
      </section>
    </section>
  );
};

export default Savings;
