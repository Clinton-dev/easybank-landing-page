function WhyUs() {
  return (
    <div className="bg-neutral-light-grayish-blue text-center md:text-left px-4 md:px-28 pb-20 md:pb-16">
      <div className=" pt-20 ">
        <h3
          className="text-primary-dark-blue font-bold "
          style={{ fontSize: "36px" }}
        >
          Why choose Easybank?
        </h3>
        <p className="text-neutral-grayish-blue my-8 md:w-3/5">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="flex justify-between flex-col md:flex-row gap-4 mt-20">
        <div>
          <div className="flex justify-center md:justify-start">
            <img src="./icon-online.svg" alt="" />
          </div>
          <h4 className="py-8">Online Banking</h4>
          <p>
            Our mordern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div>
          <div className="flex justify-center md:justify-start">
            <img src="./icon-online.svg" alt="" />
          </div>
          <h4 className="py-8">Simple Budgeting</h4>
          <p>
            see exactly where your money goes each month. Recieve notifications
            when you're close to hitting your limits.
          </p>
        </div>
        <div>
          <div className="flex justify-center md:justify-start">
            <img src="./icon-online.svg" alt="" />
          </div>
          <h4 className="py-8">Fast Onboarding</h4>
          <p>
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div>
          <div className="flex justify-center md:justify-start">
            <img src="./icon-online.svg" alt="" />
          </div>
          <h4 className="py-8">Open API</h4>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking you money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
